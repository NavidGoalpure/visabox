import { Locations } from 'Interfaces';
import { convertToMd5, slugify } from 'Utils';
import { ArticleMetaData, ArticleTags } from './interfaces';

export const articleMetadatas: ArticleMetaData[] = [
  {
    title: 'یک مقاله برای اینکه بیشتر هوای هم رو داشته باشیم',
    tags: [ArticleTags.INVESTIGATE],
    slug: slugify('a good article'),
    summary:
      'Markdown/MDX with Next.js Markdown/MDX with Next.js Markdown/MDX with Next.jsMarkdown/MDX with Next.js',
    id: convertToMd5(slugify('a good article')),
    locale: Locations.fa,
  },
];
