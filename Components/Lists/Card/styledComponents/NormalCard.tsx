import { deviceMin } from 'Consts/device';
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
import { Headline6Style } from 'Styles/Typo';

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

  width: 100%;
  opacity: 0;
  @media ${deviceMin.mobileL} {
    min-width: 20rem;
    width: 32%;
  }
`;
export const Wrapper = styled.div`
  ${layer2A_Bg};
  ${ContainerBorder};
  box-shadow: unset;
  width: 100%;
  height: 20.5rem;
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

export const Title = styled.h3`
  ${layer3_TitleStyle};
  ${layer2A_HeaderBG};
  position: absolute;
  top: -1.5rem;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  width: fit-content;
  margin-bottom: 2rem;
`;
export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1.5rem;
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;
`;

export const EmailTitle = styled.h4`
  ${LinksTheme}
  ${Headline6Style}
  transition: 0.3s all ease;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const CopyIcon = styled(IoMdCopy)`
  ${CopyIconTheme};
  width: 1.5rem;
  height: auto;
`;
export const EmailUrl = styled.h5`
  ${layer2A_TextColor};
  ${Headline6Style};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  word-break: break-all;
`;
export const PhoneWrapper = styled(EmailWrapper)``;
export const PhoneTitle = styled(EmailTitle)``;
export const PhoneUrl = styled(EmailUrl)``;
export const WebsiteWrapper = styled(EmailWrapper)``;
export const WebsiteUrl = styled.a<{ $hasWebsite: boolean }>`
  ${layer2A_TextColor};
  ${Headline6Style};
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  ${({ $hasWebsite }) => !$hasWebsite && 'cursor: unset;'}
  direction:ltr;
`;
export const WebsiteTitle = styled(EmailTitle)``;
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
