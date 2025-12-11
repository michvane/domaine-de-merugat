import { mq } from 'constants/mediaQueries'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import colors from '../../../../constants/colors'
import AnimatedSection from '../../../Atoms/AnimatedSection'

const GiteInfo: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <AnimatedSection direction="up" duration={0.7}>
      <Grid>
        <BlockRight>
          <AnimatedSection direction="fade" delay={0.1} duration={0.6}>
            <SmallTitle>{t('bnb.info.title')}</SmallTitle>
          </AnimatedSection>
          <AnimatedSection direction="fade" delay={0.2} duration={0.6}>
            <ul>
              <li>{t('bnb.info.item1')}</li>
              <li>{t('bnb.info.item2')}</li>
              <li>{t('bnb.info.item3')}</li>
              <li>{t('bnb.info.item4')}</li>
              <li>{t('bnb.info.item5')}</li>
              <li>{t('bnb.info.item6')}</li>
              <li>{t('bnb.info.item7')}</li>
              <li>{t('bnb.info.item8')}</li>
              <li>{t('bnb.info.item9')}</li>
              <li>{t('bnb.info.item10')}</li>
            </ul>
          </AnimatedSection>
        </BlockRight>
        <BlockLeft />
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
  margin: 0 0 1rem 0;
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
    grid-template-columns: 60% 40%;
    gap: 0;
  }
`

const BlockRight = styled.div`
  padding: 1.5rem;
  background: ${colors.beige};
  border-radius: 8px 8px 0 0;

  @media (min-width: ${mq.mobile}) {
    padding: 2rem;
  }

  @media (min-width: ${mq.tablet}) {
    padding: 3.5rem;
    border-radius: 8px 0 0 8px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0.6rem 0;
      color: ${colors.text.secondary};
      font-size: 0.9rem;
      line-height: 1.7;
      position: relative;
      padding-left: 1.25rem;

      @media (min-width: ${mq.mobile}) {
        padding: 0.75rem 0;
        font-size: 1.05rem;
        line-height: 1.8;
        padding-left: 1.5rem;
      }

      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: ${colors.main};
        font-weight: 700;
        font-size: 1rem;

        @media (min-width: ${mq.mobile}) {
          font-size: 1.2rem;
        }
      }
    }
  }
`

const BlockLeft = styled.div`
  height: 100%;
  min-height: 250px;
  background-image: url('/img/pool.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 8px 8px;

  @media (min-width: ${mq.mobile}) {
    min-height: 300px;
  }

  @media (min-width: ${mq.tablet}) {
    border-radius: 0 8px 8px 0;
    min-height: 400px;
  }
`

export default GiteInfo
