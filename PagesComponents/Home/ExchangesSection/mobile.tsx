import ExchangeCard from "Components/Boxes/Card/Exchange/ExchangeCard";
import { Exchanges } from "Consts/Businesses/exchages";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { componentStatements, LanguageKeys } from "./const";
import { Container, Subtitle, Title, ViewAll } from "./styledComponents";

const MobileIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.Title)}</Title>
      <ExchangeCard
        isFeatured={Exchanges[2].isFeatured}
        desc={Exchanges[2].desc}
        name={Exchanges[2].fullName}
        externalLink={Exchanges[2].contact.website || ""}
        location={Exchanges[2].location}
        slug={Exchanges[2].slug}
        hasImage={Exchanges[2].hasImage}
        contact={{}}
      />
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
      <Link href={`${locale}/boxes/exchanges`}>
        <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
      </Link>
    </Container>
  );
};
export default MobileIndex;

///////////////
