import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/contact/front.jpg'
import { useTranslation } from 'react-i18next'
import Container from '../components/Atoms/Container'
import Contact from '../components/Molecules/Contact'
import Head from 'next/head'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>Contact - Domaine De Merugat</title>
      </Head>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />
      <Container>
        <Contact />
      </Container>
    </>
  )
}

export default Home
