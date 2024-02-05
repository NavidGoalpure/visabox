import useDevice from 'Hooks/useDevice';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Client } from 'Interfaces/Database/Client';
import EditModal from './EditModal';
import { EditModalContentKeys } from './const';
import { LoadingRow } from 'Elements/Loading/LoadingRow';

// Lazy load the components
const DesktopAgentsPage = lazy(() => import('./Desktop'));
const MobileAgentsPage = lazy(() => import('./Mobile'));

interface Props {
  client: Client;
}

const Content: React.FC<Props> = ({ client }) => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editModalContentKey, setEditModalContentKey] =
    useState<EditModalContentKeys | null>(null);

  // Correctly specify dependencies for useEffect
  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  }, [isLaptop]);

  if (!client) return null;
  return (
    <Suspense fallback={<LoadingRow />}>
      {screen === 'MOBILE' ? (
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
      ) : (
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
      )}
    </Suspense>
  );
};

export default Content;
