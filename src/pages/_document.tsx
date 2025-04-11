import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </Head>
      <body style={{
        margin: 0,
        padding: 0,
        WebkitFontSmoothing: "antialiased",
        minHeight: "100vh",
        cursor: "default",
        overflowY: "auto",
        overflowX: "hidden"
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}