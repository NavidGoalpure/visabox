import VIPAgentCard from "Components/Lists/Agent/VIPCard";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
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
import SmartSocialCard from "Components/Lists/SocialCard";
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
          <SmartSocialCard {...VipSocialMedias[0]} />
        </Side>
        <Side className="socials-text-section">
          <Title>{t(LanguageKeys.Title)}</Title>
          <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

          <StyledLink href={`${locale}/lists/social-pages`}>
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
