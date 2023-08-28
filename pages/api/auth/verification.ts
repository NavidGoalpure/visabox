import { UserRole } from 'Interfaces/Database';
import { NextApiRequest, NextApiResponse } from 'next';
import { convertToMd5 } from 'Utils/query';
import { sanityClient } from 'Utils/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { session, userRole } = req.body;
    const email = session?.user?.email;

    if (email && session) {
      const result = await sanityClient.createIfNotExists({
        _type: (userRole as UserRole).toLowerCase(),
        _id: convertToMd5(email),
        email: session?.user?.email,
        avatar: session?.user?.image,
        status: userRole === UserRole.Client ? 'active' : 'deactive',
      });
      if (result._type !== userRole.toLowerCase())
        return res.status(409).json({
          error: `This account used for role of ${result._type}`,
          message: `You can only have one role with each account. You can Login in role of ${result._type}`,
        });
      return res.status(200).json({ result });
    } else {
      return res.status(400).json({
        error: 'Bad Request',
        message: "The 'email' field is missing in the request.",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Server error', message: 'Problem in creating user' });
  }
}
