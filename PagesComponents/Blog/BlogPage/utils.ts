import { IBlog } from 'Interfaces/Database/blog';
import { urlFor } from 'Utils/sanity';

export function getBlogStructuredData(
  blog: IBlog | undefined
): Record<string, any> | undefined {
  if (!blog) return undefined;
  const mainImageUrl = urlFor(blog?.mainImage)?.url();

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: blog?.title,
    image: [mainImageUrl],
    datePublished: '2015-02-05T08:00:00+08:00',
    dateModified: '2015-02-05T09:20:00+08:00',
    author: [
      {
        '@type': 'Organization',
        brand: 'Marabox',
        name: 'Marabox',
        email: 'maraboxmigration@gmail.com',
        logo: 'https://www.marabox.com.au/favicon.ico',
        url: 'https://www.marabox.com.au',
      },
    ],
  };
}
