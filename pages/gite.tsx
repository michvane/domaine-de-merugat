import type { NextPage } from 'next'
import Image from 'next/image'
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
        <Image src={front} fill style={{ objectFit: 'cover' }} alt="Picture of the whole area" />
      </ImgWrapper>
      <Container>
        <GiteIntro />
        <GiteCarousel />
        <GiteInfo />
      </Container>
    </>
  )
}

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
`

export default Gite
