import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='pt-BR'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Prosto+One&display=swap" rel="stylesheet"/>

        <link rel="shortcut icon" href="/img/icon/logo-nextfit.svg" type="image/x-icon" />

        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" /> */}

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
