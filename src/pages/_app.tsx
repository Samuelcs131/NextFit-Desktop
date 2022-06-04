import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ContainerProvider } from '../store/GlobalState'

function MyApp({ Component, pageProps }: AppProps) {
  return(<>
  <ContainerProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ContainerProvider>
  </>)
}

export default MyApp
