import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/gite/overview.jpg'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import GiteCarousel from '../components/Molecules/Carousel/gite'
import GiteIntro from '../components/Molecules/Gite/Intro'
import GiteInfo from '../components/Molecules/Gite/Info'
import colors from '../constants/colors'
import SmallTitle from '../components/Atoms/SmallTitle'

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
      <div style={{ backgroundColor: `${colors.main}15` }}>
        <Container>
          <SmallTitle>Pkatische Info</SmallTitle>
          <p>
            We zijn verheugd jullie te melden dat onze gîte in januari 2021 geklasseerd werd met 3 sterren! Onze gîte is
            geschikt voor 6 personen en heeft 3 slaapkamers. De gîte is een losstaand gebouw en heeft zicht op een grote
            tuin met zwembad. Er is 1 slaapkamer met een boxspringbed van 180x200cm, 1 kamer met een boxspringbed van
            160x200cm en 1 slaapkamer met 2 éénpersoonsbedden van 90x200cm. In de vernieuwde badkamer staat er een
            inloopdouche, lavabo en toilet. Er is een volledig ingerichte keuken met koelkast met groot
            diepvriesgedeelte, een elektrisch fornuis met oven, een afwasmachine, microgolfoven en Senseo. Lakens en
            handdoeken zijn in de prijs inbegrepen. Wij zorgen voor opgemaakte bedden bij aankomst. Een babybedje is
            gratis ter beschikking. Graag op voorhand te reserveren. Aan de gîte is een groot overdekt terras met
            tuinmeubelen en gasbarbeque. In de grote aangelegde tuin is er een zwembad van 10m x 5m. Nieuw!! In de zomer
            van 2020 hebben we voor de liefhebbers een petanquebaan aangelegd! Tegen een kleine meerprijs staat er een
            wasmachine en droogkast ter beschikking
          </p>
        </Container>
      </div>
    </>
  )
}

const ImgWrapper = styled.div``

export default Gite
