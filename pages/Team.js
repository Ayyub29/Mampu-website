import Head from 'next/head'
import Navbars from '@components/Navbars'
import HeaderTeam from '@components/Team/HeaderTeam'
import TeamMember from '@components/Team/TeamMember'
import Footer from '@components/Footer'

import { fetchAdvisors, fetchMampuprogramme, fetchLegaldivision, fetchDonorengagement, fetchDigitalfundraising, fetchOngroundfundraising } from '@util/contentfulPosts'

export async function getStaticProps() {
    let res1 = await fetchAdvisors()
    const advisors = await res1.map((a) => {
      return a.fields
    })
    let res2 = await fetchMampuprogramme()
    const mampuProgramme = await res2.map((a) => {
      return a.fields
    })
    let res3 = await fetchLegaldivision()
    const legalDivision = await res3.map((a) => {
      return a.fields
    })
    let res4 = await fetchDonorengagement()
    const donorEngagement = await res4.map((a) => {
      return a.fields
    })
    let res5 = await fetchDigitalfundraising()
    const digitalFundraising = await res5.map((a) => {
      return a.fields
    })
    let res6 = await fetchOngroundfundraising()
    const onGroundFundraising = await res6.map((a) => {
      return a.fields
    })
  
    return {
      props: {
        advisors,
        mampuProgramme,
        legalDivision,
        donorEngagement,
        digitalFundraising,
        onGroundFundraising,
      },
    }
}

export default function Team ({advisors, mampuProgramme, legalDivision, donorEngagement, digitalFundraising, onGroundFundraising }){
    console.log(legalDivision);
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
            <TeamMember key={advisors} advisors={advisors} mampuProgramme={mampuProgramme} legalDivision={legalDivision} donorEngagement={donorEngagement} digitalFundraising={digitalFundraising} onGroundFundraising={onGroundFundraising}/>
            <Footer />
        </html>
    )
}

