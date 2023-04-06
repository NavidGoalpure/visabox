import { MDXProvider } from '@mdx-js/react';
import Image, { ImageProps } from 'next/image';
import { HeadingH1 } from 'PagesComponents/Blog/Heading';
import { ReactNode } from 'react';

const ResponsiveImage = (props: ImageProps) => (
  <Image {...props} alt={props.alt} fill />
);

const components = {
  img: ResponsiveImage,
  h1: HeadingH1,
  //   h2: Heading.H2,
  // p: Text,
  //   code: Pre,
  //   inlineCode: Code,
};
type Props = {
  children: ReactNode;
};
export default function Post(props: Props) {
  return (
    //@ts-ignore
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  );
}
