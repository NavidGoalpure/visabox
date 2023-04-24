import { ClientData } from "Interfaces/Client";
import { getClientDetail_Form } from "Queries/client";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { proxySanityClientResponseToCamelCase } from "Utils/query/clients";


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
  const queryClient = useQueryClient();
  const getClientData = async () => {
  
  const data = await getClientDetail_Form("name=='farzam'");
  setClientData(proxySanityClientResponseToCamelCase(data.clientData[0]));
  };

  useEffect(() => {
    getClientData();
  }, []);

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
