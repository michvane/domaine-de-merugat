import type { NextPage } from 'next'
import front from '../public/img/gite/overview.jpg'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import GiteCarousel from '../components/Molecules/Carousel/gite'
import GiteIntro from '../components/Molecules/Gite/Intro'
import GiteInfo from '../components/Molecules/Gite/Info'
import Head from 'next/head'
import HeaderImage from '../components/Atoms/HeaderImage'

const Gite: NextPage = () => {
  const imageSrc = typeof front === 'string' ? front : front.src

  return (
    <>
      <Head>
        <title>Gîte - Domaine De Merugat</title>
        <link rel="preload" as="image" href={imageSrc} />
      </Head>
      <HeaderImage src={front} alt="Picture of the whole area" priority />
      <Container>
        <GiteIntro />
        <GiteCarousel />
        <GiteInfo />
      </Container>
    </>
  )
}

export default Gite
