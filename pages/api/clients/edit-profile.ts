import { Client } from "Interfaces/Database/Client";
import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "Utils/sanity";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const client: Client = body?.client;

  if (client?._id) {
    sanityClient
      // uncomment only if you want to delete your account from sanity
      // do not push this uncommented to main branch under any circumstance
      // .delete({ query: `*[_type =="client" && _id == '${client?._id}']` })
      .patch(client?._id)
      .set(client)
      .commit()
      .then(() => {
        res.status(200).json({ message: "success" });
      })
      .catch((err) => {
        const errors = err?.response?.body?.error?.items;
        res.status(500).send({ message: "request failed", errors });
      });
  } else {
    res.status(401).send({
      message: "The user has not _id",
    });
  }
}
