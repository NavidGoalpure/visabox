import { useLocale } from 'hooks/useLocale';
import { Languages } from 'interfaces';
import { ReactNode } from 'react';

interface Props {
  compenents: {
    [Languages.fa]: ReactNode;
    [Languages.en]: ReactNode;
  };
}

const SmartComponentBaseOnLocale: React.FC<Props> = ({ compenents }) => {
  const { locale } = useLocale();
  return <>{compenents[locale]}</>;
};
export default SmartComponentBaseOnLocale;
