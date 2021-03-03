import Head from 'next/head'
import Navbars from '@components/Navbars'
import Footer from '@components/Footer'
import HeaderFam from '@components/Families/HeaderFam'
import FamiliesMember from '@components/Families/FamiliesMember'

import { fetchPastFamily, fetchCurrentFamily} from '@util/contentfulPosts'


export async function getStaticProps() {
    let res1 = await fetchPastFamily()
    const pastFamily = await res1.map((a) => {
      return a.fields
    })
    let res2 = await fetchCurrentFamily()
    const currentFamily = await res2.map((a) => {
      return a.fields
    })
  
    return {
      props: {
        pastFamily,
        currentFamily
      },
    }
}

export default function Families ({currentFamily, pastFamily}){
    return(
        <html>
            <Head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Inisiatif Mampu | Mampu Families</title>
                <link rel="icon" href="/favicon.ico" />

                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
                />
            </Head>
            <Navbars />
            {/* <HeaderFam /> */}
            <FamiliesMember currentFamily={currentFamily} pastFamily={pastFamily}/>
            <Footer/>
        </html>
    )
}