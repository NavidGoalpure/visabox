import { layer2A_SubtitleStyle, layer2A_TextStyle, layer2A_TitleStyle } from 'Styles/Theme/Layers/layer2/style';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
import { BsShare } from 'react-icons/bs';
import styled from 'styled-components';


function BlogCardMobile() {
    return (
        <Container>
            <Wrapper>
                <BlogImg src="https://binsta.dev/api/v1/files/lxIVJdLhgF/transform?format=webp&size=lg&quality=best" alt="image-source" />
                <Content>
                    <Title>آنچه باید درباره اسسمنت یا ارزیابی مدارک در استرالیا بدانیم</Title>
                    <SubTitle>ویزای اسکیل ورکر یا مهارتی سه مرحله دارد که اسسمنت مرحله اول آن است. اسسمنت به معنای ارزیابی است، شما برای شروع فرایند مهاجرت از طریق ویزای اسکیل ورکر ....</SubTitle>
                </Content>
                <ShareBtn>
                    <BsShare />
                </ShareBtn>
            </Wrapper>
        </Container>
    )
}

export default BlogCardMobile;

const Container = styled.div`
margin-top: 5rem;
display: flex;
justify-content: center;
width: 25rem;
height: 27.5rem;
position: relative;
`

const BlogImg = styled.img`
border-radius: 15px;
width: 90%;
height: 50%;
transform: translateY(-30%);
box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.50);
`

const Wrapper = styled.div`
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

const SubTitle = styled.div`
${layer2A_TextStyle}
text-align: Start;
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