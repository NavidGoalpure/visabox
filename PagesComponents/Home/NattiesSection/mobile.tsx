import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import {  componentStatements, LanguageKeys } from './const';
import { Container, StyledLink, Subtitle, Title, ViewAll } from './styledComponents';
import NaatiCard from "Components/Boxes/Card/Naati/Card";
import { NAATIES } from "Consts/Businesses/naati";
import { slugify } from "Utils";
import { Status } from 'Interfaces';
const MobileIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.Title)}</Title>
      {NAATIES[0]?.status === Status.ACTIVE && (
        <NaatiCard
          fullName={NAATIES[0].fullName}
          email={NAATIES[0].contact.email}
          website={NAATIES[0].contact.website}
          phone={NAATIES[0].contact.phone}
          slug={slugify(NAATIES[0].fullName.en)}
        />
      )}
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
      <StyledLink href={`${locale}/boxes/naaties`}>
        <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
      </StyledLink>
    </Container>
  );
};
export default MobileIndex;

///////////////
