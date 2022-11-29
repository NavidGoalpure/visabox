import { ComponentTitleStyle } from 'components/Layouts/StyledComponents';
import { useLocale } from 'hooks/useLocale';
import { MultiLanguageText } from 'interfaces';
import { Slug } from 'interfaces/Fields';
import Link from 'next/link';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { componentTextColor, componentTheme } from 'styles/Theme';
import { Headline6Style } from 'styles/Typo';

interface Props {
  code?: number;
  title?: MultiLanguageText;
  description?: MultiLanguageText;
  slug?: Slug;
}
function OccupationCard({ code, title, description, slug }: Props) {
  const { locale } = useLocale();
  const getSmartHref = (): URL => {
    if (slug?.current)
      return { pathname: `/${locale}/occupations/${slug?.current}` } as URL;
    return { pathname: `/${locale}/occupations/${code}` } as URL;
  };
  return (
    <Link key={code} href={getSmartHref()} as={getSmartHref()} prefetch={false}>
      <Container>
        <Code>{code}</Code>
        <Title>{title?.[locale]}</Title>
        <Description>{description?.[locale]}</Description>
      </Container>
    </Link>
  );
}

export default OccupationCard;
const Container = styled.div`
  ${componentTheme}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding-bottom: 3.75rem;
  border-radius: 15px;
  padding-top: 1.5rem;
  cursor: pointer;
`;
export const codeColor = theme('mode', {
  light: css`
    background: var(--color-gray7);
    color: var(--color-gray8);
    border: 2px solid var(--color-primary5);
  `,
  dark: css`
    color: var(--color-primary5);
    border: 2px solid var(--color-primary4);
  `,
});
const Code = styled.h3`
  ${Headline6Style}
  ${codeColor}
  margin-bottom:1rem;
  padding: 0.5rem;
  align-items: center;
  border-radius: 55px;
`;
const Title = styled.h2`
  ${ComponentTitleStyle}
`;

const Description = styled.p`
  ${componentTextColor}
  text-align: center;
  overflow: hidden;
`;
