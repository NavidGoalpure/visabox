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
import EditModal from './EditModal';
import { EditModalContentKeys, profileResParams } from './const';

const Content: React.FC = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
  const resParams = profileResParams;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editModalContentKey, setEditModalContentKey] =
    useState<EditModalContentKeys | null>(null);
  console.log(
    'navid inja0 tag=',
    ClientQueryKeys.detail({
      reqParams: profileResParams,
    })
  );
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
  const client = user?.client?.[0];

  if (!client) return null;
  if (screen === 'MOBILE')
    return (
      <>
        <EditModal
          client={client}
          isModalOpen={isModalOpen}
          modalContentKeys={editModalContentKey}
          setIsModalOpen={setIsModalOpen}
        />
        <MobileAgentsPage
          setEditModalContentKey={setEditModalContentKey}
          setIsModalOpen={setIsModalOpen}
          userId={client?._id}
          client={client}
        />
      </>
    );
  return (
    <>
      <EditModal
        client={client}
        isModalOpen={isModalOpen}
        modalContentKeys={editModalContentKey}
        setIsModalOpen={setIsModalOpen}
      />
      <DesktopAgentsPage
        setEditModalContentKey={setEditModalContentKey}
        setIsModalOpen={setIsModalOpen}
        client={client}
        userId={client._id}
      />
    </>
  );
};
export default Content;
