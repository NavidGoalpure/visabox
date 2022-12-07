import { Button } from 'elements/Button';
import { useLocale } from 'hooks/useLocale';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { Slug } from 'interfaces/Fields';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components/macro';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  slug?: Slug;
}
const PopupContent: React.FC<Props> = ({ slug }) => {
  const { t } = useStaticTranslation(componentStatements);
  const router = useRouter();
  const { locale } = useLocale();

  return (
    <div>
      <h3>{t(LanguageKeys.Tasks)}</h3>
      <ul>
        <li>
          Planning and coordinating the operation of hatcheries to produce fish
          fry, seed oysters, crayfish, marron and prawns taking into account
          environmental and market factors
        </li>
        <li>
          Monitoring the environment to maintain optimal growing conditions
        </li>
        <li>Identifying and controlling environmental toxins and</li>
      </ul>
      <StyledButton
        onClick={() => router.push(`/${locale}/occupations/${slug?.current}`)}
      >
        {t(LanguageKeys.ReadMore)}
      </StyledButton>
    </div>
  );
};

export default PopupContent;
const StyledButton = styled(Button)`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: auto;
`;
