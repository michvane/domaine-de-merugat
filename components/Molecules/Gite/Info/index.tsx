import styled from 'styled-components'
import colors from '../../../../constants/colors'
import Button from '../../../Atoms/Button'

const GiteInfo: React.FC = () => {
  return (
    <Grid>
      <BlockRight>
        <SmallTitle>Praktische info</SmallTitle>
        <ul>
          <li>De gite is voorzien voor maximum 6 personen.</li>
          <li>1 slaapkamer met boxspring bed van 180cm x 200cm</li>
          <li>1 slaapkamer met boxspring bed van 160cm x 200cm</li>
          <li>1 slaapkamer met 2x een-persoonsbedden van 90cm x 200cm</li>
          <li>Badkamer met inloopdouche, lavabo en toilet</li>
          <li>
            Keuken met grote koelkast en diepvries gedeelte. Elektrisch fornuis met oven, afwasmachine, microgolf oven
            en Senseo apparaat
          </li>
          <li>Lakens en badhanddoeken in de prijs inbegrepen</li>
          <li>Opgemaakte bedden bij aankomst</li>
          <li>Groot overdekt terras met tuinmeubelen en gas-barbeque</li>
          <li>Zwembad van 10m x 5m</li>
          <li>Gratis WiFi</li>
          <li>Petanquebaan</li>
          <li>Wasmachine en droogkast ter beschikking tegen kleine meerprijs</li>
        </ul>
      </BlockRight>
      <BlockLeft></BlockLeft>
    </Grid>
  )
}

const SmallTitle = styled.p`
  color: ${colors.main};
  text-transform: uppercase;
  font-weight: bold;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 4rem;
`

const BlockRight = styled.div`
  padding: 3rem;
  background-color: ${colors.main}15;
`

const BlockLeft = styled.div`
  height: 100%;
  background-image: url('/img/pool.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default GiteInfo
