import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
        render() {
                return (
                        <Html lang="fa" dir="rtl">
                                <Head>
                                        <title>کافه لاله زار</title>
                                        <meta name="description" content="بهترین طعم ها و خاطره ها" />
                                        <meta charSet="utf-8" />
                                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                                        <link rel="icon" href="/favicon.ico" />
                                </Head>
                                <body>
                                        <Main />
                                        <NextScript />
                                </body>
                        </Html>
                );
        }
}

export default MyDocument;