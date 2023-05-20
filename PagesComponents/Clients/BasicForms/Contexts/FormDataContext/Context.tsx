import React, { useEffect, useState } from 'react';
import { Client } from 'Interfaces/Database/Client';

type ContextProps = {
  children: React.ReactNode;
  prevData?: Client;
};
interface FormDataContextProps {
  client: Client | undefined;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
}
const FormDataContext = React.createContext({} as FormDataContextProps);
//
function FormDataContextProvider(props: ContextProps) {
  const [client, setClient] = useState<Client>(
    props.prevData || ({} as Client)
  );
  //
  return (
    <FormDataContext.Provider
      value={{
        client,
        setClient,
      }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
}
export { FormDataContextProvider, FormDataContext };
