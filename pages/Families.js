import Head from 'next/head'
import Navbars from '@components/Navbars'
import Footer from '@components/Footer'
import FamiliesMember from '@components/Families/FamiliesMember'

export default function Families (){
    return(
        <html>
            <Head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>MAMPU Initiative | Mampu Families</title>
                <link rel="icon" href="/favicon.ico" />

                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
                />
            </Head>
            <Navbars />
            
            <FamiliesMember/>
            <Footer/>
        </html>
    )
}