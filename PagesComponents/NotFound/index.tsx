import AnimationComponent from 'components/AnimationComponent';
import styled from 'styled-components/macro';
import {
  billboardSubtitleStyle,
  billboardTextStyle,
  billboardTitleStyle,
} from 'Styles/Theme/billboard';
import { pageTextColor } from 'Styles/Theme/Page';
import { Headline5Style, Headline6Style } from 'Styles/Typo';

const Content: React.FC = () => {
  return (
    <Container>
      <AnimationComponent />
      <Title>404</Title>
      <Subtitle>Oops...</Subtitle>
      <Desc>You weren't supposed to be here</Desc>
      <Desc>{`You can go to the Homepage if you feel you're lost`}</Desc>
    </Container>
  );
};
export default Content;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 9.5rem 0;
  position: relative;
`;
const Title = styled.h1`
  ${billboardTitleStyle}
`;
const Subtitle = styled.h2`
  ${billboardSubtitleStyle}
`;
const Desc = styled.h3`
  ${billboardTextStyle}
`;
