import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'
import { StyledLink } from '../../Atoms/Button'

const AboutUs: React.FC = () => {
  return (
    <Grid>
      <BlockLeft>
        <SmallTitle>Over ons</SmallTitle>
        <h2>Helga en Kris verwelkomen u graag op hun Domaine de Merugat in Valeilles.</h2>
      </BlockLeft>
      <BlockRight>
        <p style={{ marginBottom: '2rem' }}>
          Kris en Helga zorgen voor een gemoedelijke sfeer en persoonlijke aandacht voor elke gast. Zo is er regelmatig
          zelfgebakken brood en huisbereide confituren. Streekproducten zoals kaas- en charcuterieschotels worden ook
          regelmatig voorzien van één van de vele lokale markten.
        </p>
        <Link href="/over-ons">
          <StyledLink>Lees meer</StyledLink>
        </Link>
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

export default AboutUs
