import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "Utils/sanity";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { session } = JSON.parse(req.body);

  sanityClient
    .create({ _type: "client", email: session?.user?.email })
    .then(() => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      res.status(500).json({ message: "couldn't create the user", err });
      console.log("navid err ===", err);
    });
}
