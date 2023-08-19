import { UserRole } from 'Interfaces/Database';
import { NextApiRequest, NextApiResponse } from 'next';
import { convertToMd5 } from 'Utils/query';
import { sanityClient } from 'Utils/sanity';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { session, userRole } = JSON.parse(req.body);
  const email = session?.user?.email;

  if (email) {
    sanityClient
      .createIfNotExists({
        _type: (userRole as UserRole).toLowerCase(),
        _id: convertToMd5(email),
        email: session?.user?.email,
        avatar: session?.user?.image,
        status: userRole === UserRole.Client ? 'active' : 'deactive',
      })
      .then(() => {
        res.status(200).json({ message: 'success' });
      })
      .catch((err) => {
        res.status(500).json({ message: "couldn't create the user", err });
      });
  }
}
