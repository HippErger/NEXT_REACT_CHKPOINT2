import React from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';

function IndexPage() {
  return (
    <div>
      <Header />
      <h1>
        Hello World
      </h1>
    </div>
  );
}

export default withRedux(initStore, null, null)(IndexPage);
