import type { NextPage } from 'next'
import HeadPage from '@components/HeadPage'
import { ContainerMain } from '@styles/container' 


const Home: NextPage = () => { 

  return(<>
    <HeadPage titlePage="Home" />

    <ContainerMain>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quo alias nesciunt accusamus ullam quos corrupti velit pariatur culpa, distinctio odit fuga, corporis maxime iure error. Dolorem ad animi ratione.</p>
    </ContainerMain>
  </>
)
}

export default Home
