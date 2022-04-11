import type { NextPage } from 'next'
import Head from 'next/head'
import MainHOC from '../HOC/main.hoc'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Coded by Markos Bahgat" />
        <link rel="icon" href="/favicon-32x32.png"/>
      </Head>
      <div className={styles.container}>
        <MainHOC/>
      </div>
    </main>
  )
}

export default Home
