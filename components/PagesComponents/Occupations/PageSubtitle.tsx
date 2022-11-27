import styled from 'styled-components/macro';
import SmartComponentBaseOnLocale from 'components/SmartComponentBaseOnLocale';
import { componentStatements } from './Const';
import reactStringReplace from 'react-string-replace';
import { pageTitleColor } from 'styles/Theme';
import { PageSubtitleStyle } from 'components/Layouts/StyledComponents';

const PageSubtitle: React.FC = () => {
  const iranianSubtitle = reactStringReplace(
    componentStatements.PageSubtitle.ir,
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
    componentStatements.PageSubtitle.en,
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
        ir: <Subtitle>{iranianSubtitle}</Subtitle>,
        en: <Subtitle>{englishSubtitle}</Subtitle>,
      }}
    />
  );
};
export { PageSubtitle };

const Subtitle = styled.h2`
  ${PageSubtitleStyle}
`;
const A = styled.a`
  ${pageTitleColor}
`;
