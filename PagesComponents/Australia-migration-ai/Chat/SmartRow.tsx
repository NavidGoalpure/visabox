import { useMutation } from 'react-query';
import { useSession } from 'next-auth/react';
import QuestionRow from './InputRow';
import MustLogin from './MustLogin';
import NoCredit from './NoCredit';
import { UserRole } from 'Interfaces/Database';
import { FREE_CREDIT_THRESHOLD } from './const';
import { useContext } from 'react';
import { AiChatContext } from './hooks/useAiCredit';

interface Props {
  sendMessage: (message?: string | undefined) => boolean;
  isLoading: boolean;
  stop: () => boolean;
}

function SmartRow({ sendMessage, isLoading, stop }: Props) {
  // Fetch user role and ID based on the email using the custom hook
  const { userId, questionRemain, decreaseCreditByOne } =
    useContext(AiChatContext);

  const mutation = useMutation(
    // Mutation key (a string or an array) that uniquely identifies this mutation
    'decreaseCredit',

    // Mutation function
    decreaseCreditByOne,

    // Configuration object
    {
      //
      onError: (error: any) => {
        console.error('Mutation failed:', error);
      },
    }
  );
  function asqQuestion(message: string | undefined) {
    if (message) {
      mutation.mutate();
      sendMessage(message);
    }
  }

  if (!userId) return <MustLogin />;
  if (questionRemain > 0) {
    return (
      <QuestionRow
        asqQuestion={asqQuestion}
        isLoading={isLoading}
        stopStream={stop}
      />
    );
  }
  return <NoCredit />;
}

export default SmartRow;
