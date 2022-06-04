import type { NextPage } from 'next'
import Buttons from '../components/Buttons' 
import HeadPage from '../components/HeadPage' 
import { ContainerMain } from '../styles/container'  

const Home: NextPage = () => {
  return (<>
  <HeadPage titlePage="Default Theme"/>
  <ContainerMain>
  <div>
    <h1 style={{textAlign: 'center', marginBottom: '10px', marginTop: '10px'}}>The theme</h1> 
     
  </div>
  </ContainerMain>
  </>)
}

export default Home
