import { NextApiRequest, NextApiResponse } from "next";

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req) {
    res.status(200).json({ name: "shilpi" });
  }
}
