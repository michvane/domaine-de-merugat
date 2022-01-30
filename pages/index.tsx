import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/front-page.jpg'
import Container from '../components/Atoms/Container'
import Reviews from '../components/Molecules/Reviews'
import AboutUs from '../components/Molecules/AboutUs'
import Carousel from '../components/Molecules/Carousel'
import RestAndRelaxation from '../components/Molecules/RestAndRelaxation'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />
      <Container>
        <AboutUs />
        <Carousel />
        <RestAndRelaxation />
        <Intermediary>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '1000px',
            }}
          >
            Sinds 3 jaar baten we een gîte voor 6 personen en een B&B kamer uit. Wie houdt van een heerlijk ontspannen
            vakantie, is bij ons aan het juiste adres. Even herbronnen, genieten van zon en zwembad, niets hoeft! Geen
            zin om voor ontbijt te zorgen of om te koken? Laat het tijdig weten, dan doen wij dat graag voor jullie! Heb
            je nog vragen? Aarzel niet ons te contacteren. <br />
            We hopen jullie hier in Domaine de Merugat te mogen verwelkomen!
          </p>
        </Intermediary>
        <Reviews />
      </Container>
    </>
  )
}

const Intermediary = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`

export default Home
