import ExchangeCard from "Components/Boxes/Card/Exchange/ExchangeCard";
import { Exchanges } from "Consts/Businesses/exchages";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import { HTMLAttributes, useEffect } from "react";
import styled from "styled-components";
import { GsapSectionAnimation_2 } from "../utils";
import { componentStatements, LanguageKeys } from "./const";
import { Container, StyledLink, Subtitle, Title, ViewAll } from "./styledComponents";

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  useEffect(() => {
    GsapSectionAnimation_2("exchanges");
  }, []);
  return (
    <Container {...props}>
      <Side className="exchanges-card-section">
        <StyledExchangeCard
          isFeatured={Exchanges[2].isFeatured}
          desc={Exchanges[2].desc}
          name={Exchanges[2].fullName}
          externalLink={Exchanges[2].contact.website || ""}
          location={Exchanges[2].location}
          slug={Exchanges[2].slug}
          hasImage={Exchanges[2].hasImage}
          contact={{}}
        />
      </Side>
      <Side className="exchanges-text-section">
        <Title>{t(LanguageKeys.Title)}</Title>
        <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
        <StyledLink href={`${locale}/boxes/exchanges`}>
          <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
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
const StyledExchangeCard = styled(ExchangeCard)`
  width: 70%;
`;
