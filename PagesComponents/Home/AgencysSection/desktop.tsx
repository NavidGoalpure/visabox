import VIPAgentCard from "Components/Boxes/Card/Agent/VIPCard";
import { Agents } from "Consts/Businesses/agents";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import styled from "styled-components";
import { componentStatements, LanguageKeys } from "./const";
import { Container, Subtitle, Title, ViewAll } from "./styledComponents";
import { HTMLAttributes, useEffect } from "react";
import { GsapSectionAnimation_1 } from "../utils";
import { AGENCYS } from "Consts/Businesses/agency";
import VIPAgencyCard from "Components/Boxes/Card/Agency/VIPCard";

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipAgency = AGENCYS.find((AGENCYS) => AGENCYS.isFeatured);
  useEffect(() => {
    GsapSectionAnimation_1("agency");
  }, []);
  return (
    <>
      <Container {...props}>
        <Side className="agency-card-section">
          {vipAgency && (
            <VIPAgencyCard
              name={vipAgency.name}
              desc={vipAgency.desc}
              slug={vipAgency.slug}
            />
          )}
        </Side>
        <Side className="agency-text-section">
          <Title>{t(LanguageKeys.Title)}</Title>
          <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

          <Link href={`${locale}/boxes/agencies`}>
            <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
          </Link>
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
