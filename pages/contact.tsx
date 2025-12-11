import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/contact/front.jpg'
import Container from '../components/Atoms/Container'
import Contact from '../components/Molecules/Contact'
import Head from 'next/head'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Domaine De Merugat</title>
      </Head>
      <ImageContainer>
        <Image src={front} fill style={{ objectFit: 'cover' }} alt="Picture of the whole area" />
      </ImageContainer>
      <Container>
        <Contact />
      </Container>
    </>
  )
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
`

export default Home
