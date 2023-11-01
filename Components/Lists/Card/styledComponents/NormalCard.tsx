import Image from 'next/image';
import { deviceMin } from 'Consts/device';
import { PrimaryButton } from 'Elements/Button/Primary';
import { IoMdCopy } from 'react-icons/io';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import {
  layer2A_Bg,
  layer2A_HeaderBG,
  layer2A_TextColor,
} from 'Styles/Theme/Layers/layer2/theme';
import {
  layer3_TitleStyle,
  layer3_TextStyle,
} from 'Styles/Theme/Layers/layer3/style';
import { Headline6Style, Headline7Style } from 'Styles/Typo';

export const ContainerBorder = theme('mode', {
  light: css`
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
  `,
  dark: css`
    border: none;
  `,
});
export const LinksTheme = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});

export const MaraTheme = theme('mode', {
  light: css`
    background: var(--color-gray12);
  `,
  dark: css`
    background: var(--color-gray3);
  `,
});

export const CopyIconTheme = theme('mode', {
  light: css`
    color: var(--color-gray10);
  `,
  dark: css`
    color: var(--color-gray9);
  `,
});
export const Container = styled.div`
  padding-top: 5rem;
  margin-bottom: 1rem;
  width: 100%;
  opacity: 0;
  @media ${deviceMin.mobileL} {
    min-width: 20rem;
    width: 31%;
  }
`;
export const Wrapper = styled.div`
  ${layer2A_Bg};
  ${ContainerBorder};
  box-shadow: unset;
  width: 100%;
  height: 26rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 3.125rem 0.5rem;
  @media ${deviceMin.laptopXS} {
    padding: 3.125rem 1.5rem;
  }
`;

export const LogoBackground_layer1 = theme('mode', {
  light: css`
    background: linear-gradient(
      -90deg,
      var(--color-gray9) 0 50%,
      var(--color-gray11) 0% 100%
    );
  `,
  dark: css`
    background: linear-gradient(
      -90deg,
      var(--color-gray2) 0 50%,
      var(--color-gray6) 0% 100%
    );
  `,
});
export const LogoBackground_layer2 = theme('mode', {
  light: css`
    background: linear-gradient(
      -90deg,
      var(--color-gray9) 0 50%,
      var(--color-gray11) 0% 100%
    );
  `,
  dark: css`
    background: linear-gradient(
      -90deg,
      var(--color-gray6) 0% 100% var(--color-gray2) 0 50%
    );
  `,
});

export const Title = styled.h3`
  ${layer3_TitleStyle};
  ${layer2A_HeaderBG};
  white-space: nowrap;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  width: fit-content;
`;

export const ImageWrapper = styled.div<{ layerContext: '1' | '2' }>`
  ${({ layerContext }) =>
    layerContext === '2' ? LogoBackground_layer2 : LogoBackground_layer1}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 5.5rem;
  height: 5.5rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -52%) rotate(4deg);
  border-radius: 50%;
  border: none;
  transition: all 0.3s ease;
  ${Wrapper}:hover & {
    transform: rotate(0deg) translate(-50%, -56%);
  }
`;

export const AgentLogo = styled(Image)`
  position: relative !important;
  object-fit: cover;
  transition: all 0.3s ease;
  border-radius: 50%;
  width: 4.75rem !important;
  height: 4.75rem !important;
  ${Wrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
`;

export const AgencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;
`;

export const AgencyTitle = styled.h4`
  ${LinksTheme}
  ${Headline6Style}
  transition: 0.3s all ease;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const AgencyValue = styled.h5`
  ${layer2A_TextColor};
  ${Headline6Style};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  word-break: break-all;
`;

export const AgentElement = styled.h3`
  ${layer3_TextStyle}
  ${layer2A_Bg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(3deg) translate(-24%, 53%);
  padding: 0.2rem 1.5rem;
  border-radius: 10px;
  box-shadow: unset;
`;
export const MaraElement = styled.h3`
  ${layer3_TextStyle}
  ${MaraTheme}
  position:absolute;
  bottom: 0;
  left: 0;
  transform: rotate(-3deg) translate(27%, 70%);
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
`;
export const ViewMoreButton = styled(PrimaryButton)`
  ${Headline7Style}
  padding:0 4rem;
  width: -webkit-fill-available;

  @media ${deviceMin.laptopXS} {
    width: max-content;
  }
`;
