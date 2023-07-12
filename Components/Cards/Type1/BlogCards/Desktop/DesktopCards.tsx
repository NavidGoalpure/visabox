import styled from 'styled-components';
import BlogCardType1Wide from './Type1Wide';
import BlogCardType1Slim from './Type1Slim';
import BlogCardType2Slim from './Type2Slim';
import BlogCardType2Wide from './Type2Wide';
import { Layer1_SubtitleStyle, Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { useLocale } from 'Hooks/useLocale';


function DesktopCards() {
    const { locale } = useLocale();
    return (
        <Container>
            <Title>
                بلاگ های مهاجرت
            </Title>
            <Subtitle>
                به صفحه وبلاگ های ما خوش آمدید، جایی که ما اطلاعات، نکات و اخبار مربوط به مهاجرت خود را به اشتراک می گذاریم. ما می دانیم که مهاجرت می تواند طاقت فرسا باشد، به همین دلیل تلاش می کنم اطلاعات را به روز انجام دهیم، نکات مفید و بینش های تخصصی را در اختیار شما قرار دهید.
            </Subtitle>
            <ThreeItemWrapper>
                <StyledBlogCardType2Slim
                    title='آنچه باید در مورد سازمانهای ارزیاب استرالیا بدانیم'
                    desc='
                    سازمان ارزیابی مدارک VETASSESS استرالیا، طیف وسیعی از رشته های حرفه ای را معادل سازی و ارزشیابی می کند. . مشاغل مرتبط با حوزه ورزش ، با حوزه مارکتینگ، با حوزه کشاورزی، مدیران و رشته هایی مثل میکروبیولوژی، بیوشیمی و خیلی رشته های دیگر را  سازمان وت اسس ارزیابی می کند. در مورد سازمان وت اسس شما برای شروع کار نیازی به نمره زبان ندارید .
                    اگر عبارت   VETASSESS OCCUPATION LIST  را در گوگل سرچ بکنید ،  لینکی  را می بابید که می توانید در آن شرایط و الزامات هر شغل را که تحت این سازمان اسس می شود، مشاهده کنید.
                    سازمان VETASSESS مشاغل را بر اساس سطح تحصیلات مورد نیازشان ، به پنج گروه تقسیم می کند'
                    img='https://binsta.dev/api/v1/files/Qdt-lai_Fs/transform?format=webp&size=lg&quality=best'
                    href={`/${locale}/blog/evaluating-organizations`} />

                <StyledBlogCardType2SlimBelow
                    title='آنچه باید درباره اسسمنت یا ارزیابی مدارک در استرالیا بدانیم'
                    desc='
                    ویزای اسکیل ورکر یا مهارتی سه مرحله دارد که اسسمنت مرحله اول آن است. اسسمنت به معنای ارزیابی است، شما برای شروع فرایند مهاجرت از طریق ویزای اسکیل ورکر ابتدا لازم است اسسمنت یا ارزیابی مثبت بگیرد. بنابراین با توجه به رزومه و تحصیلات و سابقه کاریتان اسسمنت مثبت می گیرید. معمولا  با حداقل 2 سال  تحصیلات دانشگاهی امکان مورد اسس قرار گرفتن  مدارک و سوابق وجود دارد.  هر سازمان ارزیاب یک سری مدارک نیاز دارد که طبق چک لیست خاص خودش تعریف شده است و مدارک باید طبق همان چک لیست و بر اساس استاندارد های لازم تهیه و تنظیم شود ، که با ضریب بالا امکان دریافت اسسمنت مثبت وجود داشته باشد . شما می توانید سابقه کار خود را به صورت تمام وقت یا پاره وقت ارائه دهید، تنها شرط آن این است که  حداقل 20 ساعت در هفته کار کرده باشید  و بابتش حقوق دریافت کرده باشید ، تا بتوانید آن را به عنوان سابقه کار ارائه دهید .همچنین موضوع مورد توجه این است که ارائه سابقه کار بسته به نوع کد شغلی انتخابی می تواند متفاوت باشد. در مورد شغلهایی که وجود لیسانس مرتبط یا غیر مرتبط برای آنها الزامی است ، ارائه سابقه کار الزاما بعد از اخذ مدرک لیسانس ارائه می شود. بهتر است بدانید که بعضی از رشته ها توسط دو سازمان ارزیاب ارزیابی می شوند، که شما می توانید انتخاب کنید اسسمنت را  از کدام سازمان اخذ کنید'
                    img='https://binsta.dev/api/v1/files/Jbb2xZFcyX/transform?format=webp&size=lg&quality=best'
                    href={`/${locale}/blog/evaluation-of-documents-in-australia`} />

                <StyledBlogCardType1Slim
                    title='قدم به قدم تا ویزای اسکیل ورکر (مهارتی)'
                    desc='مهاجرت به استرالیا، از طریق ویزای مهارتی یا اسکیل ورکر، طرفداران زیادی دارد، با توجه به اینکه بسیاری از واجدین شرایط این ویزا ، در ابتدای کار با  این سوال مواجه هستند  که از کجا باید شروع کنند و چه مسیری پیش رویشان است، ما در اینجا بر آن شدیم تا به زبانی ساده، مراحل و شرایط مهاجرت به استرالیا از طریق ویزای مهارتی را توضیح دهیم'
                    img='https://binsta.dev/api/v1/files/wVuNNAlgop/transform?format=webp&size=lg&quality=best'
                    href={`/${locale}/blog/getting-skilled-worker-visa`} />
            </ThreeItemWrapper>
            <TwoItemWrapper>
                <StyledBlogCardType1Wide
                    title='نمره زبان  و ویزای مهارتی یا اسکیل ورکر'
                    desc=' آزمونهای زبان مورد تایید سازمان مهاجرت استرالیا جهت اقدام برای ویزاهای مختلف شامل :IELTS, PTE,TOEFL, CAE, OET می باشد. توضیحات هر یک از این آزمونها به شرح ذیل است:'
                    img='https://binsta.dev/api/v1/files/z7jW9EIqKf/transform?format=webp&size=lg&quality=best'
                    href={`/${locale}/blog/Language-score-and-skilled-worker-visa`} />
                <StyledBlogCardType1WideLeft
                    title='ویزای مهارتی استرالیا (Skilled worker)'
                    desc='استرالیا به دلیل کیفیت بالای زندگی، فرهنگ متنوع و فرصت‌های شغلی فراوان، مقصدی محبوب برای مهاجران از سراسر جهان است. در مطلب پیش رو می خواهیم ، مهاجرت به استرالیا از طریق تخصص‭ ‬با‭ ‬ویزای مهارتی استرالیا یا ویزای تخصصی استرالیا ‬از‭ ‬متداول‌ترین‭ ‬روش‌های‭ ‬مهاجرت‭ ‬به‭ ‬استرالیا‭ ‬می‌باشد‭ ‬.‬روش مهاجرتی اسکیل ورکر یا مهارتی یک سیستم امتیازی است که در آن افراد متقاضی کار در استرالیا، بر اساس شرایط سنی، سطح زبان، سوابق کاری و میزان تحصیلات خود برای دریافت ویزای کاری واجد شرایط می شوند. این برنامه مهاجرتی به افراد ماهر یا خانواده‌هایی که قصد مهاجرت دائمی به استرالیا را دارند کمک می کند تا کمبود نیروی حرفه‌ای در این کشور را تکمیل نمایند.
                 شرایط اختصاصی دریافت ویزای مهارتی برای هر رشته متفاوت است ، اما شرایط عمو‌می دریافت ویزای مهارتی شامل موارد زیر می‌شود'
                    img='https://binsta.dev/api/v1/files/A-YzruQXR1/transform?format=webp&size=lg&quality=best'
                    href={`/${locale}/blog/skilled-worker`} />
            </TwoItemWrapper>
        </Container>
    )
}

export default DesktopCards;

const Container = styled.div`
width: 100%;
`

const Title = styled.div`
${Layer1_TitleStyle}
`

const Subtitle = styled.div`
${Layer1_SubtitleStyle}
`

const ThreeItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 1rem 30%;
  grid-template-rows: 0.48fr 1rem 0.48fr;
`

// const First = styled.div`
// display: flex;
// gap: 2rem;
// flex-direction: row-reverse;
// `

// const Leftside = styled.div`
// display: flex;
// flex-direction: column;
// gap: 2rem;
// `

const StyledBlogCardType2Slim = styled(BlogCardType2Slim)`
height: 100% !important;
`

const StyledBlogCardType2SlimBelow = styled(StyledBlogCardType2Slim)`
grid-row-start: 3;
`

const StyledBlogCardType1Slim = styled(BlogCardType1Slim)`
grid-row-start: 1;
grid-row-end: 4;
grid-column-start: 3;
`

const StyledBlogCardType1Wide = styled(BlogCardType1Wide)`
width: 100% !important;
`

const StyledBlogCardType1WideLeft = styled(StyledBlogCardType1Wide)`
grid-column-start: 3;
`

const TwoItemWrapper = styled.div`
display: grid;
grid-template-columns: 50% 1rem 50%;
grid-template-rows: 1fr;
`