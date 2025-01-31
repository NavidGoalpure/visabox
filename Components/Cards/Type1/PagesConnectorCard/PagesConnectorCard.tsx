import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from 'Styles/Theme/Layers/layer2/style';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { SecondaryButton } from 'Elements/Button/Secondary';
import { useRouter } from 'next/router';
import DarkBackground from './Images/DarkBackground.svg';
import DarkBackgroundHover from './Images/DarkBackgroundHover.svg';
import theme from 'styled-theming';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  href: string;
  img: string;
}

const PagesConnectorCard: React.FC<Props> = ({
  title,
  href,
  img,
  ...props
}) => {
  const router = useRouter();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container {...props}>
      <ImageContainer>
        <BlogImg fill src={img} alt='image-source' sizes='100%' />
      </ImageContainer>
      <Wrapper href={href}>
        <Content>
          <Title>{title}</Title>
          <Button onClick={() => router.push(href)}>
            {t(LanguageKeys.GoToArticle)}
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default PagesConnectorCard;

const CardTheme = theme('mode', {
  light: css`
    filter: brightness(0.4);
  `,
  dark: css`
    filter: brightness(0.25);
  `,
});
const CardThemeHover = theme('mode', {
  light: css`
    filter: brightness(0.5);
  `,
  dark: css`
    filter: brightness(0.3);
  `,
});

const Container = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);
  width: 16rem;
  height: 20rem;
  border-radius: 15px;
  overflow: hidden;
  gap: 2rem;
  transition: 0.3s;
  position: relative;
  display: flex;
  align-items: center;
  :hover {
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const BlogImg = styled(Image)`
  ${CardTheme}
  position: absolute;
  height: 16rem;
  object-fit: cover;
  transition: 0.3s;
  ${Container}:hover & {
    transform: scale(1.1);
    ${CardThemeHover}
  }
`;
const Wrapper = styled.a`
  z-index: 2;
  background-image: url(${DarkBackground});
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  ${Container}:hover & {
    transform: rotate(-30deg);
    background-image: url(${DarkBackgroundHover});
  }
`;

const Content = styled.section`
  gap: 2rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  justify-content: space-between;
  padding: 4rem 0;
  ${Container}:hover & {
    transform: rotate(30deg);
  }
`;

const Title = styled.div`
  ${layer2A_SubtitleStyle}
  color: white;
  width: 100%;
  text-align: center;
`;

const Button = styled(SecondaryButton)`
  width: fit-content;
`;

const Desc = styled.div`
  ${layer2A_TextStyle}
  text-align: Start;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const ShareBtn = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: var(--color-primary4);
  border-radius: 100px 100px 100px 100px;
  color: white;
  position: absolute;
  top: -10%;
  left: -10%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  box-shadow: -1px -1px 4px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 10;
  ${Container}:hover & {
    top: 0;
    left: 0;
    border-radius: 0px 0px 20px 0px;
  }
  :hover {
    background-color: var(--color-primary2);
  }
`;
