import { NextApiRequest, NextApiResponse } from "next";

const { parseCookies } = require("nookies");
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
  try {
    const { body, method } = req;
    const parsedCookies = parseCookies({ req });
    const uidCookie = parsedCookies.uid;

    if (method === "POST") {
      if (uidCookie) {
        const {
          taskTitle,
          description,
          startDate,
          endDate,
          status,
          priority
        } = body;

        const docRef = await db.collection(`${uidCookie}`).add({
          taskTitle,
          description,
          startDate,
          endDate,
          status,
          priority
        });
        res.status(200).json({ uniqueId: docRef.id });
      } else {
        res.status(401).send("Unauthorized Request");
      }
    }

    if (method === "GET") {
      if (uidCookie) {
        let taskList: Array<{
          endDate: string;
          status: string;
          priority: string;
          description: string;
          startDate: string;
          taskTitle: string;
        }> = [];

        const tasks = db.collection(`${uidCookie}`);
        const snapshot = await tasks.get();
        snapshot.forEach((doc: any) => {
          taskList.push(doc.data());
        });
        res.status(200).json(taskList);
      } else {
        res.status(401).send("Unauthorized Request");
      }
    }
    res.status(405).send("Method not allowed");
  } catch (error) {
    res.status(500).send({ message: `${error.code} - ${error.message}` });
  }
}
