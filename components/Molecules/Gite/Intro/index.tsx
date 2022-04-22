import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import colors from '../../../../constants/colors'

const GiteIntro: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Grid>
      <BlockLeft>
        <SmallTitle>{t('gite.welcome.title')}</SmallTitle>
        <h2>{t('gite.welcome.subtitle')}</h2>
      </BlockLeft>
      <BlockRight>
        <p style={{ lineHeight: '1.6rem' }}>
        {t('gite.welcome.text')}
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
