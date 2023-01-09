import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { MultiLanguageTextArray } from 'Interfaces';
import { Slug } from 'Interfaces/Fields';
import { useRouter } from 'next/router';
import React from 'react';
import { componentStatements, LanguageKeys } from './const';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { PopupTitle, StyledButton } from '../StyledComponents';

interface Props {
  slug?: Slug;
  tasks: MultiLanguageTextArray;
}
const PopupContent: React.FC<Props> = ({ slug, tasks }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dtArray, isMultiLanguageTextArrayIsEmpty } = useDynamicTranslation();

  const router = useRouter();
  const { locale } = useLocale();

  return (
    <>
      <PopupTitle>{t(LanguageKeys.Tasks)}</PopupTitle>
      {isMultiLanguageTextArrayIsEmpty(tasks) ? (
        <ul>
          {dtArray(tasks)?.map((task, i) => (
            <>
              <li key={i}>{task}</li>
              <br />
            </>
          ))}
        </ul>
      ) : (
        <p>{t(LanguageKeys.NoTask)}</p>
      )}
      <StyledButton
        onClick={() => router.push(`/${locale}/occupations/${slug?.current}`)}
      >
        {t(LanguageKeys.ReadMore)}
      </StyledButton>
    </>
  );
};

export default PopupContent;
