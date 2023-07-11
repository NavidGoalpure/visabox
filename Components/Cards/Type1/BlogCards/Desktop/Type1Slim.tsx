import { layer2A_SubtitleStyle, layer2A_TextStyle, layer2A_TitleStyle } from 'Styles/Theme/Layers/layer2/style';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
import { copyContent } from 'Utils';
import { HTMLAttributes } from 'react';
import { BsShare } from 'react-icons/bs';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string;
    desc: string;
    img: string;
    href: string;
}


const BlogCardType1Slim: React.FC<Props> = ({
    title,
    desc,
    img,
    href,
    ...props
}) => {
    return (
        <Container {...props}>
            <Wrapper href={href}>
                <BlogImg src={img} alt="image-source" />
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

export default BlogCardType1Slim;

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
gap: 1rem;
padding-bottom: 1rem;
`

const Wrapper = styled.a`
`

const BlogImg = styled.img`
height: 16rem;
object-fit: cover;
`

const Content = styled.a`
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
transition: 0.7s;
box-shadow: -1px -1px 4px 0px rgba(0, 0, 0, 0.50);
cursor: pointer;
z-index: 1000;
${Container}:hover & {
    top: 0;
    left: 0;    
    border-radius: 0px 0px 20px 0px;
}
`