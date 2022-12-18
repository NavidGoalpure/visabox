import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React from 'react';
import { componentStatements, LanguageKeys } from './const';

const NoData = () => {
  const { t } = useStaticTranslation(componentStatements);

  return <p>{t(LanguageKeys.NoData)}</p>;
};

export default NoData;
