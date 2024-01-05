import { Client } from 'Interfaces/Database/Client';
import Link from 'next/link';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';
import { FREE_CREDIT_THRESHOLD } from './const';
import QuestionRow from './InputRow';
import MustLogin from './MustLogin';
import NoCredit from './NoCredit';

interface Props {
  userData: Client | undefined;
  sendMessage: (message?: string | undefined) => boolean;
  isLoading: boolean;
  stop: () => boolean;
  setQuestionRemain: React.Dispatch<React.SetStateAction<number>>;
}
function SmartRow({
  userData,
  sendMessage,
  isLoading,
  stop,
  setQuestionRemain,
}: Props) {
  const [credit, setCredit] = useState<number>(userData?.credit || 0);
  const queryClient = useQueryClient();
  //////////////

  function asqQuestion(message: string | undefined) {
    if (message) {
      mutation.mutate();
      sendMessage(message);
    }
  }
  const mutation = useMutation({
    mutationFn: () => {
      return fetch('/api/clients/edit-profile', {
        method: 'POST',
        body: JSON.stringify({
          client: { _id: userData?._id, credit: credit - 1 },
        } as Partial<Client>),
      });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        throw new Error(`couldn't patch the user`);
      }
      setQuestionRemain((prev) => prev - 1);
      setCredit((prevCredit) => prevCredit - 1);
      queryClient.removeQueries({
        queryKey: ClientQueryKeys.detail({
          reqParams: `_id == "${userData?._id || 'defensive'}"`,
        }),
      });
    },
  });

  // حالتی که یوزر دیتا مساوی آبجکت خالی باشه رو هم تست میکنیم
  if (!userData?._id || userData === undefined) return <MustLogin />;
  if (credit > FREE_CREDIT_THRESHOLD)
    return (
      <QuestionRow
        sendMessage={asqQuestion}
        isLoading={isLoading}
        stopStream={stop}
      />
    );
  return <NoCredit />;
}
export default SmartRow;
