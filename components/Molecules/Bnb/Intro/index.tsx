import styled from 'styled-components'
import colors from '../../../../constants/colors'
import Button from '../../../Atoms/Button'

const GiteIntro: React.FC = () => {
  return (
    <Grid>
      <BlockLeft>
        <SmallTitle>Onze BNB</SmallTitle>
        <h2>Wij verwelkomen u graag in onze BNB De Merugat</h2>
      </BlockLeft>
      <BlockRight>
        <p style={{ lineHeight: '1.6rem' }}>
          U logeert in een grote romantische kamer van 35m2 met mooie authentieke gebinten. De aangrenzende
          privé-badkamer werd recent volledig vernieuwd. De kamer heeft een aparte ingang in het hoofdgebouw. Uitgebreid
          verwenontbijt met lokale producten en huisbereide confituur. Je kan gebruik maken van de aangelegde tuin met
          zwembad.
        </p>
      </BlockRight>
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
  padding: 3rem;
`

export default GiteIntro
