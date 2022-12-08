import { Button } from 'elements/Button';
import { useLocale } from 'hooks/useLocale';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { MultiLanguageTextArray } from 'interfaces';
import { Slug } from 'interfaces/Fields';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components/macro';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  slug?: Slug;
  tasks: MultiLanguageTextArray;
}
const PopupContent: React.FC<Props> = ({ slug, tasks }) => {
  const { t } = useStaticTranslation(componentStatements);
  const router = useRouter();
  const { locale } = useLocale();

  return (
    <div>
      <h3>{t(LanguageKeys.Tasks)}</h3>
      <ul>
        {tasks?.[locale]?.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
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
