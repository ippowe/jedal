/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';

import withApollo from '../hooks/withApollo';
import NormalizeCSS from '../styles/normalizeCSS';

interface IPops {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IPops> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>GraphQL Job Board</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ApolloProvider client={apollo}>
          <NormalizeCSS />
          <Component {...pageProps} />
        </ApolloProvider>
      </React.Fragment>
    );
  }
}

export default withApollo(MyApp);
