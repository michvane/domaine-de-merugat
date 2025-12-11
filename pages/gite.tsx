import type { NextPage } from 'next'
import front from '../public/img/gite/overview.jpg'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import GiteCarousel from '../components/Molecules/Carousel/gite'
import GiteIntro from '../components/Molecules/Gite/Intro'
import GiteInfo from '../components/Molecules/Gite/Info'
import Head from 'next/head'

const Gite: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gîte - Domaine De Merugat</title>
      </Head>
      <ImgWrapper>
        <img src={typeof front === 'string' ? front : front.src} alt="Picture of the whole area" />
      </ImgWrapper>
      <Container>
        <GiteIntro />
        <GiteCarousel />
        <GiteInfo />
      </Container>
    </>
  )
}

import colors from '../constants/colors'

import { mq } from 'constants/mediaQueries'

const ImgWrapper = styled.div`
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

export default Gite
