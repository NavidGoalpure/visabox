import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from 'Utils/sanity';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req?.body;

  if (userId) {
    sanityClient
      .patch(userId)
      .setIfMissing({ credit: 0 })
      .dec({ credit: 1 })
      .commit()
      .then(() => {
        res.status(200).json({ message: 'success' });
      })
      .catch((err) => {
        const errors = err?.response?.body?.error?.items;
        res.status(500).send({ message: 'request failed', errors });
      });
  } else {
    res.status(401).send({
      errors: ['The user has not _id'],
      message: 'request failed',
    });
  }
}
