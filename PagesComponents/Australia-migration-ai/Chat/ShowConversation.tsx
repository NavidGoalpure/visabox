import { deviceMin } from 'Consts/device';
import { ConversationTurn } from 'fixie';
import styled from 'styled-components';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
import Turn from './Turn';

interface Props {
  turns: ConversationTurn[] | undefined;
}
function ConversationsHistory({ turns }: Props) {
  if (!turns) return null;
  return (
    <Container>
      {turns.map((turn) => {
        // if (turn.)
        return <Turn turn={turn} />;
      })}
    </Container>
  );
}
export default ConversationsHistory;
const Container = styled.div`
  ${layer2A_Bg}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
