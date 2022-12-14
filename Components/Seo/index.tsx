import { siteMetadata } from './consts';
import Head from 'next/head';
import { useLocale } from 'Hooks/useLocale';

interface Props {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  canonical: string;
}

function Seo({
  description: descriptionProps,
  type = 'website',
  title: titleProps,
  image,
  canonical,
}: Props) {
  const { locale } = useLocale();
  const { defaultTitle, defaultDescription } = siteMetadata;
  const smartTitle = titleProps || defaultTitle[locale];
  const smartDescription = descriptionProps || defaultDescription[locale];
  const smartImage = image || `https://marabox.com/ogImage.png`;
  return (
    <Head>
      <title>{smartTitle}</title>
      <meta name='description' content={smartDescription} />
      <link rel='canonical' href={canonical}></link>
      <link rel='icon' href='/favicon.ico' />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property='og:title' content={smartTitle} />
      <meta property='og:image' content={smartImage} />
      <meta property='og:description' content={smartDescription} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={canonical} />
      {/* <!-- Twitter Meta Tags --> */}
      <meta name='twitter:card' content={smartImage} />
      <meta property='twitter:domain' content='marabox.com' />
      <meta property='twitter:url' content={canonical} />
      <meta name='twitter:title' content={smartTitle} />
      <meta name='twitter:description' content={smartDescription} />
      <meta name='twitter:image' content={smartImage} />
    </Head>
  );
}

export default Seo;
