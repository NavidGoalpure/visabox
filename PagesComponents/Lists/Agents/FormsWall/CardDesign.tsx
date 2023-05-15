import { deviceMin } from "Consts/device";
import styled, { css } from "styled-components";
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from "Styles/Theme/Layers/layer1/style";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import {
  layer2A_BodyStyle,
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from "Styles/Theme/Layers/layer2/style";
import { layer2A_TitleColor } from "Styles/Theme/Layers/layer2/theme";
import theme from "styled-theming";
import Link from "next/link";
import { Headline7Style } from "Styles/Typo";
import { PrimaryButton } from "Elements/Button/Primary";

function CardDesign() {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <CardContainer
      target="_blank"
      rel="noopener noreferrer"
      style={{ height: "100%" }}
      href={{ pathname: `/` }}
      prefetch={false}
    >
      <Wrapper>
        <Title>engineer</Title>
        <DataWrapper>
          <Label>Name:</Label> <Value> Mobin khafane besiar bozorgsal</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>Date: </Label> <Value>23/3/23</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>Language Skills:</Label> <Value> Ielts 6 </Value>
        </DataWrapper>
        <DataWrapper>
          <Label>Age:</Label> <Value>18</Value>
        </DataWrapper>
      </Wrapper>
      <PrimaryButton style={{ margin: "0 auto" }}>View More</PrimaryButton>
    </CardContainer>
  );
}
export default CardDesign;
const codeColor = theme("mode", {
  light: css`
    background: var(--color-gray13);
    color: var(--color-gray8);
    border: 2px solid var(--color-primary3);
  `,
  dark: css`
    color: var(--color-primary6);
    border: 2px solid var(--color-primary4);
  `,
});
const LabelTheme = theme("mode", {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});

const CardContainer = styled(Link)`
  ${layer2A_BodyStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 19rem;
  height: 19rem;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  padding: 1rem 1rem 2rem 1rem;
  max-width: unset;
  gap: 2rem;

  @media ${deviceMin.tabletL} {
    max-width: 320px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Title = styled.h3`
  ${layer2A_SubtitleStyle};
  ${codeColor};
  width: min-content;
  padding: 0.5rem;
  align-items: center;
  border-radius: 55px;
  margin-bottom: 1rem;
`;

const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  align-items: flex-start;
`;
const Label = styled.h4`
  ${LabelTheme};
  ${Headline7Style};
  line-height: 20px;
`;
const Value = styled.h4`
  ${layer2A_TextStyle};
  line-height: 20px;
`;
