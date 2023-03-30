import { deviceMin } from 'Consts/device';
import { componentStatements, LanguageKeys } from './const';
import styled from 'styled-components';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { NAATIES } from 'Consts/Lists/naati';
import { slugify } from 'Utils';
import { Status } from 'Interfaces';
import VIPNaatiCard from 'Components/Lists/Card/Naati/VIPCard';
import NaatiCard from 'Components/Lists/Card/Naati/Card';

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle>{t(LanguageKeys.PageDesc)}</PageSubtitle>
      <VIPContainer>
        {NAATIES.filter((naati) => naati.isFeatured).map((naati, i) => {
          if (naati.status === Status.ACTIVE)
            return (
              <VIPNaatiCard
                key={i}
                fullname={naati.fullName}
                desc={naati?.desc}
                slug={slugify(naati.fullName.en)}
              />
            );
        })}
      </VIPContainer>
      <NormalNaatiContainer>
        {NAATIES.filter((naati) => !naati.isFeatured).map((naati, i) => {
          if (naati.status === Status.ACTIVE)
            return (
              <NaatiCard
                key={i}
                fullName={naati.fullName}
                email={naati.contact.email}
                website={naati?.contact?.website}
                slug={slugify(naati.fullName.en)}
                phone={naati?.contact?.phone}
              />
            );
        })}
      </NormalNaatiContainer>
    </Container>
  );
}
export default Content;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
  @media ${deviceMin.tabletS} {
    width: 100%;
    text-align: start;
  }
`;
const PageSubtitle = styled.h4`
  ${Layer1_SubtitleStyle};
`;
const VIPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 5rem;
`;
const NormalNaatiContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
