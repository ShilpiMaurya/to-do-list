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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  if (method === "POST") {
    const {
      taskTitle,
      description,
      startDate,
      endDate,
      status,
      priority
    } = body;
    const uniqueId = db.collection("tasks").doc().id;
    const docRef = db.collection("tasks").doc(uniqueId);
    await docRef.set({
      taskTitle,
      description,
      startDate,
      endDate,
      status,
      priority
    });
    res.status(200).send("Successfully created post request");
  } else if (method === "DELETE") {
    await db
      .collection("tasks")
      .doc()
      .delete();
    res.status(200).send("Successfully deleted a document");
  } else {
    res.status(500).send("Something is wrong, Please try later");
  }
}
