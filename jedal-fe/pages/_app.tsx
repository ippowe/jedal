import React from "react"
import App from "next/app"
import Head from "next/head"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../hooks/withApollo';
import {ApolloClient, NormalizedCacheObject} from 'apollo-boost';

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: "#001F3F",
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${props => props.theme.niceBlack}; 
  }
`
interface IPops {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IPops> {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>GraphQL Job Board</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </React.Fragment>
    )
  }
}

export default withApollo(MyApp);