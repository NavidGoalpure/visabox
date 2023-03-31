import OccupationCard from "Components/Cards/Type1/OocccuptionCard";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import { HTMLAttributes, useEffect } from "react";
import styled from "styled-components";
import { GsapSectionAnimation_2 } from "../utils";
import { CardData, componentStatements, LanguageKeys } from "./const";
import { Container, StyledLink, Subtitle, Title, ViewAll } from "./styledComponents";

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  useEffect(() => {
    GsapSectionAnimation_2("occupation");
  }, []);
  return (
    <Container {...props}>
      <Side className="occupation-card-section">
        <OccupationCard
          code={CardData.code}
          title={CardData.title}
          description={CardData.description}
          slug={CardData.slug}
          tasks={CardData.tasks}
        />
      </Side>
      <Side className="occupation-text-section">
        <Title>{t(LanguageKeys.Title)}</Title>
        <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
        <StyledLink href={`${locale}/occupations`}>
          <ViewAll id={`home_all-occupations${locale}`}>
            {t(LanguageKeys.CTA)}
          </ViewAll>
        </StyledLink>
      </Side>
    </Container>
  );
};
export default DesktopIndex;
const Side = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
