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
  const smartImage = image || `/favicon.ico`;

  return (
    <Head>
      <title>{smartTitle}</title>
      <link rel='canonical' href={canonical}></link>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content={smartDescription} />
      <meta name='og:title' content={smartTitle} />
      <meta name='og:image' content={smartImage} />
      <meta name='og:description' content={smartDescription} />
      <meta name='og:type' content={type} />
    </Head>
  );
}

export default Seo;
