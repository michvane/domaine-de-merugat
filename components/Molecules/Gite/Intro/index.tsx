import { mq } from 'constants/mediaQueries'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import colors from '../../../../constants/colors'
import AnimatedSection from '../../../Atoms/AnimatedSection'

const GiteIntro: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <AnimatedSection direction="up" duration={0.7}>
      <Grid>
        <BlockLeft>
          <AnimatedSection direction="fade" delay={0.1} duration={0.6}>
            <SmallTitle>{t('gite.welcome.title')}</SmallTitle>
          </AnimatedSection>
          <AnimatedSection direction="fade" delay={0.2} duration={0.6}>
            <h2>{t('gite.welcome.subtitle')}</h2>
          </AnimatedSection>
        </BlockLeft>
        <BlockRight>
          <AnimatedSection direction="fade" delay={0.3} duration={0.6}>
            <p style={{ lineHeight: '1.6rem' }}>
            {t('gite.welcome.text')}
            </p>
          </AnimatedSection>
        </BlockRight>
      </Grid>
    </AnimatedSection>
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

  @media (min-width: ${mq.tablet}) {
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
    padding: 2rem;
  }

  @media (min-width: ${mq.tablet}) {
    padding: 3.5rem;
    border-radius: 0 8px 8px 0;
  }

  p {
    color: ${colors.text.secondary};
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0;
    text-align: center;

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
    padding: 2rem;
  }

  @media (min-width: ${mq.tablet}) {
    padding: 3.5rem;
    border-radius: 8px 0 0 8px;
  }

  h2 {
    font-size: 1.25rem;
    margin: 0.5rem 0 0 0;
    color: ${colors.text.primary};
    font-weight: 600;
    line-height: 1.4;

    @media (min-width: ${mq.mobile}) {
      font-size: 1.5rem;
    }

    @media (min-width: ${mq.tablet}) {
      font-size: 1.75rem;
    }
  }
`

export default GiteIntro
