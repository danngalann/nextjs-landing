import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Header/Navbar'
import Carousel from '../components/Common/Carousel'
import { media, mediaByIndex } from '../components/Home/Carousel/HomeCarouselMedia'
import Awm from '../components/Home/AlternativeWithMedia'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Congelados Inserte</title>
        <meta name="description" content="Empresa de congelados en granollers" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Carousel media={media} mediaByIndex={mediaByIndex}/>
      <Awm />
    </div>
  )
}

export default Home
