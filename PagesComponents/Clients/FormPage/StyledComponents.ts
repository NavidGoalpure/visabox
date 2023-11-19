import { deviceMin } from "Consts/device";
import { BsPersonCircle } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import {
  Hint_SecondaryContainer,
  Hint_SecondaryIcon,
  Hint_SecondaryTextStyle,
} from "Styles/Theme/Hint/style";
import { layer2A_TitleStyle } from "Styles/Theme/Layers/layer2/style";
import { layer2A_Key } from "Styles/Theme/Layers/layer2/theme";
import { Headline7Style } from "Styles/Typo";

const EditTheme = theme("mode", {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
const EditIconTheme = theme("mode", {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray9);
  `,
});
const TitleColor = theme("mode", {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
const HeaderLabelTheme = theme("mode", {
  light: css`
    color: var(--color-gray10);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
const HeaderScoreTheme = theme("mode", {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary4);
  `,
});
export const EditButton = styled.button`
  ${Headline7Style};
  ${EditTheme};
  font-size: 13px;
  margin-inline-start: auto;
  grid-column-start: 3;
  cursor: pointer;
`;
export const EditIcon = styled(MdOutlineEdit)`
  ${EditIconTheme};
  width: 1.2rem;
  height: auto;
  border-radius: 50%;
`;

export const HintContainer = styled.div`
  ${Hint_SecondaryContainer};
  gap: 2rem;
  @media ${deviceMin.tabletL} {
    margin-top: 3rem;
  }
`;
export const HintInfoIcon = styled(FiInfo)`
  ${Hint_SecondaryIcon};
`;
export const HintContent = styled.h3`
  ${Hint_SecondaryTextStyle};
`;
export const ProfilePictureWrapper = styled.div`
  width: 12rem;
  height: 12rem;
  z-index: 1;
  margin-bottom: 4rem;
  position: relative;
  @media ${deviceMin.tabletL} {
    flex-shrink: 0;
    align-self: center;
    width: 7rem;
    height: 7rem;
    z-index: 1;
    position: relative;
    margin-bottom: 0;
  }
`;
export const ProfilePicture = styled.img`
  object-fit: contain;
  position: relative !important;
  width: 100%;
  height: auto;
  border-radius: 50%;
  @media ${deviceMin.tabletL} {
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const ImagePlaceholder = styled(BsPersonCircle)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  color: var(--color-gray11);
`;
export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  @media ${deviceMin.tabletL} {
    margin-bottom: 0;
  }
`;
export const Name = styled.h2`
  ${TitleColor}
  ${layer2A_TitleStyle}
  z-index:1;
  cursor: pointer;
`;
export const HeaderLabel = styled.h4`
  ${Headline7Style};
  ${HeaderLabelTheme}
  #score {
    ${HeaderScoreTheme};
  }
`;
export const JobTitle = styled.h3`
  ${layer2A_Key}
  margin:0;
  width: auto;
  cursor: pointer;
`;
export const CreatedDate = styled.div`
  ${layer2A_Key}
  margin:0;
  width: auto;
`;
export const ScoreWrapper = styled.div``;
