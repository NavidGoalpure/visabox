import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { getAgencyCredit } from 'Queries/agency';
import { getClientCredit } from 'Queries/client';
import { isAgencyLogedIn, isClientLogedIn } from 'Utils/user';
import { FREE_CREDIT_THRESHOLD } from '../const';

interface AiChatState {
  userId: string | undefined;
  questionRemain: number;
  decreaseCreditByOne: () => Promise<void>;
}
type Props = {
  children: React.ReactNode;
};

const AiChatContext = React.createContext({} as AiChatState);

function AiChatContextProvider(props: Props) {
  const { data: session } = useSession();
  const [userChatData, setUserChatData] = useState<{
    userId: string | undefined;
    credit?: number;
  }>();
  console.log('navid userChatData=', userChatData);

  useEffect(() => {
    if (!userChatData) {
      getUserDataAndSave();
    }
  }, [userChatData]);

  const decreaseCreditByOne = async (): Promise<void> => {
    try {
      const response = await axios.post('/api/user/decrease-credit-by-one', {
        userId: userChatData?.userId,
      });
      getUserDataAndSave();
      return response.data;
    } catch (error) {
      console.error('Error while decreasing credit:', error);
      throw error;
    }
  };

  function getUserDataAndSave() {
    const isUserClient = isClientLogedIn();
    const isUserAgency = isAgencyLogedIn();

    async function getAgencyChatData() {
      const agency = await getAgencyCredit(session?.user?.email);
      if (agency?._id) {
        setUserChatData({
          userId: agency._id,
          credit: agency?.credit,
        });
      }
    }

    async function getClientChatData() {
      const client = await getClientCredit(session?.user?.email);
      if (client?._id) {
        setUserChatData({
          userId: client?._id,
          credit: client?.credit,
        });
      }
    }

    if (isUserClient) {
      getClientChatData();
    }
    if (isUserAgency) {
      getAgencyChatData();
    }
  }

  return (
    <AiChatContext.Provider
      value={{
        userId: userChatData?.userId,
        questionRemain:
          (userChatData?.credit || 0) + Math.abs(FREE_CREDIT_THRESHOLD),
        decreaseCreditByOne,
      }}
    >
      {props.children}
    </AiChatContext.Provider>
  );
}

export { AiChatContextProvider, AiChatContext };
