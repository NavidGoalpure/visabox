import theme from 'styled-theming';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { navidColor } from '../styles/theme';
import { Loading } from 'element/loading';

const Button = styled.button`
  background-color: ${navidColor};
`;
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mara Box</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>navid</div>
      <Button>oh oh</Button>
      <Loading />
    </div>
  );
};
export default Home;
