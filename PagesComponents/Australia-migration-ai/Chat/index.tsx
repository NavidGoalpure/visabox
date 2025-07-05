import { deviceMin } from 'Consts/device';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled from 'styled-components';
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';
import { useBedrockChat } from './hooks/useBedrockChat';
import { ScrollBox } from 'Elements/ScrollBox';
import { layer2A_BodyStyle } from 'Styles/Theme/Layers/layer2/style';
import ShowConversation from './ShowConversation';
import { Loading } from 'Elements/Loading/Loading';
import { ChatScrollAnchor } from './chatScrollAnchor';
import React, { useContext } from 'react';
import { useSession } from 'next-auth/react';

import SmartRow from './SmartRow';
import { AiChatContext } from './hooks/useAiCredit';
import useDevice from 'Hooks/useDevice';
// import ServiceIsDown from './ThisServiceIsDown';



function Content() {
  const { status } = useSession();
  const { t } = useStaticTranslation(componentStatements);
  const { questionRemain } = useContext(AiChatContext);
  const { isMobile } = useDevice();

  // Use the external Bedrock API
  const { conversation, sendMessage, stop, isLoading, error } = useBedrockChat({
    modelId: 'external-api', // Not used but required by interface
    region: 'ap-southeast-2', // Your API region
    maxTokens: 1000,
    temperature: 0.7,
    systemPrompt: `You are Marcya, an AI assistant specialized in Australian immigration guidance. 
    You help users with questions about:
    - VETASSESS assessment
    - ACS (Australian Computer Society) assessment
    - TRA (Trades Recognition Australia) assessment
    - Migration strategies
    - Australian states and territories
    - Skilled worker visas
    - APharmC and ACWA assessments
    
    Provide accurate, helpful information while always recommending users consult with qualified immigration professionals for official advice.`
  });

  if (status === 'loading') return <Loading />;

  return (
    <Container>
      {!conversation && <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>}
      {!conversation && (
        <PageSubtitle>{t(LanguageKeys.PageSubtitle)}</PageSubtitle>
      )}
      <QuestionRemain
        dangerouslySetInnerHTML={{
          __html: t(LanguageKeys.QuestionRemain, [
            {
              $number: questionRemain.toString(),
            },
          ]),
        }}
      />
      <ChatArea>
        <Scroll
          $size={conversation ? 'full' : 'mini'}
        >
          <ShowConversation turns={conversation?.turns} />
          {isLoading && <Loading />}
          <ChatScrollAnchor trackVisibility={isLoading} />
        </Scroll>
        {/* SmartRow decides whether to show chat, login, or credit message */}
        <SmartRow sendMessage={sendMessage} isLoading={isLoading} stop={stop} />
        {/* If you want to disable the service, show this instead of SmartRow */}
        {/* <ServiceIsDown /> */}
      </ChatArea>
      {isMobile && (
        <Hint
          dangerouslySetInnerHTML={{ __html: t(LanguageKeys.MobileHint) }}
        />
      )}
      <Disclaimer
        dangerouslySetInnerHTML={{ __html: t(LanguageKeys.Disclaimer) }}
      />
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
  border-radius: 0 15px 15px 15px;
  padding: 0;
  margin-bottom: 1rem;
`;
const QuestionRemain = styled.div`
  display: flex;
  background: var(--color-secondary4);
  color: var(--color-gray1);
  font-weight: 600;
  width: max-content;
  padding: 1rem;
  margin-inline-end: auto;
  border-radius: 15px 15px 0 0;
  white-space-collapse: preserve;
  span {
    color: var(--color-secondary1);
  }
`;
const PageSubtitle = styled.h2`
  ${Layer1_SubtitleStyle};
`;
const Scroll = styled(ScrollBox)<{ $size: 'mini' | 'full' }>`
  border-radius: 15px;
  ${({ $size }) =>
    $size === 'full'
      ? 'min-height: calc(100vh - 15rem);'
      : 'min-height: calc(100vh - 26rem);'}
`;
const Disclaimer = styled.div`
  ${Layer1_SubtitleStyle};
  font-size: 12px;
  line-height: 20px;
  span {
    color: var(--color-secondary4);
  }
`;
const Hint = styled(Disclaimer)``;
