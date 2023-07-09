import { layer2A_SubtitleStyle, layer2A_TextStyle, layer2A_TitleStyle } from 'Styles/Theme/Layers/layer2/style';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
import { HTMLAttributes } from 'react';
import { BsShare } from 'react-icons/bs';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
    title: string;
    desc: string;
    img: string;
    href: string;
}

const BlogCardType2Slim: React.FC<Props> = ({
    title,
    desc,
    img,
    href,
    ...props
}) => {
    return (
        <Container href={href} {...props}>
            <BlogImg src={img} alt="image-source" />
            <Content>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </Content>
            <ShareBtn>
                <BsShare />
            </ShareBtn>
        </Container>
    )
}

export default BlogCardType2Slim;

const Container = styled.a`
${layer2A_Bg}
display: flex;
justify-content: center;
width: 100%;
height: 50%;
border-radius: 15px;
overflow: hidden;
position: relative;
flex-direction: row-reverse;
gap: 1rem;
`

const BlogImg = styled.img`
width: 30%;
object-fit: cover;
`

const Content = styled.div`
gap: 1rem;
padding: 2rem 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
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
${Container}:hover & {
    top: 0;
    left: 0;    
    border-radius: 0px 0px 20px 0px;
}
`