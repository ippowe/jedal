/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document<any> {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </React.Fragment>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html>
                <Head>
                    {this.props.styleTags}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ff3737" />
                </Head>
                <body>
                    <script src="/kakaoSDK.js" />
                    <script async defer src="https://connect.facebook.net/en_US/sdk.js" />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
