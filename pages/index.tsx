import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Header/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Congelados Inserte</title>
        <meta name="description" content="Empresa de congelados en granollers" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
    </div>
  )
}

export default Home
