import { useLocale } from 'hooks/useLocale';
import { MultiLanguageText } from 'interfaces';
import { Slug } from 'interfaces/Fields';
import Link from 'next/link';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline6Style } from 'Styles/Typo';
import { IoIosArrowDown } from 'react-icons/io';
import { componentTheme, ComponentTitleStyle, componentTextColor } from 'Styles/Theme/Component';

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
        {/* <Code>{code}</Code> */}
        <Code>121111</Code>
        {/* <Title>{title?.[locale]}</Title> */}
        <Title>Grain, Oilseed or Pasture Grower / Field Crop Grower</Title>

        <Description>{description?.[locale]}</Description>
        <PopupContainer>
          {' '}
          <Arrow />{' '}
        </PopupContainer>
      </Container>
    </Link>
  );
}

export default OccupationCard;
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
const Container = styled.div`
  ${componentTheme}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23rem;
  border-radius: 15px;
  padding: 1.5rem 1rem 3.75rem 1rem;
  cursor: pointer;
  max-width: 31%;
  position: relative;
  overflow: hidden;
`;

const Code = styled.h3`
  ${Headline6Style}
  ${codeColor}
  margin-bottom:1rem;
  padding: 0.5rem;
  align-items: center;
  border-radius: 55px;
  ${Container}:hover & {
    z-index: 4;
  }
`;

const Title = styled.h2`
  ${ComponentTitleStyle}
`;

const Description = styled.p`
  ${componentTextColor}
  text-align: center;
  overflow: hidden;
`;
const PopupContainer = styled.div`
  position: absolute;
  top: 90%;
  background-color: var(--color-gray9);
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem 3.75rem 1rem;
  cursor: pointer;
  transition: all 0.5s ease;
  ${Container}:hover & {
    top: 0;
  }
`;
const Arrow = styled(IoIosArrowDown)`
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  fill: white;
  background-color: var(--color-primary4);
  width: 2.5rem;
  height: auto;
  border-radius: 50px;
  padding: 0.5rem;
  transition: all 0.4s ease;
  ${Container}:hover & {
    opacity: 0;
  }
`;
