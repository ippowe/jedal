/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../hooks/withApollo';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { Provider } from 'react-redux';
import rootReducer from '../modules';
import { configureStore } from '@reduxjs/toolkit';
import Core from "../components/core/core";

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

interface IPops {
    apollo: ApolloClient<NormalizedCacheObject>;
}

const store = configureStore({ reducer: rootReducer });

class MyApp extends App<IPops> {
    componentDidMount() {
        Kakao.init('a597101fc243c041483c3471d0e087dd');
        Kakao.isInitialized();

        window.fbAsyncInit = function () {
            FB.init({
                appId: '711175776366808',
                xfbml: true,
                version: 'v7.0',
            });
        };
    }

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
                            <Core/>
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </ApolloProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

export default withApollo(MyApp);
