import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { BsCheckLg } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { Headline6Style } from 'Styles/Typo';
import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  contentKey: string;
  isOn?: boolean;
  contentValue?: ReactNode;
  backgroundtheme?: 'PAGE' | 'COMPONENT';
}
const ToggleTag: React.FC<Props> = ({
  backgroundtheme = 'COMPONENT',
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

const ContainerOnColorTheme = theme('mode', {
  light: css`
    border: 3px solid var(--color-primary4);
    box-shadow: 0 0 4px 0px var(--color-primary4);
    background-color: var(--color-primary4);
    color: var(--color-gray4);
  `,
  dark: css`
    border: 3px solid var(--color-primary4);
    box-shadow: 0 0 4px 0px var(--color-primary4);
    background-color: var(--color-primary4);
    color: white;
  `,
});
const ContainerOffColorTheme = theme('mode', {
  light: css`
    border: 3px solid var(--color-disable-light);
    background-color: var(--color-disable-light);
    color: var(--color-disable-light);
  `,
  dark: css`
    border: 3px solid var(--color-disable-dark);
    background-color: var(--color-disable-dark);
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
  border-radius: 30px;
  width: fit-content;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 2rem;
  margin-bottom: 1rem;
  ${({ isOn }) => (isOn ? ContainerOnColorTheme : ContainerOffColorTheme)};
`;

///////////////////////
const ContentKeyBackgroundColorPage = theme('mode', {
  light: css`
    background-color: white;
  `,
  dark: css`
    background-color: var(--color-gray3);
  `,
});
const ContentKeyBackgroundColorComponent = theme('mode', {
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
  ${({ backgroundtheme }) =>
    backgroundtheme === "COMPONENT"
      ? ContentKeyBackgroundColorComponent
      : ContentKeyBackgroundColorPage}
  ${Headline6Style}
  padding: 0.25em 1em;
  ${toggleTagTheme};
`;
///////////////////////

const ContentValue = styled.div`
  padding: 0.15em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const CheckLogo = styled(BsCheckLg)`
  color: var(--color-primary6);
`;
const XLogo = styled(IoMdClose)`
  color: var(--color-gray9);
  width: 1.3rem;
  height: auto;
`;
