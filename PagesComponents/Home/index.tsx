import Hero from './Hero';
import AgentsSection from './AgentsSection';
import OccupationSection from './OccupationSection';

// این پیج هیچوقت دیده نمیشه، در نکست-کانفیگ تنظیم شده که به صفحه دیگه ای ریدایرکت بشه
const HomeContent: React.FC = () => {
  return (
    <>
      <Hero />
      <AgentsSection />
      <OccupationSection />
    </>
  );
};
export default HomeContent;

///////////////
