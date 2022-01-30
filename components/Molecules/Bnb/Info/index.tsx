import styled from 'styled-components'
import colors from '../../../../constants/colors'

const GiteInfo: React.FC = () => {
  return (
    <Grid>
      <BlockRight>
        <SmallTitle>Praktische info</SmallTitle>
        <ul>
          <li>Grote romantische kamer met mooie oude balken van 35m² met boxspring van 180cm x 200cm.</li>
          <li>Aangrenzend een volledig vernieuwde privé badkamer met douche, lavabo en toilet.</li>
          <li>De kamer heeft een aparte ingang in het hoofdgebouw.</li>
          <li>Lakens, badhanddoeken en badjassen zijn in de prijs ingegrepen.</li>
          <li>Uitgebreid ontbijt met vers gebakken brood, huisgemaakte confituren en locale streekproducten</li>
          <li>Grote aangelegde tuin met zwembad van 10x5m, ligtstoelen en parasols.</li>
          <li>Gratis WiFi.</li>
          <li>Aankomst vanaf 16u. Gelieve de kamer te verlaten voor 10u.</li>
          <li>Een babybedje + kinderstoel kan mits aanvraag voorzien worden (10 euro).</li>
          <li>Roken op de kamer is niet toegestaan.</li>
          <li>Huisdieren niet toegelaten.</li>
        </ul>
      </BlockRight>
      <BlockLeft />
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
