import { Locations } from 'Interfaces';
import { Status } from 'Interfaces/Database';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { SocialMediaTypes, Socials } from 'Interfaces/Database/Lists/socials';

export const VipSocialMedias: Socials[] = [
  {
    id: 'soc1',
    name: 'مهاجرت تجاری به استرالیا',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'مهاجرت-تجاری-به-استرالیا',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.VIP,
    desc: `گروه بحث و تبادل نظر در مورد ویزاهای سرمایه گذاری و کارآفرینی استرالیا. زیر نظر وکیل رسمی مهاجرت استرالیا، آقای محمد رضا عظیمی.
  `,
    link: 'https://t.me/ShadaBusinessVisaGroup',
    logoUrl: "https://binsta.dev/api/v1/files/myKXD_aopK/transform?format=webp&size=lg&quality=best",
    status: Status.ACTIVE,
  },
  {
    id: 'soc34',
    name: 'Arad Immigration',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'Arad-Immigration',
    link: 'https://t.me/Arad_immigration',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.VIP, //Full_data
    desc: `این گروه جهت پاسخگویی به سوالات شما عزیزان در حوزه ویزا و اقامت استرالیا می باشد. جهت ارتباط با وکیل رسمی مهاجرت سرکار خانم سودابه حریری از راه های زیر با ما در تماس باشید`,
    logoUrl: "https://binsta.dev/api/v1/files/_Lx6raK9eI/transform?format=webp&size=lg&quality=best",
    status: Status.ACTIVE,
  },
  {
    id: 'soc35',
    name: 'Visazone',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'visazone',
    link: 'https://t.me/VisazoneAustralia',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.VIP, //Full_data
    desc: `اخذ انواع ویزای استرالیا با نغمه دانایی وكيل رسمى مهاجرتى عضو MARA با بیش از ١٢ سال تجربه`,
    logoUrl: "https://binsta.dev/api/v1/files/_Pmhp51eym/transform?format=webp&size=lg&quality=best",
    status: Status.ACTIVE,
  },
  {
    id: 'soc36',
    name: 'AzzyImmigration',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'azzyimmigration',
    link: 'https://t.me/azzyimmigration',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.VIP, //Full_data
    desc: `خدمات مهاجرتى و اخذ اقامت استراليا توسط وكيل رسمى مهاجرت`,
    logoUrl: "https://binsta.dev/api/v1/files/HpRV7Xp_1Z/transform?format=webp&size=lg&quality=best",
    status: Status.ACTIVE,
  },
  {
    id: 'soc37',
    name: 'UniqueVisa',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'uniquevisa',
    link: 'https://t.me/uniquevisa',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.VIP, //Full_data
    desc: `مشاوره تخصصی اخذ ویزاهای کارآفرینی، تخصص و مهارت و سایر ویزاهای استرالیا
    زیر نظر وکیل ثبت شده اداره مهاجرت استرالیا (عضو سازمان MARA) انجام میگردد.`,
    logoUrl: "https://binsta.dev/api/v1/files/PaO_vXW-8o/transform?format=webp&size=lg&quality=best",
    status: Status.ACTIVE,
  },
];

