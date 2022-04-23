import { mq } from 'constants/mediaQueries'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import colors from '../../../../constants/colors'

const GiteInfo: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Grid>
      <BlockRight>
        <SmallTitle>{t('bnb.info.title')}</SmallTitle>
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
  grid-template-columns: 1fr;
  margin-bottom: 4rem;

  @media (min-width: ${mq.tablet}) {
    grid-template-columns: 60% 40%;
  }
`

const BlockRight = styled.div`
  padding: 3rem;
  background-color: ${colors.main}15;
`

const BlockLeft = styled.div`
  height: 100%;
  background-image: url('/img/pool.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default GiteInfo
