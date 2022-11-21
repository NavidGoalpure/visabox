import { useLocale } from '@hooks/useLocale';
import { Languages } from 'pages/interfaces';
import { ReactNode } from 'react';

interface Props {
  compenents: {
    [Languages.ir]: ReactNode;
    [Languages.en]: ReactNode;
  };
}

const SmartComponentBaseOnLocale: React.FC<Props> = ({ compenents }) => {
  const { locale } = useLocale();
  return <>{compenents[locale]}</>;
};
export default SmartComponentBaseOnLocale;
