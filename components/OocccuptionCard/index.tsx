import { useLocale } from "hooks/useLocale";
import { MultiLanguageText } from "interfaces";
import { Slug } from "interfaces/Fields";
import Link from "next/link";
import styled, { css } from "styled-components/macro";
import theme from "styled-theming";
import { IoIosArrowDown } from "react-icons/io";
import {
  componentTheme,
  componentTextColor,
  componentSubtitleStyle,
  componentTextStyle,
  componentTitleColor,
} from "Styles/Theme/Component";
import { ReactNode, useState } from "react";
import { Button } from "elements/Button";
import { device, deviceMin } from "consts/device";
import { ScrollBox } from "elements/ScrollBox";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <Container>
      <Link
        key={code}
        href={{ pathname: `/${locale}/occupations/${slug?.current}` }}
        prefetch={false}
      >
        <Wrapper>
          {/* <Code>{code}</Code> */}
          <Code>121111</Code>
          {/* <Title>{title?.[locale]}</Title> */}
          <Title>
            {"Grain, Oilseed or Pasture Grower / Field Crop Grower"}
          </Title>

          <Description>{description?.[locale]}</Description>
        </Wrapper>
      </Link>
      <PopupContainer isPopupOpen={isPopupOpen}>
        {" "}
        <Arrow
          isPopupOpen={isPopupOpen}
          onClick={() => {
            setIsPopupOpen((prevState) => !prevState);
            return false;
          }}
        />{" "}
        <PopupContentContainer isPopupOpen={isPopupOpen}>
          {popupContent}
          <StyledButton
            onClick={() =>
              router.push(`/${locale}/occupations/${slug?.current}`)
            }
          >
            Read More
          </StyledButton>
        </PopupContentContainer>
      </PopupContainer>
    </Container>
  );
}

export default OccupationCard;
export const codeColor = theme("mode", {
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
const popupContainerColor = theme("mode", {
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
  justify-content: center;
  width: 20rem;
  height: 20rem;
  border-radius: 15px;
  cursor: pointer;
  max-width: 31%;
  position: relative;
  padding: 1.5rem 1rem 3.75rem 1rem;
  @media ${device.tabletL} {
    max-width: unset;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Code = styled.h3`
  ${componentSubtitleStyle}
  ${codeColor}
  width:min-content;
  margin-bottom: 1rem;
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
  margin: 0;
`;
const PopupContainerHoverCss = css`
  transition-delay: 0s;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  padding-inline-start: 2.5rem;
  padding-inline-end: 2rem;
  height: 100%;
  border-radius: 15px;
`;
const PopupContainer = styled.div<{ isPopupOpen: boolean }>`
  ${popupContainerColor}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  border-radius: 0 0 15px 15px;
  transition: all 0.4s ease, border-radius 0.4s 0.1s ease;
  transition-delay: 0.3s;
  pointer-events: none;
  @media ${deviceMin.tabletL} {
    :hover {
      ${PopupContainerHoverCss}
    }
    pointer-events: all;
  }

  ${({ isPopupOpen }) => isPopupOpen && PopupContainerHoverCss}
`;
const ArrowHoverCss = css`
  transition-delay: 0s;
  transform: translateX(-50%) rotate(0deg);
`;
const Arrow = styled(IoIosArrowDown)<{ isPopupOpen: boolean }>`
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
  pointer-events: all;

  @media ${deviceMin.tabletS} {
    top: -1rem;
    width: 2rem;
  }
  @media ${deviceMin.tabletL} {
    top: -1rem;
    width: 2rem;
    ${PopupContainer}:hover & {
      ${ArrowHoverCss}
    }
  }
  ${({ isPopupOpen }) => isPopupOpen && ArrowHoverCss}
`;
const PopupContentContainerHoverCss = css`
  transition-delay: 0.3s;
  transform: translateY(0);
  opacity: 1;
`;
const PopupContentContainer = styled(ScrollBox)<{ isPopupOpen: boolean }>`
  opacity: 0;
  padding: 0;
  transform: translateY(-20px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease;
  pointer-events: none;
  #scroll-area-scrollbar {
    margin-right: -1rem;
  }
  h3 {
    ${componentSubtitleStyle}
    ${componentTextColor}
    margin-bottom:1rem;
  }
  ul {
    ${componentTextStyle}
    margin-bottom:1rem;
  }

  @media ${deviceMin.tabletL} {
    ${PopupContainer}:hover & {
      ${PopupContentContainerHoverCss}
    }
  }
  ${({ isPopupOpen }) => isPopupOpen && PopupContentContainerHoverCss}
`;
const StyledButton = styled(Button)`
  margin: 0 auto;
  margin-bottom: 2rem;
`;
