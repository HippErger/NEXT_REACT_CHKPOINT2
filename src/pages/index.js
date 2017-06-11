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

/*
import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {initStore} from '../store'
import withRedux from 'next-redux-wrapper'
// import Page from '../components/Page'

class IndexPage extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount() {
    this.timer = this.props.startClock()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Page title='Index Page' linkTo='/other' />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)*/
