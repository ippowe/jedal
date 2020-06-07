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
                <Head>{this.props.styleTags}</Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap"
                    rel="stylesheet"
                />
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
