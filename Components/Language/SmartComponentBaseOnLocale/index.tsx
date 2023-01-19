import { useLocale } from 'Hooks/useLocale';
import { Languages } from 'Interfaces';
import { Fragment, ReactNode } from 'react';

interface Props {
  compenents: {
    [Languages.fa]: ReactNode;
    [Languages.en]: ReactNode;
  };
}

const SmartComponentBaseOnLocale: React.FC<Props> = ({ compenents }) => {
  const { locale } = useLocale();
  return <Fragment>{compenents[locale]}</Fragment>;
};
export default SmartComponentBaseOnLocale;
