import styled, { css } from "styled-components";
import { Headline3Style, Headline4Style } from "Styles/Typo";
import theme from "styled-theming";
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from "Styles/Theme/Layers/layer2/style";
import { BsCheck2 } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { PrimaryButton } from "Elements/Button/Primary";
import { deviceMin } from "Consts/device";

import {
  Hint_SecondaryContainer,
  Hint_SecondaryIcon,
  Hint_SecondaryTextStyle,
} from "Styles/Theme/Hint/style";
import { FiInfo } from "react-icons/fi";

//
const UniversitySection = () => {
  //
  //
  return (
    <Container>
      <Logo />
      <Title>جستجوی سکشن دانشگاه</Title>
      <Desc>
        با استفاده از این ابزار می توانید بفهمید دانشگاهی که در آن درس خوانده
        اید از نظر اداره مهاجرت استرالیا دارای چه سکشنی می باشد.برای این کار اسم
        دانشگاه یا شهری که دانشگاه در آن واقع شده را جستجو کنید و دانشگاه خود را
        از بین گزینه های موجود پیدا کنید. توجه کنید که برای شروع این جستجو،
        حداقل باید سه حرف را وارد کنید.
      </Desc>
      <HintContainer>
        <HintIcon />
        <HintText></HintText>
      </HintContainer>
    </Container>
  );
};
export default UniversitySection;
const BackgroundTheme = theme("mode", {
  light: css`
    background: linear-gradient(140.49deg, #f5f8fc 53.63%, #dde2eb 99.96%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  `,
  dark: css`
    background: linear-gradient(
      140.49deg,
      var(--color-gray6) 53.63%,
      var(--color-gray7) 99.96%
    );
  `,
});
const NoButtonTheme = theme("mode", {
  light: css`
    background: var(--color-gray12);
    color: var(--color-gray8);
  `,
  dark: css`
    background: var(--color-gray7);
    color: var(--color-gray11);
  `,
});

const Container = styled.div`
  ${BackgroundTheme};
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 1.5rem 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-sizing: border-box;
  @media ${deviceMin.tabletS} {
    padding: 1.5rem 2.5rem;
    box-sizing: content-box;
  }
`;
const Logo = styled(FaRegHandshake)`
  color: white;
  border-radius: 50%;
  background: var(--color-primary3);
  width: 2.5rem;
  padding: 1rem;
  box-sizing: content-box;
  height: auto;
`;
const Title = styled.h1`
  ${Headline4Style};
  color: var(--color-primary5);
  text-align: center;
  @media ${deviceMin.tabletS} {
    ${Headline3Style};
  }
`;
const Desc = styled.p`
  ${layer2A_TextStyle};
  white-space: pre-line;
  @media ${deviceMin.tabletS} {
    ${layer2A_SubtitleStyle};
  }
`;
const HintContainer = styled.div`
  ${Hint_SecondaryContainer};
  gap: 1rem;
  align-items: center;
  width: 100%;
`;
const HintIcon = styled(FiInfo)`
  ${Hint_SecondaryIcon};
`;
const HintText = styled.h3`
  ${Hint_SecondaryTextStyle}
`;