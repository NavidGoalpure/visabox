import { ClientData } from "Interfaces/Client";
import { useSession } from "next-auth/react";
import { getClientDetail } from "Queries/client";
import React, { useEffect, useState } from "react";
import { proxySanityClientResponseToCamelCase } from "Utils/query/clients";
import { ClientQueryKeys } from "Utils/query/keys";
import { useQuery } from "react-query";

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
  //////////////
  const reqParams = `email == "${session?.user?.email || "defensive"}"`;
  const resParams = `
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
      is_sharable,
      uni_section,
      `;
      
  const { data } = useQuery(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    }
  );
 
  useEffect(() => {
    if (data?.clientData[0])
      setClientData(proxySanityClientResponseToCamelCase(data.clientData[0]));
  }, [data]);

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
