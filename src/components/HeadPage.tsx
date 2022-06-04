import Head from "next/head";
import { iHeadPage } from "../@types/components";
 
const HeadPage = ({titlePage}: iHeadPage): JSX.Element => {
    return(<>
    <Head>
        <title>{titlePage}</title>
    </Head>
    </>)
}

export default HeadPage;