import styled from 'styled-components'
import colors from '../../../constants/colors'
import { StyledLink } from '../../Atoms/Button'
import Link from 'next/link'

const RestAndRelaxation: React.FC = () => {
  return (
    <Grid>
      <BlockRight>
        <SmallTitle>Rust en ontspanning</SmallTitle>
        <p style={{ lineHeight: '1.6rem' }}>
          Kris en Helga zorgen voor een gemoedelijke sfeer en persoonlijke aandacht voor elke gast. Onze Gîte en B&B
          kamer zijn gelegen in een rustige omgeving tussen weilanden en prachtige natuur. De omgeving straalt rust uit,
          ideaal voor een zorgeloze en ontspannen vakantie. Maar ook voor de sportieve vakantiegangers is Merugat een
          echt paradijs. Met de talrijke wandel- en fietsroutes in de buurt kan u uw hartje ophalen.
        </p>
        <p style={{ lineHeight: '1.6rem', marginBottom: '2rem' }}>
          's Morgens verwennen we jullie met uigebreid ontbijt, zelfgebakken brood en huisgemaakte confituren, yoghurt,
          kaas en charcuterie, eitjes, fruitsalade en meer heerlijke dingen. Drie maal per week kan je aanschuiven aan
          onze table d'hôtes mits 1 dag op voorhand reserveren.
        </p>
        <Link href={'/gite'} passHref>
          <StyledLink style={{ marginRight: '1rem' }}>Bekijk de Gîte</StyledLink>
        </Link>
        <Link href={'/bnb'} passHref>
          <StyledLink>Bekijk de B&B</StyledLink>
        </Link>
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
  grid-template-columns: 40% 60%;
  margin-bottom: 4rem;
`

const BlockRight = styled.div`
  padding: 3rem;
  background-color: ${colors.main}15;
`

const BlockLeft = styled.div`
  height: 100%;
  background-image: url('/img/front-view.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default RestAndRelaxation
