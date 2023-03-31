import VIPAgencyCard from "Components/Lists/Card/Agency/VIPCard";

import { AGENCYS } from "Consts/Lists/agency";

import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";

import { HTMLAttributes } from "react";
import { componentStatements, LanguageKeys } from "./const";
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from "./styledComponents";

const MobileIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipAgency = AGENCYS.find((AGENCYS) => AGENCYS.isFeatured);

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.Title)}</Title>
      {vipAgency && (
        <VIPAgencyCard
          name={vipAgency.name}
          desc={vipAgency.desc}
          slug={vipAgency.slug}
        />
      )}
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

      <StyledLink href={`${locale}/boxes/agencies`}>
        <ViewAll id={`home_all-agencies_${locale}`}>
          {t(LanguageKeys.CTA)}
        </ViewAll>
      </StyledLink>
    </Container>
  );
};
export default MobileIndex;
