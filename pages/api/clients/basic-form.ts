import { Status } from 'Interfaces/Database';
import { ClientCompletedForms, ClientCompletedForms_obj, ClientData } from 'Interfaces/Database/Client';
import { NextApiRequest, NextApiResponse } from 'next';
import { ClientData_Sanity } from 'Queries/client/interface';
import { sanityClient } from 'Utils/sanity';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const clientData: ClientData = body?.clientData;

  // اگه اولین باره که بیسیک فرم رو پر میکنه به پراپرتی کامپلیتدفرمز اضافه میکنیم
  // اگه قبلا اضافه شده دوباره کاری نمیکنیم
  function getSmartCompletedForms(
    formsData: ClientCompletedForms_obj[] | undefined
  ): ClientCompletedForms_obj[] | undefined {
    if (!formsData) return undefined;
    if (
      formsData.filter(
        (formData) => formData.forms === ClientCompletedForms.BasicForm
      ).length > 0
    )
      return formsData;
    return [
      ...formsData,
      {
        forms: ClientCompletedForms.BasicForm,
        _type: 'client_completed_forms_obj',
      },
    ];
  }

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
    uni_section: clientData?.uniSection,
    status: Status.ACTIVE,
    role: 'normal',
    email: clientData?.email,
    completed_forms: getSmartCompletedForms(clientData?.completedForms),
  };
  if (clientData?._id) {
    sanityClient
      .patch(clientData?._id)
      .set(params)
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
      message: 'The user have not _id',
    });
  }
}
