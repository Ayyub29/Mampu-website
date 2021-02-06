import Head from 'next/head'
import Navbars from '@components/Navbars'
import HeaderTeam from '@components/HeaderTeam'
import TeamMember from '@components/TeamMember'
import Footer from '@components/Footer'

import { fetchEntries } from '@util/contentfulPosts'

export async function getStaticProps() {
    let res = await fetchEntries({
      content_type: "advisors"
    })
    const advisors = await res.map((p) => {
      return p.fields
    })
  
    return {
      props: {
        advisors,
      },
    }
  }

export default function Team ({advisors}){
    console.log(advisors);
    return(
        <html>
            <Head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Inisiatif Mampu | Meet Our Team</title>
                <link rel="icon" href="/favicon.ico" />

                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
                />
            </Head>
            <Navbars />
            <HeaderTeam />
            <TeamMember />
            <Footer />
        </html>
    )
}

