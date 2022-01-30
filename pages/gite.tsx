import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/gite/overview.jpg'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import GiteCarousel from '../components/Molecules/Carousel/gite'
import GiteIntro from '../components/Molecules/Gite/Intro'
import GiteInfo from '../components/Molecules/Gite/Info'


const Gite: NextPage = () => {
  return (
    <>
      <ImgWrapper>
        <Image src={front} layout="responsive" alt="Picture of the whole area" />
      </ImgWrapper>
      <Container>
        <GiteIntro />
        <GiteCarousel />
        <GiteInfo />
      </Container>
    </>
  )
}

const ImgWrapper = styled.div``

export default Gite
