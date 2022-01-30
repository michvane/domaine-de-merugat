import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/bnb/front.jpg'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import Intro from '../components/Molecules/Bnb/Intro'
import Info from '../components/Molecules/Bnb/Info'
import BnbCarousel from '../components/Molecules/Carousel/bnb'

const Bnb: NextPage = () => {
  return (
    <>
      <ImgWrapper>
        <Image src={front} layout="responsive" alt="Picture of the whole area" />
      </ImgWrapper>
      <Container>
        <Intro />
        <BnbCarousel />
        <Info />
      </Container>
    </>
  )
}

const ImgWrapper = styled.div`
  /* max-height: 580px; */
`

export default Bnb
