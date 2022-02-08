import { mq } from 'constants/mediaQueries'
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
        <p>
          Na 27 jaar een hectisch leven geleid te hebben als zelfstandige, waren we dringend toe aan een rustiger leven.
          Vier jaar geleden toen we in de Tarn-et-Garonne streek met vakantie waren, gebeurde het, we werden verliefd.
          Verliefd op deze streek. We waren overweldigd door de mooie natuur, de uitgestrekte velden en de pittoreske
          kleine dorpjes. Maar wat ons vooral opviel, was de stilte. En te midden van deze overweldigende natuur, vonden
          we onze droomplek: "Domaine de Merugat". We hebben niet geaarzeld, dit was de plaats waar we ons leven verder
          wilden zetten! En we willen graag deze heerlijke plek met jullie delen!
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
  grid-template-columns: 1fr;
  margin-bottom: 4rem;

  @media (min-width: ${mq.mobile}) {
    grid-template-columns: 40% 60%;
  }
`

const BlockRight = styled.div`
  padding: 1rem;
  background-color: ${colors.main}15;

  @media (min-width: ${mq.mobile}) {
    padding: 3rem;
  }
`

const BlockLeft = styled.div`
  padding: 1rem;
  @media (min-width: ${mq.mobile}) {
    padding: 3rem;
  }
`

export default AboutUs
