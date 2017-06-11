import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

function IndexPage() {
  return (
    <div>
      <Header />
      <h1>
        Hello World
      </h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default IndexPage;
