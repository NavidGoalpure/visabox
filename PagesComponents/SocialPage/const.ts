import { Locations, MultiLanguageText } from "Interfaces";
import { SocialMediaTypes, TelegramGroup } from "./interfaces";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
  PageTitle = "PageTitle",
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
};

////////////
export const SocialMedias: TelegramGroup[] = [
  {
    name: "مهاجرت تجاری به استرالیا",
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "مهاجرت-تجاری-به-استرالیا",
    locations: [Locations.fa],
    desc: `گروه بحث و تبادل نظر در مورد ویزاهای سرمایه گذاری و کارآفرینی استرالیا. زیر نظر وکیل رسمی مهاجرت استرالیا، آقای محمد رضا عظیمی.

www.shadavisa.com
www.shada.com.au
`,
    telegramLink: "https://t.me/ShadaBusinessVisaGroup",
  },
  {
    name: "ACS - skill assessment",
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "acs-skill-assessment",
    telegramLink: "https://t.me/joinchat/BQatsE-ziHhgKXENSdNXCA",
    locations: [Locations.fa],
    desc: `همه چيز در مورد نحوه اخذ ارزيابي مثبت از سازمان ACS
لينك عضويت گروه 
 https://t.me/joinchat/BQatsE-ziHhgKXENSdNXCA

زير مجموعه گروه أصلي مهاجرت به استراليا (Australia, Immigrants and Residents)`,
  },
  {
    name: "پرستار ماما و پزشک برای استرالیا",
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "پرستار-ماما-و-پزشک-برای-استرالیا",
    telegramLink: "https://t.me/australiamd",
    locations: [Locations.fa],
    desc: `https://t.me/australiamd`,
  },
  {
    name: "Ch-Lodge",
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "ch-lodge",
    telegramLink: "https://t.me/joinchat/AAAAAFYtjSQ59yW1__5cmg",
    locations: [Locations.fa],
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
    telegramLink: "https://t.me/Australia_live_and_work",
    locations: [Locations.fa],
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
    telegramLink: "https://t.me/+Ij6il037uV9lYTg0",
    locations: [Locations.fa],
    desc: `لینک همه گروه های استرالیا
@AUSTRALIAVIP`,
  },
  {
    name: `گروه پرواز استرالیا / کولبر`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "گروه-پرواز-استرالیا-کولبر",
    telegramLink: "https://t.me/+Ij6il037uV9lYTg0",
    locations: [Locations.fa],
    desc: `لینک تمام گروه های استرالیا
@AUSTRALIAVIP`,
  },
  {
    name: `گروه استرالیا را با هم بگردیم`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "گروه-استرالیا-را-با-هم-بگردیم",
    telegramLink: "https://t.me/+iMSbdyjFzPczNjg0",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `گروه کاریابی/پیشنهاد کار`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "گروه-کاریابی-پیشنهاد-کار",
    telegramLink: "https://t.me/+aYkIYE1sPdsxMDZk",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `گروه مدارس استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "گروه-مدارس-استرالیا",
    telegramLink: "https://t.me/+uY9rweSk0BIwYjk0",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `اطلاعات خودرو استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "اطلاعات-خودرو-استرالیا",
    telegramLink: "https://t.me/+HUYaozJFqao1YjFk",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `اخذ گواهینامه استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "اخذ-گواهینامه-استرالیا",
    telegramLink: "https://t.me/+Dhex2wIKkPQ4Nzc0",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `دوستداران پت`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "دوستداران-پت",
    telegramLink: "https://t.me/+6w8DZIIdYgo0ZWRk",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `فیلم‌سریال ایرانیان استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "فیلم‌سریال-ایرانیان-استرالیا",
    telegramLink: "https://t.me/+_plRNhEiLaU5NDU0",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `ویزای والدین استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "ویزای-والدین-استرالیا",
    telegramLink: "https://t.me/+gjJAOp2_NNgxYzZk",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `مسیر درست از 188تا 888`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "مسیر-درست-از-188تا888",
    telegramLink: "https://t.me/+cYx9n2PIO1RiYzFk",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `لاج تا اخذ ویزای 188`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "لاج-تا-اخذ-ویزای-188",
    telegramLink: "https://t.me/+jzDvq-ZAsQVkMjBk",
    locations: [Locations.fa],
    desc: ``,
  },
  // {
  //   name: `گروه مناطق ریجینال استرالیا`,
  // socialmediaType:SocialMediaTypes.TELEGRAM,
  //   slug: "",
  //   telegramLink: "https://t.me/+fjFdQk3r3YVkOWFk",
  //   locations: [Locations.fa],
  //   desc: ``,
  // },
  {
    name: `اسکیل ویزا استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "اسکیل-ویزا-استرالیا",
    telegramLink: "https://t.me/+aTuhMKtcwr9mNDc0",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `CITIZENSHIP AU`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "citizenship-au",
    telegramLink: "https://t.me/+DwYnwSDlbD0zOWRk",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `دانشجویان استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "دانشجویان-استرالیا",
    telegramLink: "https://t.me/+nO176mobSqI1ZmY0",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `بریزبن/گلدکوست QU`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "بریزبن-گلدکوست-qu",
    telegramLink: "https://t.me/+5aDaER0LMEY0YjA0",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `استرالیای جنوبی | آدلاید`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "استرالیای-جنوبی-آدلاید",
    telegramLink: "https://t.me/+sPNmFlLqGe5kMzlk",
    locations: [Locations.fa],
    desc: ``,
  },
  {
    name: `استرالیای غربی | پرث`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: "استرالیای-غربی-پرث",
    telegramLink: "https://t.me/+sVlVt_c-9YdjYmI0",
    locations: [Locations.fa],
    desc: ``,
  },
];
