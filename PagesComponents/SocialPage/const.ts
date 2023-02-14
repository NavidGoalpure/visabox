import { Locations, MultiLanguageText } from "Interfaces";
import { SocialMediaTypes, TelegramGroup } from "./interfaces";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
  PageTitle = "PageTitle",
  Join = "Join",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "Skills Assessment And Assessing Authorities | Mara Box",
    fa: "لیست موسسات ارزیابی مدارک و مهارت های استرالیا | مارا باکس",
  },
  SeoDesc: {
    fa: "فهرست کامل مشاغل موسسات ارزیابی مدارک و مهارت های استرالیا به همراه آدرس و اطلاعات تماس",
    en: "See the full skills assessment and assessing authorities List & find their address, email, website and etc.",
  },
  //
  PageTitle: {
    fa: "لیست موسسات ارزیابی مدارک و مهارت های استرالیا",
    en: "Assessing authorities",
  },
  Join: {
    fa: "عضویت",
    en: "Join",
  },
};

////////////
export const SocialMedias: TelegramGroup[] = [
  {
    name: "مهاجرت تجاری به استرالیا",
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "مهاجرت-تجاری-به-استرالیا",
    locations: Locations.fa,
    isFeatured: true,
    desc: `گروه بحث و تبادل نظر در مورد ویزاهای سرمایه گذاری و کارآفرینی استرالیا. زیر نظر وکیل رسمی مهاجرت استرالیا، آقای محمد رضا عظیمی.

www.shadavisa.com
www.shada.com.au
`,
    link: "https://t.me/ShadaBusinessVisaGroup",
  },
  {
    name: "ACS - skill assessment",
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "acs-skill-assessment",
    link: "https://t.me/joinchat/BQatsE-ziHhgKXENSdNXCA",
    locations: Locations.fa,
    isFeatured: false,
    desc: `همه چيز در مورد نحوه اخذ ارزيابي مثبت از سازمان ACS
لينك عضويت گروه 
 https://t.me/joinchat/BQatsE-ziHhgKXENSdNXCA

زير مجموعه گروه أصلي مهاجرت به استراليا (Australia, Immigrants and Residents)`,
  },
  {
    name: "پرستار ماما و پزشک برای استرالیا",
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "پرستار-ماما-و-پزشک-برای-استرالیا",
    link: "https://t.me/australiamd",
    locations: Locations.fa,
    isFeatured: false,
    desc: `https://t.me/australiamd`,
  },
  {
    name: "Ch-Lodge",
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "ch-lodge",
    link: "https://t.me/joinchat/AAAAAFYtjSQ59yW1__5cmg",
    locations: Locations.fa,
    isFeatured: false,
    desc: `Lodge: Australia Visa Apps
EOI > Invitation > Lodge > Visa > 🇦🇺 So,  make a new life 🤗

@MeisamMT
@MeysamTeh
@abrajabpour
برای عضویت در گروه لاج استرالیا به یکی از ادمین ها☝️پیام دهید.
در صورتیکه از مرحله دریافت دعوتنامه عبور کردید`,
  },
  {
    name: `australia live and work`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "australia-live-and-work",
    link: "https://t.me/Australia_live_and_work",
    locations: Locations.fa,
    isFeatured: false,
    desc: `موضوع گروه： جنبه های مختلف زندگی در استرالیا

لطفا موضوعات مرتبط با پروسه اخذ ویزا و یا مقایسه استرالیا با کشورهای دیگر را در این گروه مطرح نفرمایید.
@Australia_live_and_work

قوانین گروه در کانال گروه پین شده است：
@WeAustralia`,
  },
  {
    name: `فرهنگ آزی/کار/زندگیAU`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "فرهنگ-آزی-کار-زندگیau",
    link: "https://t.me/+Ij6il037uV9lYTg0",
    locations: Locations.fa,
    isFeatured: false,
    desc: `لینک همه گروه های استرالیا
@AUSTRALIAVIP`,
  },
  {
    name: `گروه پرواز استرالیا / کولبر`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "گروه-پرواز-استرالیا-کولبر",
    link: "https://t.me/+Ij6il037uV9lYTg0",
    locations: Locations.fa,
    isFeatured: false,
    desc: `لینک تمام گروه های استرالیا
@AUSTRALIAVIP`,
  },
  {
    name: `گروه استرالیا را با هم بگردیم`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "گروه-استرالیا-را-با-هم-بگردیم",
    link: "https://t.me/+iMSbdyjFzPczNjg0",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `گروه کاریابی/پیشنهاد کار`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "گروه-کاریابی-پیشنهاد-کار",
    link: "https://t.me/+aYkIYE1sPdsxMDZk",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `گروه مدارس استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "گروه-مدارس-استرالیا",
    link: "https://t.me/+uY9rweSk0BIwYjk0",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `اطلاعات خودرو استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "اطلاعات-خودرو-استرالیا",
    link: "https://t.me/+HUYaozJFqao1YjFk",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `اخذ گواهینامه استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "اخذ-گواهینامه-استرالیا",
    link: "https://t.me/+Dhex2wIKkPQ4Nzc0",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `دوستداران پت`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "دوستداران-پت",
    link: "https://t.me/+6w8DZIIdYgo0ZWRk",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `فیلم‌سریال ایرانیان استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "فیلم‌سریال-ایرانیان-استرالیا",
    link: "https://t.me/+_plRNhEiLaU5NDU0",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `ویزای والدین استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "ویزای-والدین-استرالیا",
    link: "https://t.me/+gjJAOp2_NNgxYzZk",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `مسیر درست از 188تا 888`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "مسیر-درست-از-188تا888",
    link: "https://t.me/+cYx9n2PIO1RiYzFk",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `لاج تا اخذ ویزای 188`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "لاج-تا-اخذ-ویزای-188",
    link: "https://t.me/+jzDvq-ZAsQVkMjBk",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  // {
  //   name: `گروه مناطق ریجینال استرالیا`,
  // socialmediaType:SocialMediaTypes.TELEGRAM,
  //   slug: "",
  //   link: "https://t.me/+fjFdQk3r3YVkOWFk",
  //   locations: Locations.fa,
  // isFeatured:false,
  //   desc: ``,
  // },
  {
    name: `اسکیل ویزا استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "اسکیل-ویزا-استرالیا",
    link: "https://t.me/+aTuhMKtcwr9mNDc0",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `CITIZENSHIP AU`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "citizenship-au",
    link: "https://t.me/+DwYnwSDlbD0zOWRk",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `دانشجویان استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "دانشجویان-استرالیا",
    link: "https://t.me/+nO176mobSqI1ZmY0",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `بریزبن/گلدکوست QU`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "بریزبن-گلدکوست-qu",
    link: "https://t.me/+5aDaER0LMEY0YjA0",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `استرالیای جنوبی | آدلاید`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "استرالیای-جنوبی-آدلاید",
    link: "https://t.me/+sPNmFlLqGe5kMzlk",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
  {
    name: `استرالیای غربی | پرث`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "استرالیای-غربی-پرث",
    link: "https://t.me/+sVlVt_c-9YdjYmI0",
    locations: Locations.fa,
    isFeatured: false,
    desc: ``,
  },
];
