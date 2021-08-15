/* pages/_document.js */

import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@400;600&display=swap" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
