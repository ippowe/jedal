/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../hooks/withApollo';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { Provider } from 'react-redux';
import rootReducer from '../modules';
import { configureStore } from '@reduxjs/toolkit';

export interface ITheme {
    primary: string;
    secondary: string;
}

export interface IThemeWrapper {
    theme: ITheme;
}

export const theme: ITheme = {
    primary: '#ff3737',
    secondary: '#303b57',
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  @font-face {
    font-family: 'GmarketSans';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/GmarketSansTTFMedium.ttf');
  }
  @font-face {
    font-family: 'GmarketSans';
    font-style: normal;
    font-weight: bold;
    src: url('/fonts/GmarketSansTTFBold.ttf');
  }
    @font-face {
    font-family: 'NotoSansCJKkr';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/NotoSansKR-Light.otf');
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/NotoSansKR-Regular.otf');
  }
    @font-face {
    font-family: 'NotoSansCJKkr';
    font-style: normal;
    font-weight: bold;
    src: url('/fonts/NotoSansKR-Black.otf');
  }
  body {
    margin: 0 auto;
    max-width: 540px;
    min-height: 100vh;
    font-family: "GmarketSans", serif
  }
  button {
    font-family : inherit;
    border: none;
    &:focus {
      outline: 0;
    }
  }
`;

interface IPops {
    apollo: ApolloClient<NormalizedCacheObject>;
}

const store = configureStore({ reducer: rootReducer });

class MyApp extends App<IPops> {
    render() {
        const { Component, pageProps, apollo } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>오늘의수라</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <Provider store={store}>
                    <ApolloProvider client={apollo}>
                        <ThemeProvider theme={theme}>
                            <GlobalStyle />
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </ApolloProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

export default withApollo(MyApp);
