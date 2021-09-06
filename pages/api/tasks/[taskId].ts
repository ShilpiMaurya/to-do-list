import { NextApiRequest, NextApiResponse } from "next";

const admin = require("firebase-admin");
const serviceAccount = process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT;

if (!admin.apps.length) {
  if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccount))
    });
  } else {
    console.error("Cant read or access serviceAccount");
  }
}

const db = admin.firestore();
export default async function deleteHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { taskId } = req.query;
    const { method } = req;
    if (method === "DELETE") {
      await db
        .collection("tasks")
        .doc(taskId)
        .delete();
      res.status(200).send("Successfully deleted a document");
    } else {
      res.status(405).send("Method not allowed");
    }
  } catch (error) {
    res.status(500).send({ message: `${error.code} - ${error.message}` });
  }
}
