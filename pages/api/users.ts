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

const auth = admin.auth();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { email, password, displayName } = req.body;
  if (method === "POST") {
    const uniqueUserId = await auth.createUser({
      email,
      password,
      displayName
    });
    res.status(200).json({ uid: uniqueUserId.uid });
  } else {
    res.status(405).send("Method not allowed");
  }
}
