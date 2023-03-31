import { deviceMin } from 'Consts/device';
import { NormalSocialMedias, VipSocialMedias } from 'Consts/Lists/Socials';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled from 'styled-components';
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';
import SmartSocialCard from 'Components/Lists/Card/SocialCard';

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle>{t(LanguageKeys.PageDesc)}</PageSubtitle>
      <CardContainer>
        <Row>
          {VipSocialMedias.map((socialMedia, i) => (
            <SmartSocialCard
              key={i}
              id={socialMedia.id}
              isFeatured={socialMedia.isFeatured}
              desc={socialMedia.desc}
              name={socialMedia.name}
              link={socialMedia.link}
              socialmediaType={socialMedia.socialmediaType}
              locations={socialMedia.locations}
              slug={socialMedia.slug}
            />
          ))}
        </Row>
        <Row>
          {NormalSocialMedias.map((socialMedia, i) => (
            <SmartSocialCard
              id={socialMedia.id}
              key={i}
              isFeatured={socialMedia.isFeatured}
              desc={socialMedia.desc}
              name={socialMedia.name}
              link={socialMedia.link}
              socialmediaType={socialMedia.socialmediaType}
              locations={socialMedia.locations}
              slug={socialMedia.slug}
            />
          ))}
        </Row>
      </CardContainer>
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
const PageSubtitle = styled.h4`
  ${Layer1_SubtitleStyle};
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  row-gap: 3rem;
`;
