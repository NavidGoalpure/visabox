import React, { useState } from "react";
import { ClientData } from "./interface";

type ContextProps = {
  children: React.ReactNode;
  prevData?:ClientData;
};
interface FormDataContextProps {
  clientData: ClientData;
  setClientData: React.Dispatch<React.SetStateAction<ClientData>>;
} 
const FormDataContext = React.createContext({} as FormDataContextProps);
//
function FormDataContextProvider(props: ContextProps) {
  const [clientData, setClientData] = useState<ClientData>(props.prevData || {} as ClientData);

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
