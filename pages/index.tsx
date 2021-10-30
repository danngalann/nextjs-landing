import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Header/Navbar'
import Carousel from '../components/Home/Carousel/Carousel'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Congelados Inserte</title>
        <meta name="description" content="Empresa de congelados en granollers" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Carousel />
    </div>
  )
}

export default Home
