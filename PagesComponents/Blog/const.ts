import { Locations } from 'Interfaces';
import { convertToMd5 } from 'Utils';
import { ArticleMetaData, ArticleTags } from './interfaces';

export const articleMetadatas: ArticleMetaData[] = [
  {
    title: 'ویزای مهارتی استرالیا',
    tags: [ArticleTags.INVESTIGATE],
    summary:
      'استرالیا به دلیل کیفیت بالای زندگی، فرهنگ متنوع و فرصت‌های شغلی فراوان، مقصدی محبوب برای مهاجران از سراسر جهان است. در مطلب پیش رو می خواهیم ، مهاجرت به استرالیا از طریق تخصص...',
    slug: 'skilled-worker',
    id: convertToMd5('skilled-worker'),
    locale: Locations.fa,
    date: new Date,
  },
];
