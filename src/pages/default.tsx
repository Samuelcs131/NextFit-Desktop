import Buttons from "@components/Buttons"
import Colors from "@components/Colors"
import HeadPage from "@components/HeadPage"
import { ContainerMain } from "@styles/container"
import { NextPage } from "next"
import Link from "next/link"

const Default: NextPage = () => {
    return(<>
    <HeadPage titlePage="Default Theme" />
    <ContainerMain>
      <div>
          <Link href="/login"><a style={{padding: '40px'}}>Login</a></Link>
          <Colors />
          <Buttons /> 
      </div>
    </ContainerMain>
    </>)
}

export default Default