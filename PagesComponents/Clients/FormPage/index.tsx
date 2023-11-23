import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import DesktopAgentsPage from './Desktop';
import MobileAgentsPage from './Mobile';
import { Client } from 'Interfaces/Database/Client';
import { useQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';
import { ClientError } from '@sanity/client';
import { useSession } from 'next-auth/react';
import { getClientDetail } from 'Queries/client';
import { Point_Calculator_Fragment } from 'Consts/GroqFragments';

const Content: React.FC = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
  const resParams = ` 
  ${Point_Calculator_Fragment}
      _id,
      _createdAt,
      country,
      name,
      lastname,
      phone,
      field_of_study,
      current_job,
      is_sharable,
      uni_section,
      avatar,
      email,
      completed_forms
      `;
  const { data: user } = useQuery<{ client: Client[] }, ClientError>(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    },
    {
      enabled: !!session?.user?.email,
    }
  );
  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE')
    return (
      <MobileAgentsPage
        userId={user?.client?.[0]?._id}
        client={user?.client?.[0]}
      />
    );
  return (
    <DesktopAgentsPage
      client={user?.client?.[0]}
      userId={user?.client?.[0]?._id}
    />
  );
};
export default Content;
