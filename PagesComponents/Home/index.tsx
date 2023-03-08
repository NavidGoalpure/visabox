import Hero from './Hero';
import LawyersSection from './LawyersSection';
import OccupationSection from './OccupationSection';

// این پیج هیچوقت دیده نمیشه، در نکست-کانفیگ تنظیم شده که به صفحه دیگه ای ریدایرکت بشه
const HomeContent: React.FC = () => {
  return (
    <>
      <Hero />
      <LawyersSection />
      <OccupationSection />
    </>
  );
};
export default HomeContent;

///////////////
