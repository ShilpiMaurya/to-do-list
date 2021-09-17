import { NextApiRequest, NextApiResponse } from "next";

const { setCookie } = require("nookies");
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
  try {
    const { method } = req;
    const { email, password, displayName, checked } = req.body;

    if (method === "POST") {
      const uniqueUserId = await auth.createUser({
        email,
        password,
        displayName
      });
      if (checked === true) {
        setCookie({ res }, "uid", `${uniqueUserId.uid}`, {
          maxAge: 30 * 24 * 60 * 60,
          httpOnly: true,
          path: "/"
        });
      }
      res.status(200).json({ uid: uniqueUserId.uid });
    } else {
      res.status(405).send("Method not allowed");
    }
  } catch (error) {
    res.status(500).send({ message: `${error.code} - ${error.message}` });
  }
}
