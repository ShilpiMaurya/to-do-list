import { NextApiRequest, NextApiResponse } from "next";
var firebase = require("firebase/app");

type Data = {
  name: string;
};

const firebaseConfig = {
  apiKey: "AIzaSyAFJuDCPagQiINhvYhDkMuDHP-77rxMG7E",
  authDomain: "to-do-list-b3c7c.firebaseapp.com",
  databaseURL: "https://to-do-list-b3c7c.firebaseio.com",
  projectId: "to-do-list-b3c7c",
  storageBucket: "to-do-list-b3c7c.appspot.com",
  messagingSenderId: "1035134599878",
  appId: "1:1035134599878:web:bd63a26c7616509b044dc7",
  measurementId: "G-B6FMFG70ME"
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("hi from server");
  }
  res.status(200).json({ name: "shilpi maurya" });
}
