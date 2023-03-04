import { PrimaryButton } from "Elements/Button/Primary";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Headline4Style, Headline6Style } from "Styles/Typo";

const HintComponent = () => {
  return (
    <Container>
      <Title>توجه</Title>
      <P>
        این صفحه حاوی عباراتی است که دارای بار معنای دقیق در زبان انگلیسی هستند
        و ممکن است در اثر ترجمه،‌ کاربر را دچار اشتباه کنند. به همین دلیل این
        عبارات ترجمه نشده اند و با ادبیات دقیق اداره مهاجرت استرالیا -به زبان
        انگلیسی-عینا نشان داده می‌شوند. به هرحال با استفاده از دکمه های زیر،
        می‌توانید نظر خود را در این باره به ما بگویید تا در ورژن های بعدی لحاظ
        شود.
      </P>
      <EnglishLangButton>همه بخش ها به انگیلیسی ترجمه شود</EnglishLangButton>
      <PersianLangButton>همه بخش ها به فارسی ترجمه شود</PersianLangButton>
    </Container>
  );
};
export const ContainerTheme = theme("mode", {
  light: css`
    background: var(--color-gray6);
  `,
  dark: css`
    background: var(--color-gray2);
  `,
});
export default HintComponent;
const Container = styled.div`
  ${ContainerTheme};
  padding: 2rem 2rem 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Title = styled.h3`
  ${Headline4Style};
  color: white;
`;
const P = styled.p`
  ${Headline6Style};
  text-align: start;
  color: white;
`;
const EnglishLangButton = styled(PrimaryButton)``;
const PersianLangButton = styled(PrimaryButton)``;
