import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "Utils/sanity";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { clientData } = JSON.parse(req.body);
  sanityClient
    .patch(clientData?._id)
    .set({
      name: clientData?.name,
      lastname: clientData?.lastName,
      phone: clientData?.phoneNumber,
      age: clientData?.age,
      marital: clientData?.marital,
      field_of_study: clientData?.fieldOfStudy,
      degree: clientData?.degree,
      current_job: clientData?.currentJob,
      work_experience: clientData?.workExperience,
      australian_work_experience: clientData?.australianWorkExperience,
      ielts_score: clientData?.IELTSScore,
    })
    .commit()
    .then(() => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.log("navid err ===", err?.response?.body?.error?.items);
      const errors = err?.response?.body?.error?.items;
      res.status(500).send({ message: "navid", errors });
    });
}
