import { deviceMin } from "Consts/device";
import styled, { css } from "styled-components";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  layer2A_BodyStyle,
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from "Styles/Theme/Layers/layer2/style";
import theme from "styled-theming";
import Link from "next/link";
import { Headline7Style } from "Styles/Typo";
import { PrimaryButton } from "Elements/Button/Primary";
import { componentStatements, LanguageKeys } from "./const";
import { Client } from "Interfaces/Database/Client";
import { useLocale } from "Hooks/useLocale";
import { CalculateClientScore } from "PagesComponents/Clients/PointCalculator/Contexts/FormDataContext/utils";
import { calculateAge } from "Utils/clients";

interface Props {
  formData: Client;
}
function BasicFormCard({ formData }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const FormUpdatedAt = formData?.form_updated?.toString().substring(0, 10);
  const clientScore = CalculateClientScore(formData);
  return (
    <CardContainer
      target="_blank"
      rel="noopener noreferrer"
      style={{ height: "100%" }}
      href={`/clients/${formData._id}`}
      locale={locale}
      prefetch={false}>
      <Wrapper>
        <Title>{formData.current_job}</Title>
        <DataWrapper>
          <Label>{t(LanguageKeys.Score)}</Label>
          <ScoreValue>{clientScore}</ScoreValue>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.NameLabel)}</Label>
          <Value>
            {formData.name} {formData.lastname}
          </Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.DateLabel)} </Label>
          <Value>{FormUpdatedAt}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.LanguageSkillsLabel)}</Label>
          <Value> {formData?.ielts_score} </Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.AgeLabel)}</Label>
          <Value>
            {calculateAge(
              new Date(formData?.birthday || formData?.age || "1800-01-01")
            )}
          </Value>
        </DataWrapper>
      </Wrapper>
      <PrimaryButton
        style={{ margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        {t(LanguageKeys.ViewMore)}
      </PrimaryButton>
    </CardContainer>
  );
}
export default BasicFormCard;
const codeColor = theme("mode", {
  light: css`
    background: var(--color-gray13);
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-primary6);
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
const ScoreValueTheme = theme("mode", {
  light: css`
    color: var(--color-secondary1);
  `,
  dark: css`
    color: var(--color-secondary4);
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  width: 100%;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
const ScoreValue = styled(Value)`
  ${ScoreValueTheme};
`;
