import OccupationCard from "Components/Cards/Type1/OocccuptionCard";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import { HTMLAttributes, useEffect } from "react";
import styled from "styled-components";
import { GsapSectionAnimation_2 } from "../utils";
import { CardData, componentStatements, LanguageKeys } from "./const";
import { Container, Subtitle, Title, ViewAll } from "./styledComponents";

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  useEffect(() => {
    GsapSectionAnimation_2("natties");
  }, []);
  return (
    <Container {...props}>
      <Side className="natties-card-section">
        <OccupationCard
          code={CardData.code}
          title={CardData.title}
          description={CardData.description}
          slug={CardData.slug}
          tasks={CardData.tasks}
        />
      </Side>
      <Side className="natties-text-section">
        <Title>{t(LanguageKeys.Title)}</Title>
        <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
        <Link href={`${locale}/boxes/naaties`}>
          <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
        </Link>
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
