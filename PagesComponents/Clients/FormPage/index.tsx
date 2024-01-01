import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import DesktopAgentsPage from './Desktop';
import MobileAgentsPage from './Mobile';
import { Client } from 'Interfaces/Database/Client';

import EditModal from './EditModal';
import { EditModalContentKeys } from './const';
interface Props {
  client: Client;
}
const Content: React.FC<Props> = ({ client }) => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editModalContentKey, setEditModalContentKey] =
    useState<EditModalContentKeys | null>(null);
  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });

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
