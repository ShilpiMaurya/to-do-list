import { NextApiRequest, NextApiResponse } from "next";
require("firebase/auth");
const firebase = require("firebase");
const admin = require("firebase-admin");
const serviceAccount = process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT;
const { setCookie } = require("nookies");

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

if (!admin.apps.length) {
  if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccount))
    });
  } else {
    console.error("Cant read or access serviceAccount");
  }
}

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    const { userEmail, userPassword, isUserChecked } = req.body;

    if (method === "POST") {
      const uniqueUserId = await firebase
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword);

      if (isUserChecked === true) {
        setCookie({ res }, "uid", `${uniqueUserId.user.uid}`, {
          maxAge: 12 * 30 * 24 * 60 * 60,
          httpOnly: true,
          path: "/"
        });
      } else {
        setCookie({ res }, "uid", `${uniqueUserId.user.uid}`, {
          maxAge: 24 * 60 * 60,
          httpOnly: true,
          path: "/"
        });
      }

      res.status(200).json({ uid: uniqueUserId.user.uid });
    } else {
      res.status(405).send("Method not allowed");
    }
  } catch (error) {
    res.status(500).send({ message: `${error.code} - ${error.message}` });
  }
}
