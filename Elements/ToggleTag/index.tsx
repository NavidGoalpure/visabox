import styled, { css } from "styled-components";
import theme from "styled-theming";
import { BsCheckLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Headline6Style } from "Styles/Typo";
import { HTMLAttributes, ReactNode } from "react";
import { deviceMin } from "Consts/device";

interface Props extends HTMLAttributes<HTMLDivElement> {
  contentKey: string;
  isOn?: boolean;
  contentValue?: ReactNode;
  backgroundtheme?: "PAGE" | "COMPONENT";
}
const ToggleTag: React.FC<Props> = ({
  backgroundtheme = "COMPONENT",
  contentKey,
  contentValue,
  isOn,
  ...props
}) => {
  function getSmartContent({
    contentValue,
    isOn,
  }: {
    contentValue: ReactNode;
    isOn?: boolean;
  }): ReactNode {
    if (contentValue) return contentValue;
    if (isOn) return <CheckLogo />;
    return <XLogo />;
  }
  return (
    <Container isOn={isOn} {...props}>
      <ContentKey isOn={isOn} backgroundtheme={backgroundtheme}>
        {contentKey}
      </ContentKey>
      <ContentValue>{getSmartContent({ contentValue, isOn })}</ContentValue>
    </Container>
  );
};
export default ToggleTag;
const ContainerBorderColorTheme = theme("mode", {
  light: css`
    border-color: var(--color-gray11);
  `,
  dark: css`
    border-color: var(--color-gray6);
  `,
});
const ContainerOnColorTheme = theme("mode", {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: white;
  `,
});
const ContainerOffColorTheme = theme("mode", {
  light: css`
    color: var(--color-disable-light);
  `,
  dark: css`
    color: var(--color-gray9);
  `,
});

const toggleTagTheme = theme("languageDirection", {
  ltr: css``,
  rtl: css`
    height: 100%;
    padding: 0 1em;
  `,
});
const Container = styled.div<{ isOn?: boolean }>`
  border-right: 1px solid;
  border-top: 1px solid;
  ${ContainerBorderColorTheme};
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 50%;
  overflow: hidden;
  padding: 1rem 0;
  @media ${deviceMin.laptopXS} {
    border-top: none;
  }
  ${({ isOn }) => (isOn ? ContainerOnColorTheme : ContainerOffColorTheme)};
`;

///////////////////////
const ContentKeyBackgroundColorPage = theme("mode", {
  light: css`
    background-color: white;
  `,
  dark: css`
    background-color: var(--color-gray3);
  `,
});
const ContentKeyBackgroundColorComponent = theme("mode", {
  light: css`
    background-color: white;
  `,
  dark: css`
    background-color: var(--color-gray6);
  `,
});

const ContentKey = styled.h3<{
  isOn?: boolean;
  backgroundtheme: "PAGE" | "COMPONENT";
}>`
  ${Headline6Style}
`;
///////////////////////

const ContentValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  ${toggleTagTheme}
`;
const CheckLogo = styled(BsCheckLg)`
  color: var(--color-primary5);
`;
const XLogo = styled(IoMdClose)`
  color: var(--color-gray9);
  width: 1.3rem;
  height: auto;
`;
