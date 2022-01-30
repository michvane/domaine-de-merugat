import styled from 'styled-components'
import colors from '../../../constants/colors'
import Button from '../../Atoms/Button'

const RestAndRelaxation: React.FC = () => {
  return (
    <Grid>
      <BlockRight>
        <SmallTitle>Rust en ontspanning</SmallTitle>
        <p style={{ lineHeight: '1.6rem' }}>
          Kris en Helga zorgen voor een gemoedelijke sfeer en persoonlijke aandacht voor elke gast. Zo is er regelmatig
          zelfgebakken brood en huisbereide confituren. Streekproducten zoals kaas- en charcuterieschotels worden ook
          regelmatig voorzien van één van de vele lokale markten.
        </p>
        <p style={{ lineHeight: '1.6rem', marginBottom: '2rem' }}>
          De omgeving straalt rust uit, ideaal voor een zorgeloze en ontspannen vakantie. Maar ook voor de sportieve
          vakantiegangers is Merugat een echt paradijs. Met de talrijke wandel- en fietsroutes in de buurt kan u uw
          hartje ophalen.
        </p>
        <Button>Bekijk de kamers</Button>
      </BlockRight>
      <BlockLeft>
        <img src="/img/front-view.jpg" style={{ width: '100%' }} />
      </BlockLeft>
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
  grid-template-columns: 40% 60%;
  margin-bottom: 4rem;
`

const BlockRight = styled.div`
  padding: 3rem;
  background-color: ${colors.main}15;
`

const BlockLeft = styled.div`
  /* padding: 3rem; */
`

export default RestAndRelaxation
