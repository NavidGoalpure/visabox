import {
  ClientCompletedForms,
  ClientCompletedForms_obj,
  Client,
  ClientRole,
} from 'Interfaces/Database/Client';
import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from 'Utils/sanity';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const Client: Client = body?.Client;

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
        _key: new Date().toString() + Math.random().toString(),
      },
    ];
  }

  const params: Client = {
    ...Client,
    completed_forms: getSmartCompletedForms(Client?.completed_forms),
    role: ClientRole.Normal,
  };
  if (Client?._id) {
    sanityClient
      .patch(Client?._id)
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
