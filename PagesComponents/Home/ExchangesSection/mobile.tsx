import ExchangeCard from "Components/Lists/Card/Exchange/ExchangeCard";
import { Exchanges } from "Consts/Lists/exchages";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { componentStatements, LanguageKeys } from "./const";
import { Container, StyledLink, Subtitle, Title, ViewAll } from "./styledComponents";

const MobileIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.Title)}</Title>
      <ExchangeCard {...Exchanges[1]} />
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
      <StyledLink href={`${locale}/boxes/exchanges`}>
        <ViewAll id={`home_all-exchanges_${locale}`}>
          {t(LanguageKeys.CTA)}
        </ViewAll>
      </StyledLink>
    </Container>
  );
};
export default MobileIndex;

///////////////
