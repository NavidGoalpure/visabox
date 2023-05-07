import { ClientData } from 'Interfaces/Client';
import { useSession } from 'next-auth/react';
import { getClientDetail } from 'Queries/client';
import React, { useEffect, useState } from 'react';
import { proxySanityClientResponseToCamelCase } from 'Utils/query/clients';

type ContextProps = {
  children: React.ReactNode;
  prevData?: ClientData;
};
interface FormDataContextProps {
  clientData: ClientData | undefined;
  setClientData: React.Dispatch<React.SetStateAction<ClientData>>;
}
const FormDataContext = React.createContext({} as FormDataContextProps);
//
function FormDataContextProvider(props: ContextProps) {
  const [clientData, setClientData] = useState<ClientData>(
    props.prevData || ({} as ClientData)
  );
  const { data: session } = useSession();

  const getClientData = async () => {
    const data = await getClientDetail({
      email: session?.user?.email || `defensive`,
      resParams: `
      _id,
      name,
      lastname,
      age,
      phone,
      marital,
      field_of_study,
      degree,
      current_job,
      work_experience,
      australian_work_experience,
      ielts_score,
      is_sharable`,
    });

    if (data.clientData[0])
      setClientData(proxySanityClientResponseToCamelCase(data.clientData[0]));
  };
  useEffect(() => {
    if (session) {
      getClientData();
    }
  }, [session]);

  //
  return (
    <FormDataContext.Provider
      value={{
        clientData,
        setClientData,
      }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
}
export { FormDataContextProvider, FormDataContext };
