import styled from 'styled-components'
import colors from '../../../../constants/colors'
import Button from '../../../Atoms/Button'

const GiteInfo: React.FC = () => {
  return (
    <Grid>
      <BlockRight>
        <SmallTitle>Bezienswaardigheden</SmallTitle>
        <p style={{ lineHeight: '1.6rem', marginBottom: '2rem' }}>
          Domaine de Merugat Chambre d'Hôtes ligt in Valeilles en biedt een seizoensgebonden buitenzwembad, een tuin en
          een terras. De accommodatie ligt op 18 km van Villeneuve-sur-Lot en biedt gratis WiFi en
          privéparkeergelegenheid. De bed & breakfast biedt een continentaal of à-la-carteontbijt. Agen ligt op 36 km
          van Domaine de Merugat Chambre d'Hôtes en Moissac ligt op 42 km van de accommodatie. De dichtstbijzijnde
          luchthaven is Agen La Garenne, op 34 km van de accommodatie.
        </p>
        <Button>Bekijk meer bezienswaardigheden</Button>
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
