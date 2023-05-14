import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { MultiLanguageTextArray } from 'Interfaces';
import { Slug } from 'Interfaces/Occupation/Fields';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { componentStatements, LanguageKeys } from './const';
import { PopupTitle, StyledButton } from '../StyledComponents';

interface Props {
  slug?: Slug;
  tasks: MultiLanguageTextArray;
}
const PopupContent: React.FC<Props> = ({ slug, tasks }) => {
  const { t } = useStaticTranslation(componentStatements);

  const router = useRouter();
  const { locale } = useLocale();

  return (
    <>
      <PopupTitle>{t(LanguageKeys.Tasks)}</PopupTitle>
      {/* navid check empty */}
      <ul style={{ direction: 'ltr' }}>
        {tasks.en?.map((task, i) => (
          <Fragment key={i}>
            <li>{task}</li>
            <br />
          </Fragment>
        ))}
      </ul>
      {/* {isMultiLanguageTextArrayIsEmpty(tasks) ? (
        <ul>
          {tasks.en?.map((task, i) => (
            <Fragment key={i}>
              <li>{task}</li>
              <br />
            </Fragment>
          ))}
        </ul>
      ) : (
        <p>{t(LanguageKeys.NoTask)}</p>
      )} */}
      <StyledButton
        onClick={() => router.push(`/${locale}/occupations/${slug?.current}`)}
      >
        {t(LanguageKeys.ReadMore)}
      </StyledButton>
    </>
  );
};

export default PopupContent;
