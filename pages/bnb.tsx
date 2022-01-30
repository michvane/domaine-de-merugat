import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/bnb/front.jpg'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import Intro from '../components/Molecules/Bnb/Intro'
import Info from '../components/Molecules/Bnb/Info'
import colors from '../constants/colors'
import SmallTitle from '../components/Atoms/SmallTitle'
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
      <div style={{ backgroundColor: `${colors.main}15` }}>
        <Container>
          <SmallTitle>Pkatische Info</SmallTitle>
          <p>
            De kamer is voorzien van een boxspring van 180x200cm en heeft aangrenzend een volledig vernieuwde privé
            badkamer met douche, lavabo en toilet. De kamer heeft een aparte ingang in het hoofdgebouw. Lakens,
            handdoeken en badhanddoeken zijn in de prijs ingegrepen. Badjassen zijn gratis in de kamer voorzien. Een
            babybedje kan mits aanvraag voorzien worden. Elke morgen verwennen we jullie met een uitgebreid continentaal
            ontbijt met versgebakken brood, huisgemaakte confituren en lokale streekproducten. In de grote aangelegde
            tuin kan u genieten van een heerlijke plons in het zwembad van 10x5m of heerlijk wegdromen in één van de
            ligzetels. Er zijn voldoende parasols aanwezig.
          </p>
        </Container>
      </div>
    </>
  )
}

const ImgWrapper = styled.div`
  /* max-height: 580px; */
`

export default Bnb
