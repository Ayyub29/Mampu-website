import Head from 'next/head'

import { fetchTestimoni } from '@util/contentfulPosts'

import Navbars from '@components/Navbars'
import Header from '@components/Home/Header'
import ImpactNumbers from '@components/Home/ImpactNumbers'
import Testimoni from '@components/Home/Testimoni'
import Footer from '@components/Footer'
import Newsletter from '@components/Home/Newsletter'

export async function getStaticProps() {
  let res1 = await fetchTestimoni()
  const testimoni = await res1.map((a) => {
    return a.fields
  })

  return {
    props: {
      testimoni,
    },
  }
}

export default function Home({ testimoni }) {
  console.log(testimoni);
  return (
    <html>
      <Head>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>MAMPU Initiative</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>

      <Navbars />
      <Header />
      <ImpactNumbers />
      <Newsletter />
      <Testimoni testimoni={testimoni}  />

      <Footer />
    </html>
  )
}