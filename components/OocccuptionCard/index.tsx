import { useLocale } from 'hooks/useLocale';
import { MultiLanguageText } from 'interfaces';
import { Slug } from 'interfaces/Fields';
import Link from 'next/link';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline6Style } from 'Styles/Typo';
import { IoIosArrowDown } from 'react-icons/io';
import {
  componentTheme,
  componentTitleStyle,
  componentTextColor,
  componentSubtitleStyle,
  componentTextStyle,
  componentTitleColor,
} from 'Styles/Theme/Component';
import { ReactNode, useState } from 'react';
import { Button } from 'elements/Button';
import { device, deviceMin } from 'consts/device';

interface Props {
  code?: number;
  title?: MultiLanguageText;
  description?: MultiLanguageText;
  slug?: Slug;
  popupContent: ReactNode;
}
function OccupationCard({
  code,
  title,
  description,
  slug,
  popupContent,
}: Props) {
  const { locale } = useLocale();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
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
        <Title>{'Grain, Oilseed or Pasture Grower / Field Crop Grower'}</Title>

        <Description>{description?.[locale]}</Description>
        <PopupContainer>
          {' '}
          <Arrow
            onClick={() => {
              setIsPopupOpen((prevState) => !prevState);
              return false;
            }}
          />{' '}
          <PopupContentContainer>
            {popupContent}
            <StyledButton>Read More</StyledButton>
          </PopupContentContainer>
        </PopupContainer>
      </Container>
    </Link>
  );
}

export default OccupationCard;
export const codeColor = theme('mode', {
  light: css`
    background: var(--color-gray13);
    color: var(--color-gray8);
    border: 2px solid var(--color-primary5);
  `,
  dark: css`
    color: var(--color-primary5);
    border: 2px solid var(--color-primary4);
  `,
});
const popupContainerColor = theme('mode', {
  light: css`
    background-color: var(--color-gray12);
  `,
  dark: css`
    background-color: var(--color-gray8);
  `,
});
const Container = styled.div`
  ${componentTheme}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 20rem;
  border-radius: 15px;
  padding: 1.5rem 1rem 3.75rem 1rem;
  cursor: pointer;
  max-width: 31%;
  position: relative;
  @media ${device.tabletL} {
    max-width: unset;
  }
`;

const Code = styled.h3`
  ${componentSubtitleStyle}
  ${codeColor}
margin-bottom:1rem;
  padding: 0.5rem;
  align-items: center;
  border-radius: 55px;
`;

const Title = styled.h2`
  ${componentSubtitleStyle}
  ${componentTitleColor}
  margin-bottom:1rem;
`;

const Description = styled.p`
  ${componentTextStyle}
  text-align: center;
  overflow: hidden;
`;
const PopupContainer = styled.div`
  ${popupContainerColor}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  border-radius: 0 0 15px 15px;
  transition: all 0.4s ease, border-radius 0.4s 0.1s ease;
  transition-delay: 0.3s;
  :hover {
    transition-delay: 0s;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    padding-inline-start: 2.5rem;
    padding-inline-end: 2rem;
    height: 100%;
    border-radius: 15px;
  }
`;
const Arrow = styled(IoIosArrowDown)`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  fill: white;
  background-color: var(--color-primary4);
  width: 3rem;
  height: auto;
  border-radius: 50px;
  padding: 0.5rem;
  transition: all 0.4s ease;
  transition-delay: 0.3s;
  ${PopupContainer}:hover & {
    transition-delay: 0s;
    transform: translateX(-50%) rotate(0deg);
  }
  @media ${deviceMin.tabletS} {
    top: -1rem;
    width: 2rem;
  }
`;
const PopupContentContainer = styled.div`
  opacity: 0;
  pointer-events: none;
  transform: translateY(-20px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease;
  h3 {
    ${componentSubtitleStyle}
    ${componentTextColor}
    margin-bottom:1rem;
  }
  ul {
    ${componentTextStyle}
    margin-bottom:1rem;
  }
  ${PopupContainer}:hover & {
    transition-delay: 0.3s;
    transform: translateY(0);
    opacity: 1;
  }
`;
const StyledButton = styled(Button)``;
