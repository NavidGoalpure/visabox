import { Status } from 'Interfaces/Database';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { Exchange } from 'Interfaces/Database/Lists/exchanges';

export const Exchanges: Exchange[] = [
  {
    fullName: { en: 'MoneyMex', fa: 'مانیمکس' },
    desc: {
      en: 'We have great team with great experts. As a successful business we have provided a good environment for our team members so they can assist our customers the best. ',
      fa: 'صرافی مانیمکس یک گروه سرمایه گذاری و مالی مستقل است که از همکاری و مشارکت مالی و حرفه ای در استرالیا شکل گرفته و بر اصول اخلاقی و حرفه ای تجارت و اصول اقتصادی و سودآوری متقابل شرکت و مشتریان پایه گذاری شده است.',
    },
    location: { en: 'Australia', fa: 'استرالیا' },
    contact: {
      email: 'Au@MoneyMex.com',
      phone: ['+61 (3) 9908 3840-9'],
      website: 'https://moneymex.com.au',
      address: { en: '74 Doncaster Rd, Balwyn North VIC 3104' },
    },
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    status: Status.ACTIVE,
    slug: 'moneymex',
    logoUrl:
      'https://www.moneymex.com/Content/business/Default/images/moneymex_logo.png',
  },
  {
    fullName: { en: 'ROSECAP', fa: 'رزکپ' },
    desc: {
      en: 'Transfer your money overseas in a safe, secure and fast way, thanks to our professional team and modern services. We highly recommend trying our services since Rose Exchange is the choice of smart individual and businesses.',
      fa: 'به کمک تیم حرفه ای و خدمات مدرن رٌزکپ، حواله خود را به روشی امن، مطمئن و سریع انجام دهید. فقط یکبار امتحان کنید تا همیشه با ما بمانید! صرافی رٌزکپ همواره انتخاب افراد هوشمند و حرفه‌ای است.',
    },
    location: { en: 'Australia', fa: 'استرالیا' },
    contact: {
      phone: ['61-1300396575+'],
      telegram: 'sarafiaubot@',
      email: 'info@rosecap.com.au',
      instagram: 'rosecap_official',
      website: 'https://rosecap.com.au/',
    },
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    status: Status.ACTIVE,
    slug: 'rosecap',
    logoUrl:
      'https://lh6.googleusercontent.com/-EWGiO5krhRM/AAAAAAAAAAI/AAAAAAAAAAA/4L0fxrrHYCs/s160-c-k-mo/photo.jpg',
  },
  {
    fullName: { en: 'Ashena', fa: 'آشنا' },
    desc: {
      en: `At the beginning of 2022, Ashna exchange has started its activity in Australia and in the city of Sydney with the support of an experienced, expert and skilled team in the field of buying and selling and currency transfers between countries.

Ashna, one of the most reliable exchanges in Australia, with the name ASHENA MONEY EXCHANGE PTY LTD and ACN: 658 923 758, is legally registered and under the supervision of the Australian Money Laundering Organization (ASTERC) with the number IND 100805100-001 and has official licenses to operate in the field of money transfer. and financial transfers to all countries.

Ashna Exchange has started its activity with the aim of providing the best services in the shortest time to you, dear compatriots, and is doing its best for this purpose.`,
      fa: `صرافی آشنا در ابتدای سال 2022 به پشتوانه یک تیم با تجربه، متخصص و ماهر در زمینه خرید و فروش و انتقالات ارزی بین کشورها فعالیت خود را در استرالیا و در شهر سیدنی آغاز نموده است.

آشنا،یکی از معتبرترین صرافی های استرالیا با نام  ASHENA  MONEY  EXCHANGE  PTY  LTD و  ACN:  658 923 758    به صورت قانونی ثبت شده و تحت نظارت سازمان پول شویی استرالیا (آسترک) با شماره IND 100805100-001  دارای مجوز های رسمی فعالیت در زمینه نقل و انتقالات مالی به تمام کشورها می باشد.

صرافی آشنا با هدف ارائه بهترین خدمات در کمترین زمان به شما هموطنان عزیز فعالیت خود را شروع کرده و تمام تلاش خود را به این منظور دارد`,
    },
    location: { en: 'Australia', fa: 'استرالیا' },
    contact: {
      telegram: '@sarrafiashena',
      instagram: 'ashena_sarrafi',
      email: 'ashena.exchange@gmali.com',
      website: 'https://ashenaexchange.com/',
    },
    logoUrl:
      'https://ashenaexchange.com/assets/images/62fde46ecfd4c-newlogo-site.png',
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    status: Status.ACTIVE,
    slug: 'ashena',
  },
  {
    fullName: { en: 'Baloch', fa: 'بلوچ' },
    desc: {
      en: 'Transfer your money overseas in a safe, secure and fast way, thanks to our professional team and modern services. We highly recommend trying our services since Rose Exchange is the choice of smart individual and businesses.',
      fa: 'به کمک تیم حرفه ای و خدمات مدرن رٌزکپ، حواله خود را به روشی امن، مطمئن و سریع انجام دهید. فقط یکبار امتحان کنید تا همیشه با ما بمانید! صرافی رٌزکپ همواره انتخاب افراد هوشمند و حرفه‌ای است.',
    },
    location: { en: 'Australia', fa: 'استرالیا' },
    contact: {
      phone: ['+61-406182742'],
      telegram: '',
      email: 'info@baloch.com.au',
      instagram: 'baloch_exchange',
      website: 'https://www.baloch.com.au',
    },
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    status: Status.ACTIVE,
    slug: 'baloch',
    logoUrl:
      'https://www.baloch.com.au/wp-content/uploads/2022/10/baloch_en_logo.png',
  },
];
