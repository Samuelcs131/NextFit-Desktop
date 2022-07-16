import Head from "next/head";
import { iHeadPage } from "../@types/components";
 
const HeadPage = ({titlePage}: iHeadPage): JSX.Element => {
    return(<>
    <Head>
        <title>{titlePage + ' | NextFit'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

        {/* SEO */}
        <meta name="description" content="nextfit"/>
        <meta name="keywords" content="nextfit"/>
        <meta name="author" content="Samuel Claudino"/>
        <meta name="copyright" content="nextfit2022"/>
        <meta name="theme-color" content="#2F2B54"/>
        <meta httpEquiv="content-language" content="pt-br"/>
        <meta property="og:title" content="nextfit"/>
        <meta property="og:description" content="nextfit"/>
    </Head>
    </>)
}

export default HeadPage;