import type { NextPage } from 'next'
import HeadPage from '@components/HeadPage'
import { ContainerMain } from '@styles/container' 
import Link from 'next/link'


const Home: NextPage = () => { 

  return(<>
    <HeadPage titlePage="Home" />

    <ContainerMain>
      <h1>Calmai boy ainda to desenvolvendo o App</h1>
      <p>da uma conferida na pagina login</p>
      <Link href="/login"><a>Login</a></Link>
    </ContainerMain>
  </>
)
}

export default Home
