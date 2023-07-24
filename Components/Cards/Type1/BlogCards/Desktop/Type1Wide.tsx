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

const BlogCardType1Wide: React.FC<Props> = ({
    title,
    desc,
    img,
    href,
    ...props
}) => {
    return (
        <Container {...props}>
            <Wrapper href={href}>
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

export default BlogCardType1Wide;

const Container = styled.div`
${layer2A_Bg}
display: flex;
justify-content: center;
width: 50%;
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
`

const ImageContainer = styled.div`
height: 16rem;
position: relative;
width: 100%;
`

const BlogImg = styled(Image)`
height: 16rem;
object-fit: cover;
transition: 0.3s;
${Container}:hover & {
    transform: scale(1.05);
}
`

const Wrapper = styled.a`
`

const Content = styled.div`
gap: 1rem;
padding: 1rem 1rem;
display: flex;
flex-direction: column;
`

const Title = styled.div`
${layer2A_SubtitleStyle}
width: 100%;
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
border-radius: 100px 100px 100px 100px;
color: white;
position: absolute;
top: -10%;
left: -10%; 
display: flex;
align-items: center;
justify-content: center;
transition: 0.3s;
box-shadow: -1px -1px 4px 0px rgba(0, 0, 0, 0.50);
cursor: pointer;
z-index: 1000;
${Container}:hover & {
    top: 0;
    left: 0;    
    border-radius: 0px 0px 20px 0px;
}
:hover {
    background-color: var(--color-primary2);
}
`