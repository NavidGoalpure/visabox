import { Exchanges } from 'Consts/Lists/exchages';
import { deviceMin } from 'Consts/device';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled from 'styled-components';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';
import ExchangeCard from '../../../Components/Lists/Exchange/ExchangeCard';

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle>{t(LanguageKeys.PageDesc)}</PageSubtitle>
      <Row>
        {Exchanges.map((exchange, i) => (
          <StyledExchangeCard key={i} {...exchange} />
        ))}
      </Row>
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
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  row-gap: 3rem;
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
  @media ${deviceMin.tabletS} {
    width: 100%;
    text-align: start;
  }
`;
const PageSubtitle = styled.h2`
  ${Layer1_SubtitleStyle};
`;
const StyledExchangeCard = styled(ExchangeCard)`
  width: 100%;
  @media ${deviceMin.laptopXS} {
    width: 32%;
    text-align: start;
  }
`;
