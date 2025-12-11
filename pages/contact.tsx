import type { NextPage } from 'next'
import front from '../public/img/contact/front.jpg'
import Container from '../components/Atoms/Container'
import Contact from '../components/Molecules/Contact'
import Head from 'next/head'
import HeaderImage from '../components/Atoms/HeaderImage'

const Home: NextPage = () => {
  const imageSrc = typeof front === 'string' ? front : front.src

  return (
    <>
      <Head>
        <title>Contact - Domaine De Merugat</title>
        <link rel="preload" as="image" href={imageSrc} />
      </Head>
      <HeaderImage src={front} alt="Picture of the whole area" priority />
      <Container>
        <Contact />
      </Container>
    </>
  )
}

export default Home
