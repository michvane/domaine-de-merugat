import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import SmallTitle from '../components/Atoms/SmallTitle'
import colors from '../constants/colors'
import front from '../public/img/tarieven/front.jpg'
import Image from 'next/image'

const Tariffs: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />

      <Container>
        <h1>{t('tarrifs.tarrifs')}</h1>
        <Grid>
          <TextDiv>
            <SmallTitle>Prijs Gîte 2022</SmallTitle>
            <p>Gîte voor max 6 personen</p>
            <strong>Hoogseizoen van 01/07/2022 tot 31/08/2022</strong>
            <p>
              Enkel te boeken met aankomst en vertrek op zaterdag <br />
              Week : 1100 € <br /> Eindschoonmaak : 50 €
            </p>
            <strong>Tussenseizoen van 16/06/2022 tot 30/06/2022 en van 01/09/2022 tot 15/09/2022 </strong>
            <p>
              Week-end : 300 € tot 400 € (2 of 3 nachten)
              <br /> Mid-week : 550 € (4 nachten)
              <br /> Week : 900 €
              <br /> Eindschoonmaak : 50 €
            </p>
            <strong>Laag seizoen van 01/04/2022 tot 15/06/2022 en van 15/09 tot 15/11/2022 </strong>
            <p>
              Week-end : 250 € tot 350 € (2 of 3 nachten)
              <br /> Mid-week : 500 € (4 nachten)
              <br /> Week : 800 € <br />
              Eindschoonmaak : 50 €
            </p>
            <p>
              Onze prijzen zijn exclusief toeristentaks : 0,50 € p.p/nacht voor + 18 jaar. De eindschoonmaak en
              toeristentaks worden ter plaatse cash afgerekend.
            </p>
            <p>
              Ontbijt tot 5 jaar gratis. <br /> Van 5-12 jaar: 10 euro. <br /> Vanaf 13 jaar: 15 euro.
            </p>
            <p>Aankomst vanaf 16 uur, bij vertrek dient de gîte vrij te zijn om 10 uur. </p>
            <p>
              Waarborg: 250 € cash te betalen bij aankomst. <br /> Voorschot: 50% van de totale huurprijs te betalen
              binnen de 7 dagen na reservering. Boeking is definitief na ontvangst van het voorschot. Het saldo dient
              betaald te worden uiterlijk 8 weken voor aankomst.
            </p>
            <p>Wij aanvaarden geen betaalkaarten.</p>
          </TextDiv>
          <TextDiv>
            <SmallTitle>PRIJS B&B KAMER 2022</SmallTitle>
            <p>Kamer voor 2 personen</p>
            <strong>Hoog seizoen van 01/07/2022 tot 31/08/2022</strong>
            <p>
              Prijs per nacht : 110 € <br />
              Minimum 2 nachten
            </p>
            <strong>Midden 01/06/2022 tot 30/06/2022 en van 01/09/2022 tot 30/09/2022</strong>
            <p>
              Prijs per nacht : 99 € <br /> Minimum 2 nachten
            </p>
            <strong>Laag seizoen van 16/01/2022 tot 31/05/2022 en van 01/10/2022 tot 15/12/2022</strong>
            <p>Prijs per nacht : 85 € </p>
            <strong>Van 16/12/2022 tot 15/01/2023 </strong> <p>Prijs op aanvraag </p>
            <p>
              Prijzen zijn inclusief uitgebreid ontbijt. <br /> Toeristentaks niet inbegrepen. (0,50 € p.p/nacht + 18
              jaar)
            </p>
            <p>Aankomst vanaf 16u, bij vertrek dient de kamer vrij te zijn om 10 uur. </p>
            <p>
              Voorschot: 50% van de totale huurprijs te betalen binnen de 7 dagen na reservering. Boeking is definitief
              na ontvangst van het voorschot. Het saldo dient betaald te worden uiterlijk 8 weken voor aankomst.
            </p>
            <p>Wij aanvaarden geen betaalkaarten.</p>
          </TextDiv>
        </Grid>
        <TextDiv>
          <SmallTitle>Annulatie voorwaarden</SmallTitle>
          <p>
            Bij annulering van de overeenkomst is de huurder de annuleringskosten verschuldigd die afhankelijk zijn van
            het moment van annulering. <br />
            Tot 8 weken voor de aankomstdag : 50% van de totale huursom. <br />
            Minder dan 8 weken voor de aankomstdag : 100% van de totale huursom.
          </p>
          <SmallTitle>Corona maatregelingen</SmallTitle>
          <p>
            Wij hanteren de “Corona Annulatie Garantie” waarbij de reeds betaalde voorschotten en saldo bedragen niet
            verloren gaan in geval van een reisverbod ten gevolge van het coronavirus. De reisdatum kan kosteloos worden
            gewijzigd binnen dezelfde boekingsklasse en volgens beschikbaarheid.
          </p>
        </TextDiv>
      </Container>
    </>
  )
}

const TextDiv = styled.div`
  background-color: ${colors.main}15;
  padding: 2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 2rem;
  margin-bottom: 2rem;
`

export default Tariffs
