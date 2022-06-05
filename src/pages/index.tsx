import Colors from '@components/Colors'
import type { NextPage } from 'next'
import Link from 'next/link'
import Buttons from '@components/Buttons'
import HeadPage from '@components/HeadPage'
import { ContainerMain } from '@styles/container'

const Home: NextPage = () => (
  <>
    <HeadPage titlePage="Default Theme" />
    <ContainerMain>
      <div>
          <Link href="/login"><a style={{padding: '40px'}}>Login</a></Link>
          <Colors />
          <Buttons /> 
      </div>
    </ContainerMain>
  </>
)

export default Home
