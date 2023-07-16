import { layer2A_SubtitleStyle, layer2A_TextStyle, layer2A_TitleStyle } from 'Styles/Theme/Layers/layer2/style';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
import { copyContent } from 'Utils';
import { HTMLAttributes } from 'react';
import { BsShare } from 'react-icons/bs';
import styled from 'styled-components';
import Image from 'next/image';

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string;
    desc: string;
    img: string;
    href: string;
}

const BlogCardMobile: React.FC<Props> = ({
    title,
    desc,
    img,
    href,
    ...props
}) => {
    return (
        <Container {...props}>
            <Wrapper href={href} >
                <ImageContainer>
                    <BlogImg
                        fill
                        src={img}
                        alt='image-source'
                    />
                </ImageContainer>
                <Content>
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                </Content>
            </Wrapper>
            <ShareBtn
                onClick={() =>
                    copyContent({
                        text: `www.marabox.com/${href}`,
                        toastMessage: "لینک بلاگ در حافظه کپی شد",
                    })
                }>
                <BsShare />
            </ShareBtn>
        </Container>
    )
}

export default BlogCardMobile;

const Container = styled.div`
margin-top: 5rem;
display: flex;
justify-content: center;
width: 100%;
height: 27.5rem;
position: relative;
`

const ImageContainer = styled.div`
position: relative;
width: 90%;
height: 50%;
`

const BlogImg = styled(Image)`
border-radius: 15px;
transform: translateY(-30%);
box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.50);
object-fit: cover !important;
`

const Wrapper = styled.a`
${layer2A_Bg}
width: 100%;
height: 100%;
border-radius: 15px 15px 0px 15px;
display: flex;
flex-direction: column;
align-items: center;
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
margin-top: -3rem;
padding: 0 1rem;

`

const Title = styled.div`
${layer2A_SubtitleStyle}
text-align: center;
`

const Desc = styled.div`
${layer2A_TextStyle}
text-align: Start;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
`

const ShareBtn = styled.div`
width: 3rem;
height: 3rem;
background-color: var(--color-primary4);
border-radius: 20px 0px 0px 0px;
color: white;
position: absolute;
bottom: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
box-shadow: -1px -1px 4px 0px rgba(0, 0, 0, 0.50);
`