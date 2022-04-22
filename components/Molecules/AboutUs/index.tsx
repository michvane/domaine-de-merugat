import { mq } from 'constants/mediaQueries'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import colors from '../../../constants/colors'
import { StyledLink } from '../../Atoms/Button'

const AboutUs: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Grid>
      <BlockLeft>
        <SmallTitle>{t('home.about-us.about-us')}</SmallTitle>
        <h2>{t('home.about-us.welcome')}</h2>
      </BlockLeft>
      <BlockRight>
        <p>{t('home.about-us.block-right')}</p>
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
