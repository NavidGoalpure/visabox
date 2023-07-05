import { layer2A_SubtitleStyle, layer2A_TextStyle, layer2A_TitleStyle } from 'Styles/Theme/Layers/layer2/style';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
import { BsShare } from 'react-icons/bs';
import styled from 'styled-components';


function BlogCardType2Wide() {
    return (
        <Container>
            <BlogImg src="https://binsta.dev/api/v1/files/z7jW9EIqKf/transform?format=webp&size=lg&quality=best" alt="image-source" />
            <Content>
                <Title>آنچه باید درباره اسسمنت یا ارزیابی مدارک در استرالیا بدانیم</Title>
                <SubTitle>ویزای اسکیل ورکر یا مهارتی سه مرحله دارد که اسسمنت مرحله اول آن است. اسسمنت به معنای ارزیابی است، شما برای شروع فرایند مهاجرت از طریق ویزای اسکیل ورکر ....</SubTitle>
            </Content>
            <ShareBtn>
                <BsShare />
            </ShareBtn>
        </Container>
    )
}

export default BlogCardType2Wide;

const Container = styled.div`
${layer2A_Bg}
display: flex;
justify-content: center;
width: 100%;
height: 40%;
border-radius: 15px;
overflow: hidden;
position: relative;
flex-direction: row-reverse;
gap: 1rem;
`

const BlogImg = styled.img`
width: 25%;
height: 14rem;
object-fit: cover;
`

const Content = styled.div`
gap: 1rem;
padding: 3rem 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Title = styled.div`
${layer2A_SubtitleStyle}
width: 100%;
`

const SubTitle = styled.div`
${layer2A_TextStyle}
text-align: Start;
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