import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { isItOnLive } from 'Utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: '2023-10-16',
  });
  const domain = 'https://www.marabox.com.au';
  const { priceId } = await req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${domain}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/payment/cancel`,
      automatic_tax: { enabled: true },
    });

    res.status(200).json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe Session Creation Error:', error.message);
    res.status(500).json({ errors: [error] });
  }
}
