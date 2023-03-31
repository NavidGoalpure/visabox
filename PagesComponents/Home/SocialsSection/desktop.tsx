import VIPAgentCard from "Components/Lists/Card/Agent/VIPCard";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import styled from "styled-components";
import { componentStatements, LanguageKeys } from "./const";
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from "./styledComponents";
import { HTMLAttributes, useEffect } from "react";
import { GsapSectionAnimation_1 } from "../utils";
import SmartSocialCard from "Components/Lists/Card/SocialCard";
import { VipSocialMedias } from "Consts/Lists/Socials";

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  useEffect(() => {
    GsapSectionAnimation_1("socials");
  }, []);
  return (
    <>
      <Container {...props}>
        <Side className="socials-card-section">
          <SmartSocialCard
            id={VipSocialMedias[0].id}
            isFeatured={VipSocialMedias[0].isFeatured}
            desc={VipSocialMedias[0].desc}
            name={VipSocialMedias[0].name}
            link={VipSocialMedias[0].link}
            socialmediaType={VipSocialMedias[0].socialmediaType}
            locations={VipSocialMedias[0].locations}
            slug={VipSocialMedias[0].slug}
          />
        </Side>
        <Side className="socials-text-section">
          <Title>{t(LanguageKeys.Title)}</Title>
          <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

          <StyledLink href={`${locale}/boxes/social-pages`}>
            <ViewAll id={`home_all-socials_${locale}`}>
              {t(LanguageKeys.CTA)}
            </ViewAll>
          </StyledLink>
        </Side>
      </Container>
    </>
  );
};
export default DesktopIndex;
const Side = styled.div`
  flex: 1;
`;
const StyledCard = styled(VIPAgentCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
