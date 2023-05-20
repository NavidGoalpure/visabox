import React, { useEffect, useState } from 'react';
import { Client } from 'Interfaces/Database/Client';

type ContextProps = {
  children: React.ReactNode;
  prevData?: Client;
};
interface FormDataContextProps {
  Client: Client | undefined;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
}
const FormDataContext = React.createContext({} as FormDataContextProps);
//
function FormDataContextProvider(props: ContextProps) {
  const [Client, setClient] = useState<Client>(
    props.prevData || ({} as Client)
  );
  //////////////
  console.log('navid Client=', Client);

  //
  return (
    <FormDataContext.Provider
      value={{
        Client,
        setClient,
      }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
}
export { FormDataContextProvider, FormDataContext };
