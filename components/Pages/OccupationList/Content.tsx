import styled from 'styled-components/macro';
import { Headline4Style, Headline5Style } from 'styles/Typo';
import { useTranslation } from '@hooks/useTraslation';
import { componrntStatements, PageKeys } from './Const';
import { LocaleSubtitle as PageLocaleSubtitle } from './Locale/Subtitle';

const Content: React.FC = () => {
  const { t } = useTranslation(componrntStatements);

  return (
    <>
      <PageTitle>{t(PageKeys.PageTitle)}</PageTitle>
      <PageLocaleSubtitle />
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${Headline4Style}
`;
