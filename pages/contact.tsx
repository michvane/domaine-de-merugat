import type { NextPage } from 'next'
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
        <img src={typeof front === 'string' ? front : front.src} alt="Picture of the whole area" />
      </ImageContainer>
      <Container>
        <Contact />
      </Container>
    </>
  )
}

import { mq } from 'constants/mediaQueries'
import colors from '../constants/colors'

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  min-height: 300px;
  overflow: hidden;

  @media (min-width: ${mq.mobile}) {
    height: 50vh;
    min-height: 400px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export default Home
