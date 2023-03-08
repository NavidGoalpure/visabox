import LawyerCard from 'Components/Business/Card/Lawyer/Card';
import { deviceMin } from 'Consts/device';
import { componentStatements, LanguageKeys } from './const';
import styled from 'styled-components';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import VIPLawyerCard from '../../../Components/Business/Card/Lawyer/VIPCard';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { layer3_TitleStyle } from 'Styles/Theme/Layers/layer3/style';
import { Lawyers } from 'Consts/Businesses/Lawyers';

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle>{t(LanguageKeys.PageDesc)}</PageSubtitle>
      <VIPContainer>
        {Lawyers.filter((lawyer) => lawyer.isFeatured).map((lawyer) => {
          return (
            <VIPLawyerCard
              name={lawyer.name}
              desc={lawyer.desc}
              slug={lawyer.slug}
            />
          );
        })}
      </VIPContainer>
      <NormalLawyerContainer>
        {Lawyers.filter((lawyer) => !lawyer.isFeatured).map((lawyer) => {
          return (
            <LawyerCard
              name={lawyer.name}
              email={lawyer.contact.email}
              website={lawyer.website}
              slug={lawyer.slug}
              phone={lawyer.contact.phone}
            />
          );
        })}
      </NormalLawyerContainer>
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
const NormalLawyerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
