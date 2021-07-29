// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
const fetch = require('node-fetch');

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const response = await fetch(""); //firebase
  res.status(200).json({ name: 'John Doe' })
}
