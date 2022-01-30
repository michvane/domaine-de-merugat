import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/front-page.jpg'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import Reviews from '../components/Molecules/Reviews'
import AboutUs from '../components/Molecules/AboutUs'
import Carousel from '../components/Molecules/Carousel'
import RestAndRelaxation from '../components/Molecules/RestAndRelaxation'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />
      <Container>
        {/* <Welcome>
          <h2>Helga en Kris verwelkomen u graag op hun domein Merugat in Valeilles.</h2>
          <p>
            Het vakantiedomein is gelegen in een rustige omgeving tussen de weilanden. Een echte ontsnapping uit de
            drukke realiteit.
          </p>
        </Welcome> */}
        <AboutUs />
        <Carousel />
        <RestAndRelaxation />
        <Reviews />
      </Container>
    </>
  )
}

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`

export default Home
