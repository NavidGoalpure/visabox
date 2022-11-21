import styled from 'styled-components/macro';
import { Headline5Style } from 'styles/Typo';
import { useTranslation } from '@hooks/useTraslation';
import SmartComponentBaseOnLocale from '@components/SmartComponentBaseOnLocale';
import { componrntStatements, PageKeys } from '../Const';

const LocaleSubtitle: React.FC = () => {
  const { t } = useTranslation(componrntStatements);

  return (
    <SmartComponentBaseOnLocale
      compenents={{
        ir: (
          <PageSubtitle>
            {t(PageKeys.PageSubtitle, [{ تگ: 'LIN 19/051' }])}
          </PageSubtitle>
        ),
        en: (
          <PageSubtitle>
            {t(PageKeys.PageSubtitle, [{ tag: 'LIN 19/051' }])}
            LIN 19/051
          </PageSubtitle>
        ),
      }}
    />
  );
};
export { LocaleSubtitle };

const PageSubtitle = styled.h2`
  ${Headline5Style}
`;