////////////
export const NormalSocialMedias: Socials[] = [
  {
    id: 'soc29',
    name: 'گروه بزرگ مهاجرت استرالیا',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'گروه-بزرگ-مهاجرت-استرالیا',
    link: 'https://t.me/c/1204778733/334120',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `ضمن سلام و خوشامدگویی به همه شما بزرگواران عزیز به گروه بزرگ
  مهاجرت نیروی کار ماهر (Skilled Worker) به استرالیا تحت نظر وکیل
  رسمی مارا، از شما دعوت میشه در صورتی که در ابتدای پروسه هستید
  فایل FAQ رو بدقت و کامل مطالعه کنید و جواب بسیاری از سوالات
  خودتون رو ازش می‌گیرید`,
    status: Status.ACTIVE,
  },
  {
    id: 'soc2',
    name: 'ACS - skill assessment',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'acs-skill-assessment',
    link: 'https://t.me/joinchat/BQatsE-ziHhgKXENSdNXCA',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `همه چيز در مورد نحوه اخذ ارزيابي مثبت از سازمان ACS
  زير مجموعه گروه اصلی مهاجرت به استراليا `,
    status: Status.ACTIVE,
  },

  {
    id: 'soc4',
    name: `australia live and work`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'australia-live-and-work',
    link: 'https://t.me/Australia_live_and_work',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `موضوع گروه： جنبه های مختلف زندگی در استرالیا
  لطفا موضوعات مرتبط با پروسه اخذ ویزا و یا مقایسه استرالیا با کشورهای دیگر را در این گروه مطرح نفرمایید.
  قوانین گروه در کانال گروه پین شده است`,
    status: Status.ACTIVE,
  },
  {
    id: 'soc6',
    name: `گروه پرواز استرالیا / کولبر`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'گروه-پرواز-استرالیا-کولبر',
    link: 'https://t.me/+Ij6il037uV9lYTg0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `لینک تمام گروه های استرالیا
  @AUSTRALIAVIP`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc7',
    name: `گروه استرالیا را با هم بگردیم`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'گروه-استرالیا-را-با-هم-بگردیم',
    link: 'https://t.me/+iMSbdyjFzPczNjg0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `این گروه بزرگترین  گروه گردشگری استرالیاست و جهت به اشتراک گذاری تجربیات و لحظات خوش سفر همگروهی ها و راهنمایی عزیزانی که تازه وارد هستند تشکیل شده است.`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc8',
    name: `گروه کاریابی/پیشنهاد کار`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'گروه-کاریابی-پیشنهاد-کار',
    link: 'https://t.me/+aYkIYE1sPdsxMDZk',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `هدف این گروه سهولت در کاریابی آسان و پیشنهاد کاری کاری کارفرمایان ایرانی می باشد.`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc9',
    name: `گروه مدارس استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'گروه-مدارس-استرالیا',
    link: 'https://t.me/+uY9rweSk0BIwYjk0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه والدین مقیم استرالیا در خصوص موضوعات مرتبط با مدارس استرالیا و دغدغه ها و مسائل مرتبط بحث و تبادل ظر می کنند و اعضا یکدیگر را راهنمایی می نمایند.`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc10',
    name: `اطلاعات خودرو استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'اطلاعات-خودرو-استرالیا',
    link: 'https://t.me/+HUYaozJFqao1YjFk',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `اشتراک گذاری تجربیات در مورد خودروهای واقع در بازار استرالیا  ، مراحل اداری و پلاک ، سطح کیفی اتومبیلها و هر آنچه مربوط به خودرو هست ، هدف اصلی این گروه میباشداشتراک گذاری تجربیات در مورد خودروهای واقع در بازار استرالیا  ، مراحل اداری و پلاک ، سطح کیفی اتومبیلها و هر آنچه مربوط به خودرو هست ، هدف اصلی این گروه میباشد`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc11',
    name: `اخذ گواهینامه استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'اخذ-گواهینامه-استرالیا',
    link: 'https://t.me/+Dhex2wIKkPQ4Nzc0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `این گروه در خصوص قوانین رانندگی و اخذ گواهینامه در استرالیا جهت به اشتراک گذاری تجربیات و راهنمیی عزیزان تازه وارد تشکیل شده است.`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc12',
    name: `دوستداران پت`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'دوستداران-پت',
    link: 'https://t.me/+6w8DZIIdYgo0ZWRk',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه ایرانیان مقیم استرالیا در خصوص مسائل مرتبط با نگهداری حیواات خانگی و موضوعات مورد نظرشان بحث و تبادل نظر می نمایند.`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc13',
    name: `فیلم‌سریال ایرانیان استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'فیلم‌سریال-ایرانیان-استرالیا',
    link: 'https://t.me/+_plRNhEiLaU5NDU0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه ایرانیان مقیم استرالیا در مورد فیلم و سریال های مورد علاقه خود بحث و تبادل ظر می کنند`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc14',
    name: `ویزای والدین استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'ویزای-والدین-استرالیا',
    link: 'https://t.me/+gjJAOp2_NNgxYzZk',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه همه مسائل مربوط به ویزای والدین و توریستی ششصد بررسی میشه و همگروهی ها با پرسش و پاسخ هاشون هم دیگه رو کمک و راهنمایی میکنند`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc15',
    name: `مسیر درست از 188تا 888`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'مسیر-درست-از-188تا888',
    link: 'https://t.me/+cYx9n2PIO1RiYzFk',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه مباحث مرتبط با مسیر درست تبدیل ویزای 188 به ویزای 888 مورد برررسی قرار گرفته و افراد با تجربیات خود یکدیگر را راهنمایی می نمایند.`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc16',
    name: `لاج تا اخذ ویزای 188`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'لاج-تا-اخذ-ویزای-188',
    link: 'https://t.me/+jzDvq-ZAsQVkMjBk',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه مباحث مد نظر کسانی که برای ویزای 188 لاج کرده اند و منتظر ویزا هستند مطرح می شود و اعضا مباحث مد نظر خود را به بحث گذاشته به یکدیگر کمک می کنند.`,
    status: Status.DEACTIVE,
  },

  {
    id: 'soc17',
    name: `اسکیل ویزا استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'اسکیل-ویزا-استرالیا',
    link: 'https://t.me/+aTuhMKtcwr9mNDc0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه موارد مرتبط با  اقدام برای اخذ ویزای اسکیل و مهارتی استرالیا  مطرح و اعضا یکدیگر را راهنمایی می نماید`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc18',
    name: `CITIZENSHIP AU`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'citizenship-au',
    link: 'https://t.me/+DwYnwSDlbD0zOWRk',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه تمام مراحل اخذ شهروندی استرالیا و اخذ پاسپورت گفتگو میشه و عزیزان همگروهی تجربیاتشون رو در گروه شر میکنند  `,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc19',
    name: `دانشجویان استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'دانشجویان-استرالیا',
    link: 'https://t.me/+nO176mobSqI1ZmY0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه موارد مرتبط با  اقدام برای اخذ شهروندی مطرح و اعضا یکدیگر را راهنمایی می نماید`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc20',
    name: `بریزبن/گلدکوست QU`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'بریزبن-گلدکوست-qu',
    link: 'https://t.me/+5aDaER0LMEY0YjA0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه همه مسائل مربوط به کار و زندگی در ایالت کوییزلند/ بریزبن  بررسی میشه و همگروهی ها با پرسش و پاسخ هاشون هم دیگه رو کمک و راهنمایی میکنند`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc21',
    name: `استرالیای جنوبی | آدلاید`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'استرالیای-جنوبی-آدلاید',
    link: 'https://t.me/+sPNmFlLqGe5kMzlk',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه همه مسائل مربوط به کار و زندگی در ایالت استرالیا جنوبی/ ادلاید  بررسی میشه و همگروهی ها با پرسش و پاسخ هاشون هم دیگه رو کمک و راهنمایی میکنند`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc22',
    name: `استرالیای غربی | پرث`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'استرالیای-غربی-پرث',
    link: 'https://t.me/+sVlVt_c-9YdjYmI0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه همه مسائل مربوط به کار و زندگی در ایالت استرالیا غربی/پرث  بررسی میشه و همگروهی ها با پرسش و پاسخ هاشون هم دیگه رو کمک و راهنمایی میکنند`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc23',
    name: `ایالت نیوساوث ولز | سیدنی`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'ایالت-نیوساوث-ولز-سیدنی',
    link: 'https://t.me/+IZj61Ggp0Nk1ODVk',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه همه مسائل مربوط به کار و زندگی در ایالت نیو ساوث ولز/سیدنی بررسی میشه و همگروهی ها با پرسش و پاسخ هاشون هم دیگه رو کمک و راهنمایی میکنند`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc24',
    name: `وام و خرید خانه در استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'وام-و-خرید-خانه-در-استرالیا',
    link: 'https://t.me/+TxpP5hYe96w8F381',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `اینجا در مورد خرید خونه و فرصت های سرمایه گذاری در زمینه مسکن صحبت می کنید`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc25',
    name: `"گروه سازمان ارزیاب EA`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'گروه-سازمان-ارزیاب-ea',
    link: 'https://t.me/joinchat/BwP4UUu8_D3hjHpWsu782Q',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `"همه چيز در مورد نحوه اخذ ارزيابي مثبت از سازمان مهندسین
  استرالیا EA"`,
    status: Status.ACTIVE,
  },

  {
    id: 'soc26',
    name: `Persian Aussie Club`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'persian-aussie-club',
    link: 'https://t.me/australiaImmigrate',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `"كارهاى الزامى و ضرورى قبل از ورود به استراليا و كارهاى مربوط به ماه هاى اول ورود
  لطفا كسانى كه در مرحله اخذ دعوتنامه نهايي ،لاج و منتظر ويزا هستند به اين گروه جوين شوند."`,
    status: Status.ACTIVE,
  },
  {
    id: 'soc27',
    name: `تجربیات بانکی استرالیا`,
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'تجربیات-بانکی-استرالیا',
    link: 'https://t.me/+SmYW-H6jfeVmNTc0',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `در این گروه همه مسائل بانکی و مالی در استرالیا بررسی میشه و همگروهی ها با پرسش و پاسخ هاشون هم دیگه رو کمک و راهنمایی میکنند`,
    status: Status.DEACTIVE,
  },
  {
    id: 'soc28',
    name: 'پرستار ماما و پزشک برای استرالیا',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'پرستار-ماما-و-پزشک-برای-استرالیا',
    link: 'https://t.me/australiamd',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `https://t.me/australiamd`,
    status: Status.ACTIVE,
  },
  {
    id: 'soc3',
    name: 'Ch-Lodge',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'ch-lodge',
    link: 'https://t.me/joinchat/AAAAAFYtjSQ59yW1__5cmg',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `Lodge: Australia Visa Apps
  EOI > Invitation > Lodge > Visa > 🇦🇺 So,  make a new life 🤗
  برای عضویت در گروه لاج استرالیا به یکی از ادمین ها☝️پیام دهید.
  در صورتیکه از مرحله دریافت دعوتنامه عبور کردید`,
    status: Status.ACTIVE,
  },
  {
    id: 'soc30',
    name: 'داروسازان استرالیا',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'داروسازان-استرالیا',
    link: 'https://t.me/pharmacyinAustralia',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `تبادل اطلاعات در مورد مسیر رجیستریشن،آزمون‌ها و ویزاهای داروسازان در استرالیا`,
    status: Status.ACTIVE,
  },
  {
    id: 'soc31',
    name: 'مهاجرهاب',
    socialmediaType: SocialMediaTypes.YOUTUBE,
    slug: 'مهاجر-هاب',
    link: 'https://www.youtube.com/@Mohajerhub/featured',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `سلام 👋 من احسانم. سال ۲۰۱۰ با ویزای دانشجویی به استرالیا مهاجرت کردم و در حال حاضر به عنوان برنامه‌نویس ارشد در ملبورن مشغول به کارم    توی این کانال تقریبا هر چیزی که در این مسیر و زندگی روزمره‌ام تجربه کردم رو بدون چشم‌داشتی به اشتراک می‌گذارم. زمان ما این چیزها نبود و امیدوارم به کارتون بیاد و اگر قصد مهاجرت به استرالیا رو دارید در این مسیر کمک‌تون کنه    من وکیل مهاجرتی نیستم. موسسه مهاجرتی هم نمی‌شناسم. اما از عنفوان نوجوانی تولید محتوا رو دوست داشتم و این کار رو به اشکال مختلف مثل نوشتن و عکس گرفتن در وبلاگ، فوتوبلاگ و نشریات وطنی کامپیوترانجام دادم. الانم که هر هفته حداقل یک ویدئو منتشر می‌کنم
ویدئوها شامل مطالب آموزشی و ولاگ میشه. همیشه سعی می‌کنم به مسائل صفر و یک نگاه نکنم و دید منصفانه‌ای داشته باشم. تقریبا تمام چیزهایی که در ویدئوها می‌گم همراه با سند و مدرک و برگرفته از منابع معتبره. من همه‌ی کامنت‌ها رو می‌خونم و جواب می‌دم. اما سوال‌هاتون رو می‌تونید در وبسایت مهاجرهاب هم بپرسید:https://mohajerhub.com`,
    status: Status.ACTIVE,
  },
  {
    id: 'soc32',
    name: 'Mohsen Haji',
    socialmediaType: SocialMediaTypes.YOUTUBE,
    slug: 'Mohsen-Haji',
    link: 'https://www.youtube.com/@MohsenHaji_Au/featured',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `سلام به همه دوستان عزیز و همراهان کانال. اسم من محسن هست. از سال ۲۰۱۲ به همراه همسرم به کشور استرالیا مهاجرت کردیم و از اون موقع هم در شهر زیبای آدلاید زندگی میکنیم. توی این مدت چیزهای خیلی زیادی رو یاد گرفتم و تجربه کردم و هدفم از ایجاد این کانال اینه که همین تجربیات و دانستنی های هر چند اندک ولی با ارزش رو باهاتون به اشتراک بزارم. شاید برای یه عده مناسب باشه و ازش استفاده کنن. 
    مطالب کانال دو بخش اصلی داره. یک بخش مربوط به مباحث کلی مرتبط با مهاجرت هست و یه بخش دیگه در مورد شرایط زندگی در کشور زیبای استرالیا هست که خوب خیلی جا برای بحث و گفتگو داره که امیدوارم بتونم یه چراغهای کوچیکی رو برای اونهایی که قصد اومدن ویا مهاجرت به هر کشوری به خصوص استرالیا رو دارن روشن کنم.
    در آخرهم ازتون میخام که حتما کانال رو سابسکرایب کنید و برای دوستانتون هم بفرستید تا دلگرمی بیشتری برای ادامه کار برای من فراهم کنید. 
    همگی شاد و موفق و سلامت باشید.`,
    status: Status.ACTIVE,
  },
  {
    id: 'soc33',
    name: 'MrMDJ021',
    socialmediaType: SocialMediaTypes.YOUTUBE,
    slug: 'MrMDJ021',
    link: 'https://www.youtube.com/@MrMDJ021/featured',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `سلام و عرض ادب...
    من در حال حاضر در سیدنی استرالیا زندگی می‌کنم و دلیل ایجاد این کانال، به اشتراک گذاشتن تجربیاتم در زمینه مهاجرت، نکات آموزشی، روزمره، گپ خودمونی، چیزهای 
    بامزه و ... هست... امیدوارم دوستانی که افتخار میدن و ویدیوهای من رو می‌بینن خوششون بیاد 
    
    قطعا به مرور زمان ویدیوهای بهتر و حرفه‌ای‌تری باهاتون به اشتراک می‌گذارم... خوشحال میشم اگر 
    نظراتتون و سوالاتتون رو از طریق کامنت یا ایمیل باهام در میون بگذارید 
    ...با تشکر فراوان 
    
    زن زندگی آزادی`,
    status: Status.ACTIVE,
  },
  {
    id: 'soc38',
    name: 'شروع نیمه دوم زندگی',
    socialmediaType: SocialMediaTypes.TELEGRAM,
    slug: 'the-second-half-of-my-life',
    link: 'https://t.me/thesecondhalfofmylife',
    locations: Locations.fa,
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    desc: `کانال من بدون نظم و تابو شکنه
    گاهی چند تا پست پشت هم دارم و گاهی هم روزها ممکنه چیزی نباشه
    به حال دل خودم‌ بستگی داره
    اینجا خود خودمم`,
    status: Status.ACTIVE,
  },
];
