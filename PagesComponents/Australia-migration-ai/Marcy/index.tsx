import { deviceMin } from 'Consts/device';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled from 'styled-components';
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';
import { useFixie } from 'fixie/web';
import { ScrollBox } from 'Elements/ScrollBox';

import QuestionRow from './Components/InputRow';
import { layer2A_BodyStyle } from 'Styles/Theme/Layers/layer2/style';
import ShowConversation from './Components/ShowConversation';
import { Loading } from 'Elements/Loading';
interface Props {
  agentId: string;
}
function Content({ agentId }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const { conversation, sendMessage, stop } = useFixie({
    agentId,
    agentStartsConversation: false,
  });

  //////isLoading logic//////
  const conversationLength = conversation?.turns?.length || 0;
  const isLoading =
    conversation?.turns?.[conversationLength - 1]?.state === 'in-progress';
  //

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
        </Scroll>
        <QuestionRow
          sendMessage={sendMessage}
          isLoading={isLoading}
          stopStream={stop}
        />
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
