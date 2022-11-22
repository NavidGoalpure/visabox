import styled from 'styled-components/macro';
import { Headline5Style, Headline4Style } from 'styles/Typo';
import SmartComponentBaseOnLocale from '@components/SmartComponentBaseOnLocale';
import { componrntStatements } from '../Const';
import reactStringReplace from 'react-string-replace';
import { titleColor } from 'styles/Theme';

const LocaleSubtitle: React.FC = () => {
  const iranianSubtitle = reactStringReplace(
    componrntStatements.PageSubtitle.ir,
    '{{تگ}}',
    () => (
      <A
        href='https://www.legislation.gov.au/Details/F2022C00574'
        target='_blank'
        rel='noopener noreferrer'
      >
        LIN 29/051
      </A>
    )
  );
  const englishSubtitle = reactStringReplace(
    componrntStatements.PageSubtitle.en,
    '{{tag}}',
    () => (
      <A
        href='https://www.legislation.gov.au/Details/F2022C00574'
        target='_blank'
        rel='noopener noreferrer'
      >
        LIN 29/051
      </A>
    )
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
const A = styled.a`
  ${Headline5Style}
  ${titleColor}
`;
