import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { activeBoughtItems } from 'Queries/Payment';
import Stripe from 'stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST!, {
    apiVersion: '2023-10-16',
  });

  const { sessionId, userId } = req.body;

  try {
    const session = await stripe.checkout.sessions.retrieve(
      sessionId as string,
      {
        expand: ['line_items'],
      }
    );

    const boughtItemId = session?.line_items?.data[0]?.price?.id;

    if (boughtItemId && userId) {
      await activeBoughtItems({ boughtItemId, userId });
      res
        .status(200)
        .json({ message: 'Successfully activated the bought item.' });
    } else {
      res.status(400).json({ errors: ['boughtItemId or userId not provided'] });
    }
  } catch (error: any) {
    console.error('Stripe Session retrieve Error:', error.message);
    res.status(500).json({ errors: ['Internal server error'] });
  }
}
