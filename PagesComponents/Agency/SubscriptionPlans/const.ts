import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  copyGmailToastMessage = 'copyGmailToastMessage',
  HeroTitle = 'HeroTitle',
  HeroDesc = 'HeroDesc',
  MobileHero = 'MobileHero',
  BetterSeenInAgentPages_Title = 'BetterSeenInAgentPages_Title',
  BetterSeenInAgentPages_Desc = 'BetterSeenInAgentPages_Desc',
  ViewAgentsPage = 'ViewAgentsPage',
  BetterSeenInOccupationsPages_Title = 'BetterSeenInOccupationsPages_Title',
  BetterSeenInOccupationsPages_Desc = 'BetterSeenInOccupationsPages_Desc',
  PriceTable_Title = 'PriceTable_Title',
  AccessToFormsWall_Title = 'AccessToFormsWall_Title',
  AccessToFormsWall_Desc = 'AccessToFormsWall_Desc',
  PriceTable_Subtitle = 'PriceTable_Subtitle',
  PriceTable_Desc = 'PriceTable_Desc',
  ContactUs = 'ContactUs',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Sponsership of Mara Agents in our site | Mara Box',
    fa: 'اسپانسر شوید | مارا باکس',
    zh: '我们网站的律师赞助| Mara Box',
  },
  SeoDesc: {
    fa: 'اسپانسر ماراباکس شدن چگونه می‌تواند به کسب و کار مهاجرتی کمک کند',
    en: 'In this page we show you the benefits of buying our vip account',
    zh: '在此页面中，我们向您展示购买 VIP 帐户的好处',
  },
  copyGmailToastMessage: {
    en: 'Copied Gmail number to clipboard',
    zh: '已将 Gmail 号码复制到剪贴板',
    fa: 'ایمیل در حافظه کپی شد',
  },
  HeroTitle: {
    en: 'Increase Your Customers',
    fa: 'افزایش مشتریان',
    zh: '增加您的客户',
  },
  MobileHero: {
    en: `Be&nbsp;
     In The&nbsp;
            <span>Right</span>
            &nbsp;Place`,
    fa: `در جای&nbsp;
            <span>درست</span>
            &nbsp;باش`,
    zh: `代替 &nbsp; <span>右</span> &nbsp;是`,
  },

  HeroDesc: {
    en: 'Marabox has more than <span> 2,500 </span> monthly users who are searching for migration to Australia, making Marabox a suitable platform for finding new clients.',
    fa: 'ماراباکس ماهانه بیش از <span> 2,500 </span>  کاربر دارد که در جستجوی مهاجرت به استرالیا هستند و این واقعیت، ماراباکس را به یک پلتفرم ایده‌آل برای یافتن مشتریان جدید تبدیل کرده است.',
    zh: 'Marabox 每月有超过 2,000 名寻求移民澳大利亚的用户，这使得 Marabox 成为寻找新客户的合适平台。',
  },
  BetterSeenInAgentPages_Title: {
    en: `Better Visibility on the <span>Mara Agents</span> Page.`,
    fa: 'موقعیت بهتر در صفحه <span>وکلای مهاجرت</span>',
    zh: '在移民律师页面上获得更好的可见性',
  },
  BetterSeenInAgentPages_Desc: {
    en: 'The list of all Mara Agents is available on Marabox. By purchasing a <span>Silver</span> Marabox agent account, you will have a better position and a more attractive display compared to your competitors.',
    fa: `لیست تمامی وکلای مهاجرت ایرانی که دارای پروانه مارا هستند, در
              ماراباکس موجود است. با خرید اکانت <span>نقره ای</span> وکلای ماراباکس
              نسبت به رقبای خود از جایگاه بهتر و نحوه نمایش زیباتری برخوردار
              خواهید شد.`,
    zh: '所有 Mara 特工的列表可在 Marabox 上找到。 通过购买“特殊”Marabox 律师帐户，与竞争对手相比，您将拥有更好的地位和更具吸引力的展示。',
  },
  ViewAgentsPage: {
    en: `View the Agents Page`,
    fa: 'مشاهده صفحه وکلای مارا',
    zh: '查看马拉代理页面',
  },
  BetterSeenInOccupationsPages_Title: {
    en: 'Promote on the <span>Occupations List</span> Page',
    fa: 'معرفیظ در صفحه <span>لیست مشاغل</span>',
    zh: '职业列表页面的广告',
  },
  BetterSeenInOccupationsPages_Desc: {
    en: `By purchasing a <span>Gold</span> Marabox agent account, you can showcase your services on the dedicated page for each job. In this scenario, a user exploring the requirements of a specific occupation will become familiar with your services on that occupation's page`,
    fa: 'با خرید <span>اکانت نقره ای </span>وکلا در ماراباکس، می‌توانید تبلیغات خود را در صفحه اختصاصی هر شغل نمایش دهید. در این حالت، کاربری که در حال بررسی شرایط یک شغل خاص می‌باشد، با خدمات شما در صفحه همان کد شغلی آشنا خواهد شد.',
    zh: '在职业列表页面上获得更好的可见性',
  },
  ContactUs: {
    en: `If you're interested in having a <span>Special</span> Marabox agent account, please get in touch with us through the following methods.`,
    fa: `  اگر مایل هستید که <span>اکانت</span> ویژه وکلای ماراباکس را داشته
              باشید, از راه های زیر با ما در ارتباط باشید.`,
    zh: '如果您有兴趣拥有Marabox特惠代理账户，请通过以下方式与我们联系。',
  },
  AccessToFormsWall_Title: {
    en: 'Access Client Forms on the <span>Forms Wall</span> Page',
    fa: 'دسترسی به اطلاعات <span>متقاضیان مهاجرت</span>',
    zh: '访问表格墙页面上的客户表格',
  },
  AccessToFormsWall_Desc: {
    en: `Every month, numerous immigration applicants fill out various forms on the Mara Box website, eagerly anticipating contact from immigration agents.
     With the purchase of a <span>Diamond</span> account, you will gain exclusive access to these forms and the associated contact information.`,
    fa: 'هر ماه، ده ها فرم  در سایت مارا باکس توسط متقاضیان مهاجرت پر می‌شود. این افراد منتظر تماس از طرف وکلای مهاجرت هستند. با خرید اکانت <span>الماس</span> به  این فرم ها و اطلاعات تماس آنها دسترسی خواهید داشت.',
    zh: '每个月都有无数移民申请人在 Mara Box 网站上填写各种表格，热切期待移民律师的联系。 购买“钻石”帐户后，您将获得对这些表格和相关联系信息的独占访问权。',
  },
  PriceTable_Title: {
    en: 'Ready To Purchase?',
    fa: 'سبد قیمت',
    zh: '准备购买了吗？',
  },
  PriceTable_Subtitle: {
    en: 'Find the Perfect Plan for You.',
    fa: 'بهترین پلن را برای بیزینس خود انتخاب کنید.',
    zh: '找到最适合您的计划',
  },
  PriceTable_Desc: {
    en: 'The prices indicated on the cards are per month. Opt for an annual subscription on any plan to enjoy a <span>25%</span> discount.',
    fa: 'قیمت‌های اعلام شده برای هر کارت، به صورت ماهیانه می‌باشند. با انتخاب اشتراک سالانه برای هر یک از طرح‌ها، شما می‌توانید از <span>25%</span> تخفیف بهره‌مند شوید.',
    zh: '卡片上显示的价格是每月的价格。 选择任何计划的年度订阅均可享受 25% 的折扣',
  },
};
