import styled from 'styled-components';
import SmartComponentBaseOnLocale from 'Components/Language/SmartComponentBaseOnLocale';
import { componentStatements } from './const';
import reactStringReplace from 'react-string-replace';
import { Layer1_SubtitleStyle } from 'Styles/Theme/Layers/layer1/style';

const PageSubtitle: React.FC = () => {
  const iranianSubtitle = reactStringReplace(
    componentStatements.PageSubtitle.fa,
    '{{تگ}}',
    () => (
      <a
        href='https://www.legislation.gov.au/Details/F2022C00574'
        target='_blank'
        rel='noopener noreferrer'
        key='a-tag-fa'
      >
        LIN 29/051
      </a>
    )
  );
  const englishSubtitle = reactStringReplace(
    componentStatements.PageSubtitle.en,
    '{{tag}}',
    () => (
      <a
        href='https://www.legislation.gov.au/Details/F2022C00574'
        target='_blank'
        rel='noopener noreferrer'
        key='a-tag-en'
      >
        LIN 29/051
      </a>
    )
  );
  const chineseSubtitle = reactStringReplace(
    componentStatements.PageSubtitle.zh,
    '{{tag}}',
    () => (
      <a
        href='https://www.legislation.gov.au/Details/F2022C00574'
        target='_blank'
        rel='noopener noreferrer'
        key='a-tag-en'
      >
        LIN 29/051
      </a>
    )
  );
  return (
    <SmartComponentBaseOnLocale
      compenents={{
        fa: <Subtitle key='fa'>{iranianSubtitle}</Subtitle>,
        en: <Subtitle key='en'>{englishSubtitle}</Subtitle>,
        zh: <Subtitle key='zh'>{chineseSubtitle}</Subtitle>,
      }}
    />
  );
};
export { PageSubtitle };

const Subtitle = styled.h2`
  ${Layer1_SubtitleStyle}
`;
