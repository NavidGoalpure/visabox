import styled from 'styled-components/macro';
import SmartComponentBaseOnLocale from 'Components/SmartComponentBaseOnLocale';
import { componentStatements } from './const';
import reactStringReplace from 'react-string-replace';
import { PageSubtitleStyle, pageTitleColor } from 'Styles/Theme/Page';

const PageSubtitle: React.FC = () => {
  const iranianSubtitle = reactStringReplace(
    componentStatements.PageSubtitle.fa,
    '{{تگ}}',
    () => (
      <A
        href='https://www.legislation.gov.au/Details/F2022C00574'
        target='_blank'
        rel='noopener noreferrer'
        key='a-tag-fa'
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
        key='a-tag-en'
      >
        LIN 29/051
      </A>
    )
  );
  return (
    <SmartComponentBaseOnLocale
      compenents={{
        fa: <Subtitle key='fa'>{iranianSubtitle}</Subtitle>,
        en: <Subtitle key='en'>{englishSubtitle}</Subtitle>,
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
