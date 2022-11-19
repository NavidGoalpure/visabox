import Link from 'next/link';
import React from 'react';
import Layout from '@components/Layout';

export default function Error() {
  return (
    <>
      <header>
        <h1>Oops we did not expect that to happen</h1>
        <p>
          Have you wondered into the unknow. Let us help you, Please take a look
          at below options
        </p>
      </header>
      <Link href='/'>
        <div className='button' style={{ marginTop: '2rem' }}>
          Back to Homepage
        </div>
      </Link>
    </>
  );
}
