import { MDXProvider } from '@mdx-js/react';
import Image, { ImageProps } from 'next/image';
import { HeadingH1 } from 'PagesComponents/Blog/Heading';
import { ReactNode } from 'react';
import { ArticleMetaData } from './interfaces';
import styled from 'styled-components';
import { Layer1_SubtitleStyle, Layer1_TextStyle, Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { th_a_Color } from 'PagesComponents/Occupations/Detail/DetailTab/styledComponents';
import { borderTheme } from 'Styles/Theme';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';
import { layer2A_HeaderBG } from 'Styles/Theme/Layers/layer2/theme';

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
  meta: ArticleMetaData;
};
export default function Post(props: Props) {
  console.log('navid props=', props.meta);
  return (
    //@ts-ignore
    <MDXProvider components={components}>
      <MdxContarner>
        {/* <Image src={props.meta.bannerUrl} alt={`${props.meta.title}-image`} /> */}
        {props.children}
      </MdxContarner>
    </MDXProvider>
  );
}
const MdxContarner = styled.main`
p{
  ${Layer1_TextStyle}
  // line-height: 40px !important;
}
h1 {
  ${Layer1_TitleStyle}
  margin-top: 2rem;
}
table {
  ${borderTheme}
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 4rem;
  margin-top: 4rem;
  border-spacing: 0px;
}

tbody {
  margin: 0 0 20px;
  padding: 0;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  overflow: hidden;
}
tr {
  width: auto;
  height: 4rem;
  th {
    max-width: 278px;
  }
}
td {
  text-align: center;
  ${layer2A_TextStyle}
  direction: ltr;
  height: 2rem;
  padding: 0.5rem;
  line-height: 1.5rem;
}

th {
  ${layer2A_HeaderBG}
  ${layer2A_TextStyle}
  direction: ltr;
  text-align: center;
  font-weight: 500;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
  line-height: 1.5rem;
  border-color: #ececec;
  :last-child {
    border-right: none;
  }
  a {
    ${th_a_Color}
  }
}
h2 {
  ${Layer1_SubtitleStyle}
  margin-top: 4rem;
  margin-bottom: 1.5rem;
}
ul {
  ${Layer1_TextStyle}
  list-style: disc !important;
  padding-inline-start: 2rem; 
}
ol {
  ${Layer1_TextStyle}
  list-style: arabic-indic !important;
  padding-inline-start: 2rem; 
  ul {
    padding-inline-start: 3rem;
  }
}
li:last-child {
  margin-bottom: 2rem;
}
`
