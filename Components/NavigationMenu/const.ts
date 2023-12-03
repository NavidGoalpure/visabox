import gsap from "gsap";
import { MultiLanguageText } from "Interfaces/Database";
import { DropdownItem } from "./interface";

export enum LanguageKeys {
  Home = "Home",
  Lists = "Lists",
  Occupations = "Occupations",
  Login = "Login",
  Blogs = "Blogs",
  FormsWall = "FormsWall",
  Forms = "Forms",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Home: {
    en: "Home",
    fa: "صفحه اصلی",
    zh: "家",
  },
  Lists: {
    en: "Lists",
    fa: "لیست‌ها",
    zh: "列表",
  },
  Occupations: {
    en: "Skilled Worker Visa",
    fa: "ویزای مهارتی",
    zh: "技术工人签证",
  },
  Login: {
    en: "Sign in",
    fa: "ورود",
    zh: "登入",
  },
  Blogs: {
    en: "Blogs",
    fa: "مقاله ها",
    zh: "博客",
  },
  FormsWall: {
    en: "forms-wall",
    fa: "صفحه فرم ها",
    zh: "形式墙",
  },
  Forms: {
    en: "Forms",
    fa: "فرم ها ‌",
    zh: "形式",
  },
};
export const listsItems: DropdownItem[] = [
  {
    title: {
      en: "Agencies",
      fa: "موسسات مهاجرت",
      zh: "机构",
    },
    href: "/lists/agencies",
  },
  {
    title: {
      en: "Agents",
      fa: "لیست وکلا",
      zh: "代理商",
    },
    href: "/lists/agents",
  },
  {
    title: {
      en: "Naati",
      fa: "لیست مترجمین",
      zh: "Naati",
    },
    href: "/lists/naaties",
  },
  {
    title: {
      en: "Exchanges",
      fa: "لیست صرافی‌ها",
      zh: "交流",
    },
    href: "/lists/exchanges",
  },

  {
    title: {
      en: "Social Network",
      fa: "شبکه های اجتماعی",
      zh: "社交网络",
    },
    href: "/lists/social-pages",
  },
];
export const occupationItems: DropdownItem[] = [
  {
    title: {
      en: "Occupation List",
      fa: "لیست مشاغل",
      zh: "职业清单",
    },
    href: "/occupations",
  },
  {
    title: {
      en: "Assessing Authority",
      fa: "موسسات ارزیابی",
      zh: "评估机构",
    },
    href: "/occupations/assssing-authorities",
  },
  {
    title: { en: "Find university section", fa: "جستجوی سکشن دانشگاه" , zh: "查找大学部分" },
    href: "/occupations/university-section-search",
  },
];
export const FormsItems: DropdownItem[] = [
  {
    title: {
      en: "Request Agent",
      fa: "درخواست وکیل",
      zh: "请求代理",
    },
    href: "/clients/request-agent",
  },
  {
    title: {
      en: "Point Calculator",
      fa: "محاسبه امتیاز مهاجرت",
      zh: "请求代理",
    },
    href: "/clients/point-calculator",
  },
];

export const getGsapTimeLine = ({
  hamburgerAnimationRef,
  popupAnimationRef,
}: {
  hamburgerAnimationRef: React.MutableRefObject<gsap.core.Timeline | undefined>;
  popupAnimationRef: React.MutableRefObject<gsap.core.Timeline | undefined>;
}) => {
  hamburgerAnimationRef.current = gsap
    .timeline({ paused: true })
    .add("start")
    .to(
      "#hamburg",
      {
        duration: 0.2,
        y: 10,
      },
      "start"
    )
    .to(
      `#line1`,
      {
        duration: 0.2,
        y: 6,
      },
      "start"
    )
    .to(
      `#line2`,
      {
        duration: 0.2,
        y: -6,
      },
      "start"
    )
    .to(
      `#line1`,
      {
        duration: 0.1,
        rotate: 45,
        transformOrigin: "50% 50%",
      },
      "+=0.1"
    )

    .to(
      `#line2`,
      {
        duration: 0.1,
        rotate: -45,
        transformOrigin: "50% 50%",
      },
      "-=0.1"
    );
  popupAnimationRef.current = gsap
    .timeline({ paused: true })
    .to("#popup", { x: "100vw", duration: 0.3 }, "-=0.1");
};
