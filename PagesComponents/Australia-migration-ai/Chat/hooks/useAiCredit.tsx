// به صورت نرمال هروقت یوزر توسط سایت ساخته میشه آیدی اون برابر با هش ام دی فایو ایمیل هست
// اما چون شاید یک زمانی این قاعده عوض شه یا یوزری با پنل ساخته بشه، این تابع روش بهتری برای پیدا کردن یوزر کلاینت هست

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { getAgencyCredit } from 'Queries/agency';
import { getClientCredit } from 'Queries/client';
import React from 'react';
import { useState } from 'react';
import { isAgencyLogedIn, isClientLogedIn } from 'Utils/user';
import { FREE_CREDIT_THRESHOLD } from '../const';

//
interface AiChatState {
  userId: string | undefined;
  questionRemain: number;
  decreaseCreditByOne: () => Promise<void>;
}
type Props = {
  children: React.ReactNode;
};

const AiChatContext = React.createContext({} as AiChatState);
//
function AiChatContextProvider(props: Props) {
  const { data: session } = useSession();

  const [userChatData, setUserChatData] = useState<
    | {
        userId: string;
        credit?: number;
      }
    | undefined
  >(undefined);
  ////////////Decrease credit//////////
  const decreaseCreditByOne = async (): Promise<void> => {
    try {
      const response = await axios.post('/api/user/decrease-credit-by-one', {
        userId: userChatData?.userId,
      });

      // Handle the response here if needed
      getUserDataAndSave();
      return response.data; // Assuming you want to return data from the response
    } catch (error) {
      // Handle errors here
      console.error('Error while decreasing credit:', error);
      throw error; // Or handle the error according to your requirements
    }
  };

  // Check if the user is a clientimport { Client } from 'Interfaces/Database/Client';
  function getUserDataAndSave() {
    const isUserClient = isClientLogedIn();
    const isUserAgency = isAgencyLogedIn();
    /////////////////GetAgencyData////////////
    async function getAgencyChatData() {
      const agency = await getAgencyCredit(session?.user?.email); // Assuming this function returns the agency details
      if (agency?._id) {
        setUserChatData({
          userId: agency._id,
          credit: agency?.credit,
        });
      }
    }
    /////////////////GetClientData////////////
    async function getClientChatData() {
      const client = await getClientCredit(session?.user?.email); // Assuming this function returns the client details
      if (client?._id) {
        setUserChatData({
          userId: client._id,
          credit: client?.credit,
        });
      }
    }
    ///////////////////////////////////
    if (isUserClient) {
      getClientChatData();
    }
    if (isUserAgency) {
      if (isUserAgency) {
        getAgencyChatData;
      }
    }
  }
  ///////////////////////
  if (!userChatData) getUserDataAndSave();
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
