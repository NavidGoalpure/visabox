import AnimationComponent from 'Components/AnimationComponent';
import { Button } from 'Elements/Button';
import PageLayout from 'Components/Layouts/PageContainer';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components/macro';
import {
  billboardTitleStyle,
  billboardSubtitleStyle,
  billboardTextStyle,
} from 'Styles/Theme/billboard';
import Link from 'next/link';

const WireSvg = () => {
  return (
    <svg
      width='202'
      height='137'
      viewBox='0 0 202 137'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_737_4611)'>
        <rect
          x='179.684'
          y='41.4569'
          width='9'
          height='16'
          rx='1.5'
          transform='rotate(-59.7307 179.684 41.4569)'
          fill='#DDE2EB'
          stroke='#838383'
        />
        <rect
          x='169.684'
          y='59.4569'
          width='9'
          height='16'
          rx='1.5'
          transform='rotate(-59.7307 169.684 59.4569)'
          fill='#DDE2EB'
          stroke='#838383'
        />
        <path
          d='M-51 -184.652H449V311.724H-51V-184.652ZM-51 311.724H449V-184.652H-51V311.724ZM155.15 28.0531C141.172 16.6701 124.287 7.16652 106.814 2.46881C93.947 -0.989947 80.096 -1.45356 67.792 4.2111C54.441 10.3582 43.396 24.5824 40.287 38.8324C34.067 67.3443 67.549 78.0759 85.835 91.1634C90.048 94.1794 93.96 97.6927 96.489 102.248C98 104.971 98.621 107.927 98.556 111.425C98.439 117.588 95.428 122.74 89.069 124.211C74.477 127.589 55.986 112.945 45.334 104.048C37.134 97.1974 29.72 91.6727 18.816 89.983C8.44899 88.3758 -2.457 89.8847 -11.028 96.2235C-17.151 100.751 -11.174 111.097 -4.972 106.51C2.186 101.216 11.011 100.128 19.584 102.25C29.254 104.646 35.45 111.585 43.094 117.469C54.83 126.503 68.963 135.796 84.323 136.439C104.046 137.264 115.242 117.73 108.648 100.265C104.525 89.3457 94.637 82.2773 84.996 76.3704C75.057 70.2798 62.538 65.1334 55.216 55.7231C47.516 45.8273 53.728 33.2422 60.713 24.6956C68.884 14.6995 80.577 10.803 93.266 11.9784C106.288 13.1826 118.82 18.9009 129.993 25.3587C134.332 27.8674 138.555 30.5776 142.637 33.4805C143.296 33.948 143.948 34.4265 144.602 34.9011C144.994 35.185 147.102 36.7913 145.407 35.4878C145.829 35.8124 146.251 36.14 146.665 36.4766C152.589 41.3023 161.127 32.9205 155.15 28.0531Z'
          fill='#DDE2EB'
        />
        <path
          d='M158.607 15.1472L178.727 25.8074L159.882 60.8605L139.761 50.2013C136.284 48.3578 134.957 44.0264 136.813 40.5736L148.909 18.0739C150.765 14.622 155.13 13.3057 158.607 15.1472Z'
          fill='#707070'
        />
        <path
          d='M158.607 15.1472L178.727 25.8074L159.882 60.8605L139.762 50.2013C136.285 48.3578 134.958 44.0264 136.814 40.5736L148.91 18.0739C150.766 14.622 155.13 13.3057 158.607 15.1472Z'
          fill='#707070'
        />
        <path
          d='M150.909 56.1098L159.883 60.8641L178.73 25.807L169.756 21.0527C169.053 21.5531 168.468 22.2133 168.037 23.0144L151.595 53.6002C151.164 54.4013 150.937 55.2501 150.909 56.1098Z'
          fill='#282828'
        />
        <path
          d='M178.838 22.0032L187.207 26.4378C189.937 27.8843 190.978 31.2845 189.521 33.9937L172.741 65.2078C171.284 67.9171 167.859 68.9505 165.13 67.5051L156.761 63.0704C154.031 61.624 152.99 58.2238 154.447 55.5146L171.227 24.3004C172.684 21.5912 176.109 20.5578 178.838 22.0032Z'
          fill='#DDE2EB'
        />
      </g>
      <defs>
        <clipPath id='clip0_737_4611'>
          <rect width='202' height='137' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
export default function Error() {
  return (
    <PageLayout>
      <Head>
        <title>Error</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <AnimationComponent />
        <TxtContainer>
          <Wire>
            <WireSvg />
          </Wire>
          <Title>Someone stepped on the wire</Title>
          <Subtitle>Please check your vpn connection</Subtitle>
          <Desc>{`there most be some problems in the servers please try again later`}</Desc>
          <Link href='/occupations'>
            <Button>Home</Button>
          </Link>
        </TxtContainer>
      </Container>
    </PageLayout>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 9.5rem 0;
  position: relative;
`;

const TxtContainer = styled.div`
  padding: 32px 24px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wire = styled.div`
  width: 30%;
  height: max-content;
`;

const Title = styled.h1`
  ${billboardTitleStyle}
`;
const Subtitle = styled.h2`
  ${billboardSubtitleStyle}
`;
const Desc = styled.h3`
  ${billboardTextStyle}
`;
