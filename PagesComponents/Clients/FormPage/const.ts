import { Point_Calculator_Fragment } from "Consts/GroqFragments";
import { MultiLanguageText } from "Interfaces/Database";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
  ScoreTitle = "ScoreTitle",
  FullNameLabel = "FullNameLabel",
  ProfileNotCompletedHint = "ProfileNotCompletedHint",
  UserPageNotCompletedHint = "UserPageNotCompletedHint",
  PrintBoxTitle = "PrintBoxTitle",
  PrintBoxDesc = "PrintBoxDesc",
  EditBoxTitle = "EditBoxTitle",
  EditBoxDesc = "EditBoxDesc",
  ShareBoxTitle = "ShareBoxTitle",
  ShareBoxDesc = "ShareBoxDesc",
  copyShareToastMessage = "copyShareToastMessage",
  YesText = "YesText",
  NoText = "NoText",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "$agent Migration Agent | $agent",
    fa: "$agent وکیل مهاجرت ",
    zh: "$agent 移民代理 | $agent",
  },
  SeoDesc: {
    fa: "marabox.com",
    en: "marabox.com",
    zh: "marabox.com",
  },
  //
  ScoreTitle: {
    en: "Score:",
    fa: "امتیاز:",
    zh: "分数：",
  },

  ProfileNotCompletedHint: {
    en: `Bring Your Profile to Life! Add the missing details and make it complete.`,
    fa: `پروفایل خود را زنده کنید! اطلاعات جا مانده را پر و پروفایل خود را کامل کنید.`,
    zh: "让您的个人资料栩栩如生！ 添加缺失的细节并使其完整。",
  },
  UserPageNotCompletedHint: {
    en: `This user has registered information before the new update of "Marabox" form. For this reason, this profile may not be complete.`,
    fa: `            این کاربر قبل از بروزرسانی فرم «ماراباکس» ثبت اطلاعات نموده
    است. به همین دلیل پروفایل او کامل نمیباشد.`,
    zh: "该用户在“Marabox”表单新更新前已注册信息。 因此，此配置文件可能不完整。",
  },
  FullNameLabel: {
    en: "Full Name:",
    fa: "نام و نام خانوادگی:",
    zh: "全名：",
  },
  PrintBoxTitle: {
    en: "Print",
    fa: "پرینت",
    zh: "打印",
  },
  PrintBoxDesc: {
    en: "See Printable version",
    fa: "مشاهده نسخه قابل پرینت.",
    zh: "请参阅打印版本",
  },
  EditBoxTitle: {
    en: "Edit",
    fa: "ویرایش",
    zh: "编辑",
  },
  EditBoxDesc: {
    en: "Edit your information.",
    fa: "اطلاعات خود را ویرایش کنید.",
    zh: "编辑您的信息。",
  },
  ShareBoxTitle: {
    en: "Share",
    fa: "اشتراک گذاری",
    zh: "分享",
  },
  ShareBoxDesc: {
    en: "Share your immigration information with your advisors.",
    fa: "اطلاعات مهاجرتی خود را با مشاوران خود به اشتراک بگذارید.",
    zh: "与您的顾问分享您的移民信息。",
  },
  copyShareToastMessage: {
    en: "Link copied to clipboard",
    fa: "لینک کپی شد",
    zh: "链接已复制到剪贴板。",
  },
  YesText: {
    en: "Yes",
    fa: "بله",
    zh: "是的",
  },
  NoText: {
    en: "No",
    fa: "خیر",
    zh: "不",
  },
};
export const profileResParams = ` 
  ${Point_Calculator_Fragment}
      _id,
      _createdAt,
      country,
      name,
      lastname,
      phone,
      field_of_study,
      current_job,
      is_sharable,
      uni_section,
      avatar,
      email,
      completed_forms
      `;