import styled from 'styled-components';
import BlogCardMobile from '../../../Components/Cards/Type1/BlogCards/Mobile'
import PageLayout from 'Components/Layouts/PageContainer';
import BlogCardType1Wide from '../../../Components/Cards/Type1/BlogCards/Desktop/Type1Wide';
import BlogCardType1Slim from '../../../Components/Cards/Type1/BlogCards/Desktop/Type1Slim';
import BlogCardType2Slim from '../../../Components/Cards/Type1/BlogCards/Desktop/Type2Slim';
import BlogCardType2Wide from '../../../Components/Cards/Type1/BlogCards/Desktop/Type2Wide';

function BlogsWall() {
    return (
        <PageLayout>
            <Container>
                <BlogCardMobile />
                <BlogCardType1Wide />
                <BlogCardType1Slim />
                <BlogCardType2Slim />
                <BlogCardType2Wide />
            </Container>
        </PageLayout>
    )
}

export default BlogsWall;

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`