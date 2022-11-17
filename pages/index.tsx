import theme from 'styled-theming';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';
import { backgroundColor } from '../styles/theme';
import { Loading } from 'element/loading';

const Button = styled.button`
  background-color: ${backgroundColor};
`;
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mara Box</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>navid</div>
      <Button variant='dark'>oh oh</Button>
      <Loading />
    </div>
  );
};
export default Home;
