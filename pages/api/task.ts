import { NextApiRequest, NextApiResponse } from "next";

const admin = require("firebase-admin");

const serviceAccount = require("../../secret.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  if (method === "POST") {
    console.log(req.body, "req_body");
    console.log(req.method, "req_method");
    const { name, email } = body;
    const docRef = db.collection("tasks").doc("name");

    await docRef.set({
      name,
      email
    });
    res.status(200).send("Successfully created post request");
  } else {
    res.status(500).send("Something is wrong, Please try later");
  }
}
