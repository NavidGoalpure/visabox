import { Locations } from 'Interfaces';
import { Status } from 'Interfaces/Database';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { Agent } from 'Interfaces/Database/Lists/agents';

export const Agents: Agent[] = [
  {
    id: 'agt1',
    name: { en: 'Mohammad Azimi', fa: 'محمد عظیمی' },
    slug: 'mohammad-azimi',
    desc: {
      en: `Mohammad is the principal migration agent in Shada Migration and Education Services.
      As an Australian qualified education agent, he holds a Bachelor Degree in English Language Translation and a Graduate Certificate in Migration Law from the Australian National University. Mohammad is fluent in spoken and written Farsi, Dari and English, and is an accredited and licensed NAATI Persian translator. NAATI (The National Accreditation Authority for Translators and Interpreters) is the national standards and accreditation body for translators and interpreters in Australia.
      Mohammad is an active member of Migration Alliance, the professional associations for Australian migration service providers. He has worked as a tour guide for overseas visitors throughout Iran and has a heartfelt understanding of his native country, Iran.
      Between 1997 and 1999, he was an English Teacher at both the Open Education Centre of Azad University and the National Organisation for Development of Brilliant Talents, in Tehran. In both Iran and Australia, Mohammad has worked as a translator and has five publications to his credit.
      Mohammad has extensive experiences in the employment sector and community services in Australia and he has worked as an employment consultant for Mission Australia for 3 years. He was appointed as a representative of Mission Australia in Campsie Centrelink to helping the long-term unemployed and disadvantaged youth back into work.
      From 2001 to 2006, he was the Iranian Correspondent for Archaeological Diggings, Australia's foremost Archaeological magazine. Between 2006 and 2008 he was a Journalist, where he contributed stories, essays, and articles about the Iranian community in Australia.
      He also owns and manages Shada Migration and Education Services.
      website: 'https://www.shada.com.au',
Spoken Languages: English; Persian; Dari.`,
      fa: `
      <div>
      <p>محمد عظیمی نماینده اصلی مهاجرت در خدمات مهاجرت و آموزش شادا است.</p>

      <p>او به عنوان یک کارگزار آموزشی واجد شرایط استرالیا، دارای مدرک لیسانس در مترجمی زبان انگلیسی و مدرک تحصیلات تکمیلی در قانون مهاجرت از دانشگاه ملی استرالیا است. محمد عظیمی به زبان های گفتاری و نوشتاری فارسی، دری و انگلیسی مسلط است و مترجم فارسی نااتی معتبر و دارای مجوز است. NAATI (مرجع ملی اعتباربخشی مترجمان و مترجمان) استانداردهای ملی و سازمان اعتباربخشی مترجمان و مترجمان در استرالیا است.</p>

      <p>محمد عظیمی یکی از اعضای فعال Migration Alliance، انجمن های حرفه ای ارائه دهندگان خدمات مهاجرت استرالیا است. او به عنوان راهنمای تور برای بازدیدکنندگان خارج از کشور در سراسر ایران کار کرده است و درک صمیمانه ای از کشور مادری خود، ایران دارد.</p>

      <p>او بین سال‌های 1376 تا 1378 مدرس زبان انگلیسی در مرکز آموزش آزاد دانشگاه آزاد و سازمان ملی پرورش استعدادهای درخشان در تهران بود. محمد در هر دو کشور ایران و استرالیا به عنوان مترجم کار کرده است و پنج نشریه در کارنامه خود دارد.</p>

      <p>محمد دارای تجارب گسترده در بخش اشتغال و خدمات اجتماعی در استرالیا است و به مدت 3 سال به عنوان مشاور استخدام در Mission استرالیا کار کرده است. او به عنوان نماینده ماموریت استرالیا در Campsie Centrelink منصوب شد تا به جوانان بیکار و محروم طولانی مدت کمک کند تا به کار بازگردند.</p>

      <p>از سال 2001 تا 2006، او خبرنگار ایرانی برای کاوش های باستان شناسی، برجسته ترین مجله باستان شناسی استرالیا بود. بین سال‌های 2006 تا 2008 او روزنامه‌نگار بود و در آنجا داستان‌ها، مقاله‌ها و مقالاتی درباره جامعه ایرانیان استرالیا ارائه کرد.</p>
      
      <p>او همچنین مالک و مدیریت خدمات مهاجرت و آموزش شادا است.</p>
      
      <p><strong>محمدرضا عظیمی</strong></p>
      
      <p><strong>وکیل رسمی مهاجرت</strong></p>                            

<p>&nbsp;</p>

</div>`,
    },
    maraNumber: '0958292',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.VIP,
    contact: {
      email: 'azimi@shada.com.au',
      phone: ['+61290025511'],
    },
    status: Status.ACTIVE,
    avatar:
      'https://binsta.dev/api/v1/files/FxhB1ze6NO/transform?format=webp&size=md&quality=best',
  },
  // {
  //   id: 'agt2',
  //   name: { en: 'Damon Aryan', fa: 'دامون ارین' },
  //   slug: 'damon-aryan',
  //   locations: [Locations.en, Locations.fa],
  //   maraNumber: '1384623',
  //   featuredPlan: FeaturedPlan_Business.SIMPLE,
  //   desc: {
  //     en: `Mr. Damon Aryan, a graduate of immigration law from the Australian National University and an official agent registered in the MARA organization with registration number 1384623 and MIA organization with number 7293, as the founder and manager of selectvisa company, insists that he personally oversees all customer affairs from the beginning of giving advice to the end of the process of immigration to Australia and getting a visa, have full supervision. MARA is presented as the only official authority License to operate and supervise the affairs of official immigration agents in Australia.`,
  //     fa: `آقای “مهندس دامون آرین” فارغ‌التحصیل حقوق مهاجرت از دانشگاه ملی استرالیا و ایجنت رسمی ثبت شده در سازمان MARA با شماره ثبت 1384623 و سازمان MIA با شماره 7293، به عنوان موسس و گرداننده‌ی شرکت Selectvisa، اصرار دارند که خود شخصاً بر تمامی امور مشتریان از ابتدای ارائه مشاوره‌های ابتدای تا انتهای پروسه‌ی مهاجرت به استرالیا و دریافت ویزا،‌ نظارت کامل داشته باشند و کلیه فعالیت‌های وی مشمول قانون تجارت استرالیا و نیز مرامنامه‌ی سازمان دولتی MARA به عنوان تنها مرجع رسمی ارائه مجوز فعالیت و نظارت به امور کارگزاران رسمی مهاجرت در استرالیا است..`,
  //   },
  //   contact: {
  //     website: 'https://selectvisa.com',
  //     email: 'aryan@selectvisa.com',
  //     phone: ['611800047706'],
  //     linkedin: 'https://au.linkedin.com/in/damon-aryan',
  //     instagram: 'https://www.instagram.com/damonaryan',
  //   },
  //   status: Status.ACTIVE,
  // },

  {
    id: 'agt3',
    name: { en: 'Mojtaba Dani', fa: 'دکتر مجتبی دانی' },
    slug: 'mojtaba-dani',
    maraNumber: '1800260',
    qualifications: {
      en: ['LLB', 'LLM', 'PhD in Law'],
      fa: ['LLB', 'LLM', 'دکترای حقوق'],
    },
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://ddamigration.com',
      email: 'info@ddamigration.com',
      phone: ['02188886344', '+61490913970'],
      telegram: 'https://telegram.me/ddamigration',
      instagram: 'https://www.instagram.com/dda_migration_australia',
      linkedin:
        'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFo7SkeC04I6AAAAWk5lMkwGRVQarIJpdgBfVCG8-55kToVQA3zZ5suLmRDnR66fL25kH3PLHP36KxkP6IqYtA-Hx3zpkH4VZAr6OE09EbHhGo-lP1OX6DWSm8SELTPRTBmK2k=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fm-dani%2F',
      whatsapp: '61490913970',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt4',
    name: { en: 'Sirous Ahmadi', fa: 'سیروس احمدی' },
    slug: 'sirous-ahmadi',

    maraNumber: '0854826',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      email: 'info@visayab.com',
      phone: ['0288758851', '+61410070490'],
      telegram: 'https://t.me/visayabmigration',
      website: 'https://www.visayab.com',
      instagram: 'https://www.instagram.com/visayab',
    },
    status: Status.DEACTIVE,
  },
  {
    id: 'agt5',
    name: { en: 'Reza Aein', fa: 'رضا آیین' },
    slug: 'reza-aein',

    maraNumber: '0955595',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      email: 'r.aein@homemigration.com',
      phone: ['02188666181'],
      whatsapp: '61424982580',
      website: 'https://www.homemigration.com',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt6',
    name: { en: 'Hami Niroumand', fa: 'حامی نیرومند' },
    slug: 'hami-niroumand',

    qualifications: {
      en: ['G.cert'],
      fa: ['G.cert'],
    },
    maraNumber: '1169662',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://avestaservices.com',
      email: 'info@avestaservices.com',
      phone: ['+61406812133'],
      whatsapp: '61424982580',
    },
    status: Status.ACTIVE,
  },

  {
    id: 'agt8',
    name: { en: 'Soodeh Jafari', fa: 'سوده جعفری' },
    slug: 'soodeh-jafari',

    maraNumber: '1795035',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      email: 'info@sjmigration.com.au',
      phone: ['02122181533', '+61386169990'],
      instagram: 'https://instagram.com/sjmigration?igshid=1gfy9zc9vp7kx',
      website: 'https://www.sjmigration.com.au',
      whatsapp: '61481000600',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt9',
    name: { en: 'Azam Jafari', fa: 'اعظم جعفری' },
    slug: 'azam-jafari',
    desc: {
      en: `Azam Jafari is a registered immigration lawyer and a member of the Australian Immigration Institute. Mrs. Jafari has many years of experience in the field of educational counseling for people interested in continuing their studies in foreign countries. He began his academic studies in Iran in the field of law at the National University of Iran, and after immigrating to Australia, he continued his studies in the field of Master's in International Law from Macquarie University, Sydney. Mrs. Jafari also completed her post-graduate certificate in Australia in the field of immigration law at Victoria University of Melbourne and started her professional activity in the field of providing consulting services in immigration matters in 2015.

      Based on the Code of Conduct, AJ Migration considers itself committed to respecting the client's interests and uses its efforts to provide the best services and advice to its clients.
      
      Due to the continuous changes in the field of immigration to Australia, Ms. Jafari has kept her knowledge up-to-date in the field of immigration by participating in educational workshops that are held permanently in the field of immigration by organizations affiliated with the Australian Immigration Department. and provide the most up-to-date necessary guidance to its customers.`,

      fa: `اعظم جعفری، وکیل ثبت‌شده مهاجرتی و عضو انستیتو مهاجرت استرالیا است. خانم جعفری، سابقه سالها فعالیت در زمنیه مشاوره آموزشی به افراد علاقمند به ادامه تحصیل در کشورهای خارج را دارا می‌باشند. او تحصیلات آکادمیک خود را در ایران در رشته حقوق در دانشگاه ملی ایران آغاز کرد و پس از مهاجرت به استرالیا، تحصیلات خود را در رشته کارشناسی ارشد حقوق بین الملل از دانشگاه مکواری سیدنی ادامه داد. خانم جعفری همچنین گواهی تحصیلات تکمیلی در استرالیا در زمینه قوانین مهاجرت را در دانشگاه ویکتوریای ملبورن به پایان رسانید و فعالیت حرفه‌ای خود را در زمینه ارائه خدمات مشاوره در امور مهاجرتی را در سال ۲۰۱۵ آغاز نمود.

      شرکت AJ Migration بر اساس Code of Conduct (منشور اخلاقی امور مهاجرتی) خود را متعهد به رعایت مصالح و منافع مشتری دانسته و تلاش خود را جهت ارائه بهترین خدمات و مشاوره به مشتریان خود بکار می‌گیرد.
      
      با توجه به تغییرات مستمر در زمینه امور مهاجرتی به استرالیا، خانم جعفری با شرکت در کارگاه‌های آموزشی که بطور دائمی در زمینه امور مهاجرتی توسط سازمان های وابسته به اداره مهاجرت استرالیا برگزار می‌شود، اطلاعات خود را در زمینه امور مهاجرتی بروز نگه داشته تا بتواند بهترین و بروزترین راهنمایی لازم را به مشتریان خود ارائه نماید.`,
    },
    maraNumber: '1571733',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.FULL_DATA,
    contact: {
      email: 'ajafari@ajmigration.com',
      phone: ['0414187045'],
      website: 'https://www.ajmigration.com',
    },
    status: Status.ACTIVE,
    avatar:
      'https://binsta.dev/api/v1/files/LocKxKSv-L/transform?format=webp&size=md&quality=best',
  },
  {
    id: 'agt10',
    name: { en: 'Matin Amirshahi', fa: 'متین امیرشاهی' },
    slug: 'matin-amirshahi',
    desc: {
      en: `Our immigration activities include acceptance of representation in immigration matters to Australia and translation and confirmation of documents related to immigration to Australia. These services are performed under the direct supervision of an official immigration lawyer and an Australian Naati translator. Our clients have the possibility to communicate directly with the lawyer group and follow the transfer process easily.`,
      fa: `فعاليتهای مهاجرتی ما شامل قبول وکالت در امور مهاجرت به استراليا و ترجمه و تائيد مدارک مربوط به مهاجرت به اين کشور ميشوند. اين خدمات با سرپرستی مستقيم وکيل رسمی مهاجرت و مترجم ناتی استراليا انجام ميشوند. موکلین ما این امکان را دارند که به طور مستقیم با وکیل مجموعه در ارتباط باشند و روند پروسه مهاجرت را به سهولت پیگیری کنند.`,
    },
    maraNumber: '1685110',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.FULL_DATA,
    contact: {
      email: 'admin@amirshahi.law',
      phone: ['+982122705217', '061457461255'],
      telegram: '09012800983',
      whatsapp: '09012800983',
      website: 'https://www.amirshahi.law', // full address with http
      instagram: 'https://www.instagram.com/amirshahi.law',
    },
    status: Status.ACTIVE,
    avatar:
      'https://binsta.dev/api/v1/files/27KD3f6SPq/transform?format=webp&size=md&quality=best',
  },
  // {
  //   id: 'agt11',
  //   name: { en: 'Ali Kiaei', fa: 'علی کیائی' },
  //   slug: 'ali-kiaei',

  //   maraNumber: '1789771',
  //   locations: [Locations.en, Locations.fa],
  //  featuredPlan: FeaturedPlan_Business.SIMPLE,
  //   contact: {
  //     email: 'team@migrationdoor.com.au',
  //     phone: ['61735188044', '61481012012'],
  //     whatsapp: '61481012012',
  //     website: 'https://www.migraitiondoor.com.au',
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt12',
    name: { en: 'Ali Shahami ', fa: 'علی شهامی' },
    slug: 'ali-shahami',

    maraNumber: '1688026',
    qualifications: { en: ['M.S.'], fa: ['M.S.'] },
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      email: 'info@rkimmigrationgroup.org',
      phone: ['61615068749'],
      website: 'https://www.rkimmigrationgroup.org',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt13',
    name: { en: 'Azadeh Ghorashi ', fa: 'آزاده قرشی' },
    slug: 'azadeh-ghorashi',
    desc: {
      en: `After obtaining Australian residency in 2012 and obtaining an official attorney's license from Australia Registered Migration Agent under MARN 1573151; Azzy Immigration office officially started its activity in 2013. This collection can do all the steps with the possibility of monitoring the process and solving ambiguities and questions for those people who have changed their way of living and staying in Australia.

 

      Azzy Immigration Service Office, due to its experience and expertise in all types of immigration visas, can provide a suitable solution for your immigration and suit your situation with certainty. Therefore, our team is ready to sit down with you to plan with your situation in order to provide a solution, to present you what we can do in the form of a road map.
      
       
      
      Credits of Azi Immigration Service Office:
      
      Our official lawyer
      Mia official member
      Member of the Iranian Immigration Lawyers Association of Australia
      Membership in the Iran Australia Chamber of Commerce
       
      
      You experience the borderless world with Azzy Immigration.`,
      fa: `
      پس از اخذ اقامت استرالیا در سال 2012 و اخذ مجوز وکالت رسمی از Australia Registered Migration Agent به شمارهMARN 1573151؛ دفتر خدمات مهاجرتی Azzy Immigration فعالیت خود را بصورت رسمی از سال 2013 آغاز نمود. این مجموعه می‌تواند برای آن دسته از علاقه مندانی که تمایل به تغییر مسیر زندگی و اقامت در کشور استرالیا را دارند، تمامی مراحل اقامت را با امکان نظارت بر روند پروسه و رفع ابهامات و سئوالات متقاضیان انجام دهد.
      
       
      
      دفتر خدمات مهاجرتی Azzy Immigration با توجه به تجربه و تخصصی که در انواع ویزاهای مهاجرتی دارد، می‌تواند یک راه حل مناسب برای معمای مهاجرت شما و متناسب با وضعیت تان که با قطعیت بالایی همراه باشد، ارائه دهد. بنابراین تیم ما آماده است که متناسب با وضعیت شما در جهت ارائه یک راه حل، با شما به مذاکره بنشیند تا آنچه که ما می توانیم انجام دهیم را در قالب یک نقشه راه به شما ارائه نماید.
      
       
      
      اعتبارات دفتر خدمات مهاجراتی آزی ایمیگریشن:
      
      وکیل رسمی Mara
      عضور رسمی Mia
      عضو انجمن وکلای مهاجرت ایران استرالیا
      عضویت در اتاق بازرگانی ایران استرالیا
       
      
      دنیای بدون مرز را با Azzy Immigration تجربه نمایید.`,
    },
    maraNumber: '1573151',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.FULL_DATA,
    contact: {
      website: 'https://azzyimmi.com.au',
      email: 'info@azzyimmi.com',
      phone: ['+989308719363', '+61452477750'],
      telegram: 'https://t.me/joinchat/A6McME_tPeHKkEOLJ-VyUQ',
      instagram: 'https://www.instagram.com/azzyimmigration',
    },
    status: Status.ACTIVE,
    avatar:
      'https://binsta.dev/api/v1/files/0xcM-ZxWFO/transform?format=webp&size=md&quality=best',
  },

  {
    id: 'agt14',
    name: { en: 'Ehsan Azadi', fa: 'احسان آزادی' },
    slug: 'ehsan-azadi',

    maraNumber: '1279450',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://www.arcmigration.com.au',
      email: 'eazadi@arcmigration.com.au',
      phone: ['0416388993'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt15',
    name: { en: 'Ehsan Jahanandish', fa: 'احسان جهان اندیش' },
    slug: 'ehsan-jahanandish',

    qualifications: {
      en: ['M.S.'],
      fa: ['M.S.'],
    },
    maraNumber: '1680444',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://www.smartmigration.com',
      email: 'info@smartmigration.com',
      phone: ['+982147627828', '+61291606260', '+61477181614'],
      whatsapp: '+989027022286',
      instagram: 'https://www.instagram.com/smartmigration',
    },
    status: Status.ACTIVE,
  },
  // {
  //   id: 'agt16',
  //   name: { en: 'Kourosh Momeni', fa: 'کوروش مومنی' },
  //   slug: 'kourosh-momeni',

  //   maraNumber: '0955242',
  //   locations: [Locations.en, Locations.fa],
  //  featuredPlan: FeaturedPlan_Business.SIMPLE,
  //   contact: {
  //     website: 'https://www.clau.com.au',
  //     email: 'km@clau.com.au',
  //     phone: ['61294153344'],
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt17',
    name: { en: 'Mehdi Keivani', fa: 'مهدی کیوانی' },
    slug: 'mehdi-keivani',
    desc: {
      en: `Unique Visa Immigration Organization has started its activities in the field of immigration to Australia since 2008 and has had a close relationship with various departments of the Australian Immigration Department since the beginning.
      The lawyer of this collection is Mr. Mehdi Kivani with MARN number 2217813 in the Mara organization and the client's case is examined and carried out directly under his supervision.`,
      fa: `
      سازمان مهاجرتی یونیک ویزا از سال ۲۰۰۸ فعالیت خود را در زمینه مهاجرت به استرالیا آغاز نموده و از همان بدو امر ارتباط تنگاتنگی با بخش های مختلف اداره مهاجرت استرالیا داشته است.
      وکیل این مجموعه جناب آقای مهدی کیوانی با شماره MARN 2217813 در سازمان مارا (Mara )میباشند و پرونده موکلین مستقیما زیرنظر ایشان مورد بررسی قرار گرفته و انجام می‌شوند.`,
    },
    maraNumber: '2217813',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.FULL_DATA,
    contact: {
      website: 'https://uniquevisa.net',
      email: 'admin@uniquevisa.net',
      phone: ['+61413541043', '+982188545324-6'],
      telegram: 'https://t.me/uniquevisa',
    },
    status: Status.ACTIVE,
    avatar:
      'https://binsta.dev/api/v1/files/lMxleRoD8M/transform?format=webp&size=md&quality=best',
  },
  {
    id: 'agt18',
    name: { en: 'Nima Kazemi', fa: 'نیما کاظمی' },
    slug: 'nima-kazemi',

    maraNumber: '1278784',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    qualifications: {
      en: ['NZ 201700466.', 'MSc'],
      fa: ['NZ 201700466.', 'MSc'],
    },
    contact: {
      website: 'https://www.pasargadmigration.com',
      email: 'info@pasargadmigration.com',
      phone: ['+982188029976'],
    },
    status: Status.DEACTIVE,
  },
  // {
  //   id: 'agt19',
  //   name: { en: 'Saeed Rezaei', fa: 'سعید رضائی' },
  //   slug: 'saeed-rezaei',

  //   maraNumber: '1796143',
  //   locations: [Locations.en, Locations.fa],
  //  featuredPlan: FeaturedPlan_Business.SIMPLE,
  //   contact: {
  //     website: 'https://www.subclass.com.au',
  //     email: 'INFO@SUBCLASS.COM.AU',
  //     phone: ['+61280065151'],
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt20',
    name: { en: 'Sam Lotfollahi', fa: 'سام لطف الهی' },
    slug: 'sam-lotfollahi',
    maraNumber: '0901704',
    locations: [Locations.en, Locations.fa],
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      email: 'info@mmvisa.com.au',
      phone: ['+61455242242'],
    },
    status: Status.ACTIVE,
  },

  {
    id: 'agt21',
    name: { en: 'Soodabeh Harirzadeh', fa: 'سودابه حریری' },
    slug: 'soodabeh-harirzadeh',

    locations: [Locations.en, Locations.fa],
    maraNumber: '1687507',
    featuredPlan: FeaturedPlan_Business.FULL_DATA,
    contact: {
      website: 'https://www.aradimmigration.com',
      email: 'sudihariri@gmail.com',
      phone: ['0406201540', '021-44058186 & 7'],
      telegram: 'https://t.me/Arad_immigration',
    },
    desc: {
      fa: 'سرکار خانم سودابه حریری وکیل ثبت شده اداره مهاجرت استرالیا و مدیر مجموعه آراد ایمیگریشن می باشند.ایشان در سال 2006 به کشور استرالیا مهاجرت کردند و پس از مدتی به ایران بازگشتند و در سفارت های مختلف از جمله سفارت استرالیا، انگلیس و اسپانیا مشغول به کار شدند.ایشان پس از کسب تجارب ارزنده در حوزه ویزا و مهاجرت و بدلیل علاقه در این حوزه، اقدام به تحصیل در رشته حقوق مهاجرت استرالیا کردند. خانم سودابه حریری کار خود را به عنوان وکیل رسمی مهاجرت استرالیا در سال 2016 آغاز کردند و با توجه به تجارب و تحصیلات خود توانستند در مدت زمان کوتاهی به موفقیت های چشمگیری دست یابند . ایشان با اخذ اسسمنتهای مثبت فراوان در  مشاغل متنوع در بحث ویزاهای اسکیل ورکر و هچننین اخذ ویزاهای سرمایه گذاری ، ازدواج، نامزدی و توریستی موفق توانسته اند در میان وکلای مارا به خوش نامی بدرخشند. شعار ایشان همواره دقت و سرعت در پیش بردن پرونده متقاضیان است ونظرات کلاینت های ایشان نیز گواه این موضوع می‌باشد.',
      en: 'Mrs. Sudabah Hariri is a registered lawyer of the Australian Immigration Department and the manager of Arad Immigration Group. She immigrated to Australia in 2006 and after some time returned to Iran and worked in different embassies including the Australian, British and Spanish embassies. are. After gaining valuable experiences in the field of visa and immigration and because of his interest in this field, he studied immigration law. Mrs. Soudabeh Hariri started her work as an official Australian immigration lawyer in 2016 and achieved significant success in a short period of time due to her business and education. By obtaining many positive names in various cases in the discussion of skilled worker visas and also obtaining investment, marriage, engagement and tourist visas, they succeed in shining a good name among our lawyers. The slogan is always precision and speed in advancing the applicants case, and this is their opinion as well.',
    },
    status: Status.ACTIVE,
    avatar:
      'https://binsta.dev/api/v1/files/fKbzSPjJea/transform?format=webp&size=lg&quality=hi',
  },
  {
    id: 'agt22',
    name: { en: 'Zara Mavi', fa: 'زهرا ماوی' },
    slug: 'zara-mavi',

    locations: [Locations.en, Locations.fa],
    maraNumber: '1464111',
    qualifications: {
      en: ['MIA 10242'],
      fa: ['MIA 10242'],
    },
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://www.elitemigration.com',
      email: 'z.mavi@elitemigration.com',
      phone: ['0414825985'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt23',
    name: { en: 'Daniel Eskandari', fa: 'دنیل اسکندری' },
    slug: 'daniel-eskandari',
    locations: [Locations.en, Locations.fa],
    maraNumber: '0100438',
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      email: 'daniel@australianmigration.org',
      phone: ['61282112722'],
    },
    status: Status.ACTIVE,
  },
  // {
  //   id: 'agt24',
  //   name: { en: 'Hassan Izadnia', fa: 'حسن ایزدنیا' },
  //   slug: 'hassan-izadnia',
  //   locations: [Locations.en, Locations.fa],
  //   maraNumber: '1571846',
  //  featuredPlan: FeaturedPlan_Business.SIMPLE,
  //   contact: {
  //     website: 'https://www.regalmigration.com.au',
  //     email: 'h.izadnia@regalmigration.com.au',
  //     phone: ['61390135600'],
  //   },
  //   status: Status.ACTIVE,
  // },
  // {
  //   id: 'agt25',
  //   name: { en: 'Roya Majd', fa: 'رویا مجد' },
  //   slug: 'roya-majd',
  //   locations: [Locations.en, Locations.fa],
  //   maraNumber: '0701239',
  //  featuredPlan: FeaturedPlan_Business.SIMPLE,
  //   contact: {
  //     website: 'https://www.majdvisa.com',
  //     email: 'info@majdvisa.com',
  //     phone: ['1300960326'],
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt26',
    name: { en: 'Negin Safaee', fa: 'نگین صفایی' },
    slug: 'negin-safaee',
    locations: [Locations.en, Locations.fa],
    maraNumber: '1791573',
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://www.visayab.com',
      email: 'n.safaee@visayab.com',
      phone: ['61296591694'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt27',
    name: { en: 'Naghmeh Danai', fa: 'نغمه دانایی' },
    slug: 'naghmeh-danai',
    desc: {
      en: `Over 15 years of experience in different visa and migration matters.`,
      fa: `بیش از 15 سال تجربه در امور مختلف ویزا و مهاجرت.`,
    },
    locations: [Locations.en, Locations.fa],
    maraNumber: '0748076',
    featuredPlan: FeaturedPlan_Business.FULL_DATA,
    contact: {
      website: 'https://www.visazone.com.au',
      email: 'naghmeh.danai@gmail.com',
      phone: ['0414326277'],
      instagram: 'https://www.instagram.com/visazone_naghmeh_danai',
    },
    status: Status.ACTIVE,
    avatar:
      'https://binsta.dev/api/v1/files/ib32tPxy2m/transform?format=webp&size=md&quality=best',
  },
  // {
  //   id: 'agt28',
  //   name: { en: 'Sudabeh Rahbar', fa: 'سودابه رهبر' },
  //   slug: 'sudabeh-rahbar',
  //   locations: [Locations.en, Locations.fa],
  //   maraNumber: '1386969',
  //  featuredPlan: FeaturedPlan_Business.SIMPLE,
  //   contact: {
  //     website: 'https://www.keymigrationvisa.com.au',
  //     email: 'Sue@keymigrationvisa.com.au',
  //     phone: ['430432395'],
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt29',
    name: { en: 'Iyarin McArdle', fa: '' },
    slug: 'iyarin-mcardle',
    locations: [Locations.en],
    maraNumber: '1688639',
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      // website: 'http://visaadvocacy.com', https nist
      email: 'help@visaadvocacy.com',
      phone: ['+61400012340'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt30',
    name: { en: 'Awais Nisar', fa: '' },
    slug: 'awais-nisar',
    locations: [Locations.en],
    maraNumber: '2318017',
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://www.visatasker.com',
      email: 'agent@visatasker.com',
      phone: ['+61435915021'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt31',
    name: { en: 'Fiona Carre', fa: '' },
    slug: 'fiona-carre',
    locations: [Locations.en],
    maraNumber: '2217972',
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://strattonmigration.com.au',
      // email: 'help@visaadvocacy.com',
      phone: ['+61(0)756354415'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt32',
    name: { en: 'Larissa Funk', fa: '' },
    slug: 'larissa-funk',
    locations: [Locations.en],
    maraNumber: '1798794',
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://avisfunklaw.com.au',
      email: 'hello@avisfunklaw.com.au',
      phone: ['+61753911313'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt33',
    name: { en: 'Taraneh Arianfar', fa: '' },
    slug: 'taraneh-arianfar',
    locations: [Locations.en],
    maraNumber: '1688639', // maranumberesho peyda nakardam
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://immigrationsolutionslawyers.com.au',
      email: 'taraneh.arianfar@immigrationsolutions.com.au',
      phone: ['+61292646432'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt34',
    name: { en: 'Owais Shaheen', fa: '' },
    slug: 'owais-shaheen',
    locations: [Locations.en],
    maraNumber: '1688639', // maranumberesho peyda nakardam
    featuredPlan: FeaturedPlan_Business.SIMPLE,
    contact: {
      website: 'https://shaheen.com.au',
      email: 'info@shaheen.com.au',
      phone: ['+289737783'],
    },
    status: Status.ACTIVE,
  },
];
