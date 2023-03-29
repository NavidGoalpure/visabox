import { Status } from "Interfaces";
import { Exchange } from "Interfaces/Businesses/exchanges";

export const Exchanges: Exchange[] = [
  {
    fullName: { en: "MoneyMex", fa: "مانیمکس" },
    desc: {
      en: "We have great team with great experts. As a successful business we have provided a good environment for our team members so they can assist our customers the best. ",
      fa: "صرافی مانیمکس یک گروه سرمایه گذاری و مالی مستقل است که از همکاری و مشارکت مالی و حرفه ای در استرالیا شکل گرفته و بر اصول اخلاقی و حرفه ای تجارت و اصول اقتصادی و سودآوری متقابل شرکت و مشتریان پایه گذاری شده است.",
    },
    location: { en: "Australia", fa: "استرالیا" },
    contact: {
      email: "Au@MoneyMex.com",
      phone: ["+61 (3) 9908 3840-9"],
      website: "https://moneymex.com.au",
      address: { en: "74 Doncaster Rd, Balwyn North VIC 3104" },
    },
    isFeatured: false,
    status: Status.ACTIVE,
    slug: "moneymex",
    hasImage: true,
  },
  {
    fullName: { en: "ROSECAP", fa: "رزکپ" },
    desc: {
      en: "Transfer your money overseas in a safe, secure and fast way, thanks to our professional team and modern services. We highly recommend trying our services since Rose Exchange is the choice of smart individual and businesses.",
      fa: "به کمک تیم حرفه ای و خدمات مدرن رٌزکپ، حواله خود را به روشی امن، مطمئن و سریع انجام دهید. فقط یکبار امتحان کنید تا همیشه با ما بمانید! صرافی رٌزکپ همواره انتخاب افراد هوشمند و حرفه‌ای است.",
    },
    location: { en: "Australia", fa: "استرالیا" },
    contact: {
      phone: ["61-1300396575+"],
      telegram: "sarafiaubot@",
      email: "info@rosecap.com.au",
      instagram: "rosecap_official",
      website: "https://rosecap.com.au/",
    },
    isFeatured: false,
    status: Status.ACTIVE,
    slug: "rosecap",
    hasImage: true,
  },
  {
    fullName: { en: "Ashena", fa: "آشنا" },
    desc: {
      en: "Please contact us before any transfer.",
      fa: "لطفا قبل از هر گونه انتقالی با ما تماس بگیرید.",
    },
    location: { en: "Australia", fa: "استرالیا" },
    contact: {
      telegram: "@sarrafiashena",
      instagram: "ashena_sarrafi",
      email: "ashena.exchange@gmali.com",
      website: "https://ashenaexchange.com/",
    },
    hasImage: false,
    isFeatured: false,
    status: Status.ACTIVE,
    slug: "ashena",
  },
];
