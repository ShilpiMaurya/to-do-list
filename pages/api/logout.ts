import { NextApiRequest, NextApiResponse } from "next";
const { setCookie } = require("nookies");

export default async function logoutHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    if (method === "GET") {
      setCookie({ res }, "uid", "", {
        maxAge: -1,
        path: "/",
        httpOnly: true
      });
      res.status(200).send("Successfully deleted cookie");
    } else {
      res.status(405).send("Method not allowed");
    }
  } catch (error) {
    res.status(500).send({ message: `${error.code} - ${error.message}` });
  }
}
