import { mq } from 'constants/mediaQueries'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import colors from '../../../../constants/colors'
import Button from '../../../Atoms/Button'

const GiteIntro: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Grid>
      <BlockLeft>
        <SmallTitle>{t('bnb.info.title')}</SmallTitle>
        <h2>{t('bnb.welcome.subtitle')}</h2>
      </BlockLeft>
      <BlockRight>
        <p style={{ lineHeight: '1.6rem' }}>
        {t('bnb.welcome.text')}
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

  @media (min-width: ${mq.tablet}) {
    grid-template-columns: 40% 60%;
  }
`

const BlockRight = styled.div`
  padding: 3rem;
  background-color: ${colors.main}15;
`

const BlockLeft = styled.div`
  padding: 3rem;
`

export default GiteIntro
