import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import Layout from '@components/Layout'
import { ContainerProvider } from '@store/GlobalState' 
import NProgress from 'nprogress' 
import Head from 'next/head'

// LOADING PAGE
Router.events.on('routeChangeStart', ()=>{ 
    NProgress.start()
})

Router.events.on('routeChangeComplete', ()=>{
    NProgress.done()
})

Router.events.on('routeChangeError', ()=>{
  NProgress.done()
})

function MyApp({ Component, pageProps }: AppProps) {
  return(<>
  <Head>
    <link  type="text/css" href="/loading.css" />
  </Head>
  <ContainerProvider >
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ContainerProvider>
  </>)
}

export default MyApp
