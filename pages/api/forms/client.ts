import { ClientData } from 'Interfaces/Client';
import { NextApiRequest, NextApiResponse } from 'next';
import { ClientData_Sanity } from 'Queries/client/interface';
import { sanityClient } from 'Utils/sanity';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const clientData: ClientData = body?.clientData;
  const params: ClientData_Sanity = {
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
    is_sharable: clientData?.isSharable,
  };
  if (clientData?._id) {
    sanityClient
      .patch(clientData?._id)
      .set(params)
      .commit()
      .then(() => {
        console.log('navid sercer success');

        res.status(200).json({ message: 'success' });
      })
      .catch((err) => {
        console.log('navid sercer errr');

        const errors = err?.response?.body?.error?.items;
        res.status(500).send({ message: 'navid', errors });
      });
  } else {
    res.status(401).send({
      message: 'The user have not _id',
    });
  }
}
