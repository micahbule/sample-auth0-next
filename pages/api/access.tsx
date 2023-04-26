// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { accessToken } = await getAccessToken(req, res);

  console.log('accessToken', accessToken);

  res.status(200).json({ accessToken })
}

export default withApiAuthRequired(handler);