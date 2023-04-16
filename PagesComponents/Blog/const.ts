import { Locations } from 'Interfaces';
import { convertToMd5 } from 'Utils';
import { ArticleMetaData, ArticleTags } from './interfaces';

export const articleMetadatas: ArticleMetaData[] = [
  {
    title: 'یک مقاله برای اینکه بیشتر هوای هم رو داشته باشیم',
    tags: [ArticleTags.INVESTIGATE],
    summary:
      'Markdown/MDX with Next.js Markdown/MDX with Next.js Markdown/MDX with Next.jsMarkdown/MDX with Next.js',
    slug: 'a-good-article',
    id: convertToMd5('a-good-article'),
    locale: Locations.fa,
  },
];
