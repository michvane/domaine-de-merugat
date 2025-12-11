import { mq } from 'constants/mediaQueries'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import colors from '../../../constants/colors'

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
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin: 0 0 0.5rem 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
  gap: 0;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: ${mq.mobile}) {
    margin-bottom: 5rem;
    grid-template-columns: 40% 60%;
    gap: 0;
  }
`

const BlockRight = styled.div`
  padding: 1.5rem;
  background: ${colors.beige};
  border-radius: 0 0 8px 8px;

  @media (min-width: ${mq.mobile}) {
    padding: 3.5rem;
    border-radius: 0 8px 8px 0;
  }

  p {
    color: ${colors.text.secondary};
    font-size: 0.95rem;
    line-height: 1.7;

    @media (min-width: ${mq.mobile}) {
      font-size: 1.05rem;
      line-height: 1.8;
    }
  }
`

const BlockLeft = styled.div`
  padding: 1.5rem;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px 8px 0 0;

  @media (min-width: ${mq.mobile}) {
    padding: 3.5rem;
    border-radius: 8px 0 0 8px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0.5rem 0 0 0;
    color: ${colors.text.primary};

    @media (min-width: ${mq.mobile}) {
      font-size: 2rem;
    }

    @media (min-width: ${mq.tablet}) {
      font-size: 2rem;
    }
  }
`

export default AboutUs
