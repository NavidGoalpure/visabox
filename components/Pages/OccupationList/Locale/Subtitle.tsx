import styled from 'styled-components/macro';
import { Headline5Style } from 'styles/Typo';
import SmartComponentBaseOnLocale from '@components/SmartComponentBaseOnLocale';
import { componrntStatements } from '../Const';
import reactStringReplace from 'react-string-replace';

const LocaleSubtitle: React.FC = () => {
  const iranianSubtitle = reactStringReplace(
    componrntStatements.PageSubtitle.ir,
    '{{تگ}}',
    () => <p>نوید</p>
  );
  const englishSubtitle = reactStringReplace(
    componrntStatements.PageSubtitle.en,
    '{{tag}}',
    () => <p>navid</p>
  );
  return (
    <SmartComponentBaseOnLocale
      compenents={{
        ir: <PageSubtitle>{iranianSubtitle}</PageSubtitle>,
        en: <PageSubtitle>{englishSubtitle}</PageSubtitle>,
      }}
    />
  );
};
export { LocaleSubtitle };

const PageSubtitle = styled.h2`
  ${Headline5Style}
`;
