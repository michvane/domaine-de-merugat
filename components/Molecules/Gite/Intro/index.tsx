import styled from 'styled-components'
import colors from '../../../../constants/colors'
import Button from '../../../Atoms/Button'

const GiteIntro: React.FC = () => {
  return (
    <Grid>
      <BlockLeft>
        <SmallTitle>Onze Gite</SmallTitle>
        <h2>Wij verwelkomen u graag in onze Gite De Merugat</h2>
      </BlockLeft>
      <BlockRight>
        <p style={{ lineHeight: '1.6rem' }}>
          We zijn verheugd jullie te melden dat onze gîte in januari 2021 geklasseerd werd met 3 sterren! U verblijft in
          een losstaande gîte met 3 slaapkamers. De gîte met overdekt terras kijkt uit op de aangelegde tuin en zwembad,
          en is voorzien van alle comfort voor een fantastisch verblijf. Wie houdt van een heerlijk ontspannen vakantie,
          is bij ons aan het juiste adres. Even herbronnen, genieten van zon en zwembad, niets hoeft! Geen zin om voor
          ontbijt te zorgen of om te koken? Laat het tijdig weten, dan doen wij dat graag voor jullie!
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
