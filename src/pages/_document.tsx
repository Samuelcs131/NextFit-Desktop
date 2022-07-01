import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='pt-BR'>
      <Head>
        {/* FONT ICON */}
        <link rel="shortcut icon" href="/img/icon/logo-nextfit.svg" type="image/x-icon" />
        {/* FONT TEXT */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Prosto+One&display=swap" rel="stylesheet"/>
        {/* STYLED LOADING */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/nprogress.css" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
