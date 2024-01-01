import { deviceMin } from 'Consts/device';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled from 'styled-components';
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import {
  componentStatements,
  FREE_CREDIT_THRESHOLD,
  LanguageKeys,
} from './const';
import { useFixie } from 'fixie/web';
import { ScrollBox } from 'Elements/ScrollBox';

import QuestionRow from './InputRow';
import { layer2A_BodyStyle } from 'Styles/Theme/Layers/layer2/style';
import ShowConversation from './ShowConversation';
import { Loading } from 'Elements/Loading';
import { ChatScrollAnchor } from './chatScrollAnchor';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useLocale } from 'Hooks/useLocale';
import { setLocalStorage } from 'Utils';
import { LocalStorageKeys } from 'Interfaces';
import { useMutation, useQueryClient } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';
import { Client } from 'Interfaces/Database/Client';
import NoCredit from './NoCredit';

interface Props {
  aiAgentId: string;
  userData: Client;
}
function Content({ aiAgentId, userData }: Props) {
  const { status } = useSession();
  const [credit, setCredit] = useState<number>(userData?.credit || 0);

  const router = useRouter();
  const { locale } = useLocale();

  const { t } = useStaticTranslation(componentStatements);
  const { conversation, sendMessage, stop } = useFixie({
    agentId: aiAgentId,
    agentStartsConversation: false,
  });

  ////////////
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      return fetch('/api/clients/edit-profile', {
        method: 'POST',
        body: JSON.stringify({
          client: { _id: userData._id, credit: credit - 1 },
        } as Partial<Client>),
      });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        throw new Error(`couldn't patch the user`);
      }

      setCredit((prevCredit) => prevCredit - 1);
      queryClient.removeQueries({
        queryKey: ClientQueryKeys.detail({
          reqParams: `_id == "${userData?._id || 'defensive'}"`,
        }),
      });
    },
  });

  //////////////
  function asqQuestion(message: string | undefined) {
    if (message) {
      mutation.mutate();
      sendMessage(message);
    }
  }
  //////////
  useEffect(() => {
    if (status === 'unauthenticated') {
      setLocalStorage({
        key: LocalStorageKeys.Url_Before_Login,
        value: window.location.href,
      });
      router.push(`/${locale}/auth/signin`);
    }
  }, [status]);

  //////isLoading logic//////
  const conversationLength = conversation?.turns?.length || 0;
  const isLoading =
    conversation?.turns?.[conversationLength - 1]?.state === 'in-progress';
  //
  if (status === 'loading' || status === 'unauthenticated') return <Loading />;
  return (
    <Container>
      {!conversation && <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>}
      {!conversation && (
        <PageSubtitle>{t(LanguageKeys.PageSubtitle)}</PageSubtitle>
      )}
      <ChatArea>
        <Scroll $size={conversation ? 'full' : 'mini'}>
          <ShowConversation turns={conversation?.turns} />
          {isLoading && <Loading />}
          <ChatScrollAnchor trackVisibility={isLoading} />;
        </Scroll>
        {credit > FREE_CREDIT_THRESHOLD ? (
          <QuestionRow
            sendMessage={asqQuestion}
            isLoading={isLoading}
            stopStream={stop}
          />
        ) : (
          <NoCredit />
        )}
      </ChatArea>
      <Disclaimer>{t(LanguageKeys.Disclaimer)}</Disclaimer>
    </Container>
  );
}
export default Content;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${deviceMin.tabletM} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
  @media ${deviceMin.tabletS} {
    width: 100%;
    text-align: start;
  }
`;
const ChatArea = styled.section`
  width: 100%;
  ${layer2A_BodyStyle};
  border-radius: 15px;
  padding: 0;
  margin-bottom: 1rem;
`;
const PageSubtitle = styled.h2`
  ${Layer1_SubtitleStyle};
`;
const Scroll = styled(ScrollBox)<{ $size: 'mini' | 'full' }>`
  border-radius: 15px;
  ${({ $size }) =>
    $size === 'full'
      ? 'min-height: calc(100vh - 12rem);'
      : 'min-height: calc(100vh - 27rem);'}
`;
const Disclaimer = styled.h4`
  ${Layer1_SubtitleStyle};
  font-size: 12px;
  line-height: 20px;
`;
