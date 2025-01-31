import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from 'Styles/Theme/Layers/layer2/style';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
import { copyContent, isRtl } from 'Utils';
import { HTMLAttributes } from 'react';
import { BsShare } from 'react-icons/bs';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { useLocale } from 'Hooks/useLocale';
import { device, deviceMin } from 'Consts/device';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  desc: string;
  img: string;
  href: string;
  imgPriority?: boolean;
}

const BlogCard: React.FC<Props> = ({
  title,
  desc,
  img,
  href,
  imgPriority = false,
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  return (
    <Container {...props}>
      <Link href={href}>
        <ImageContainer>
          <BlogImg
            src={img}
            alt='image-source'
            fill
            sizes={`${device.mobileL} 100vw, 48vw`}
            quality={100}
            priority={imgPriority}
          />
          <ShareBtn
            isRTL={isRtl(locale)}
            onClick={() =>
              copyContent({
                text: `www.marabox.com.au/${locale}/${href}`,
                toastMessage: t(LanguageKeys.CopyInClipboard),
              })
            }
          >
            <BsShare />
          </ShareBtn>
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </Content>
      </Link>
    </Container>
  );
};

export default BlogCard;

const Container = styled.div`
  ${layer2A_Bg}
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  transition: 0.3s;
  gap: 1rem;
  :hover {
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
    transform: translateY(-0.5rem);
  }
  @media ${deviceMin.tabletS} {
    width: 48%;
  }
`;

const ImageContainer = styled.div`
  height: 16rem;
  position: relative;
  width: 100%;
`;

const BlogImg = styled(Image)`
  height: 16rem;
  object-fit: cover;
  transition: 0.3s;
  ${Container}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  gap: 1rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  ${layer2A_SubtitleStyle}
  width: 100%;
`;

const Desc = styled.div`
  ${layer2A_TextStyle}
  text-align: Start;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const ShareBtn = styled.div<{ isRTL: boolean }>`
  width: 3rem;
  height: 3rem;
  background-color: var(--color-primary4);
  border-radius: 100px 100px 100px 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  box-shadow: -1px -1px 4px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 10;
  position: absolute;
  top: 0;
  ${({ isRTL }) =>
    isRTL
      ? `left: 0;border-radius: 0px 0px 20px 0px;`
      : `right: 0;border-radius: 0px 0px 0px 20px;`}

  :hover {
    background-color: var(--color-primary2);
  }
`;
