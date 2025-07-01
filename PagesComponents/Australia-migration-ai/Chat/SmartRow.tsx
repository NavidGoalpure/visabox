import { useMutation } from 'react-query';
import QuestionRow from './InputRow';
import MustLogin from './MustLogin';
import NoCredit from './NoCredit';
import { useContext } from 'react';
import { AiChatContext } from './hooks/useAiCredit';

interface Props {
  sendMessage: (message?: string | undefined) => Promise<boolean>;
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
  
  async function asqQuestion(message: string | undefined) {
    if (message) {
      mutation.mutate();
      await sendMessage(message);
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
