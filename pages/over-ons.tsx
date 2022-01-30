import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/over-ons/front-3.jpg'
import { useTranslation } from 'react-i18next'
import Container from '../components/Atoms/Container'
import SmallTitle from '../components/Atoms/SmallTitle'
import colors from '../constants/colors'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />
      <Container>
        <div style={{ backgroundColor: `${colors.main}15`, marginBottom: '2rem', padding: '2rem' }}>
          <SmallTitle>Over ons</SmallTitle>
          <p>
            Na 27 jaar een hectisch leven geleid te hebben als zelfstandige, waren we dringend toe aan een rustiger
            leven. Vier jaar geleden toen we in de Tarn-et-Garonne streek met vakantie waren, gebeurde het, we werden
            verliefd. Verliefd op deze streek. We waren overweldigd door de mooie natuur, de uitgestrekte velden en de
            pittoreske kleine dorpjes. Maar wat ons vooral opviel, was de stilte. En te midden van deze overweldigende
            natuur, vonden we onze droomplek: "Domaine de Merugat". We hebben niet geaarzeld, dit was de plaats waar we
            ons leven verder wilden zetten! En we willen graag deze heerlijke plek met jullie delen! <br /> Sinds 3 jaar
            baten we een gîte voor 6 personen en een B&B kamer uit.
          </p>
          <p>
            Wie houdt van een heerlijk ontspannen vakantie, is bij ons aan het juiste adres. Even herbronnen, genieten
            van zon en zwembad, niets hoeft! Geen zin om voor ontbijt te zorgen of om te koken? Laat het tijdig weten,
            dan doen wij dat graag voor jullie! Heb je nog vragen? Aarzel niet ons te contacteren. We hopen jullie hier
            in Domaine de Merugat te mogen verwelkomen!
            <br />
            <br />
            Welkom!
            <br /> Kris en Helga
          </p>
        </div>

        <div style={{ backgroundColor: `${colors.main}15`, padding: '2rem' }}>
          <SmallTitle>Omgeving</SmallTitle>
          <p>
            Domaine de Merugat is gelegen in de prachtige natuur van de Tarn-et-Garonne streek, te midden van bos en
            weilanden.
          </p>
          <p>
            Agen ligt op 36 km van Domaine de Merugat Chambre d'Hôtes en Moissac ligt op 42 km van de accommodatie. De
            dichtstbijzijnde luchthaven is Agen La Garenne, op 34 km van de accommodatie.
          </p>
        </div>
      </Container>
    </>
  )
}

export default Home
