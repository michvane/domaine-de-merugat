import { mq } from 'constants/mediaQueries'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import colors from '../../../../constants/colors'

const GiteInfo: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Grid>
      <BlockRight>
        <SmallTitle>{t('gite.info.title')}</SmallTitle>
        <ul>
          <li>{t('gite.info.item1')}</li>
          <li>{t('gite.info.item2')}</li>
          <li>{t('gite.info.item3')}</li>
          <li>{t('gite.info.item4')}</li>
          <li>{t('gite.info.item5')}</li>
          <li>{t('gite.info.item6')}</li>
          <li>{t('gite.info.item7')}</li>
          <li>{t('gite.info.item8')}</li>
          <li>{t('gite.info.item9')}</li>
          <li>{t('gite.info.item10')}</li>
          <li>{t('gite.info.item11')}</li>
          <li>{t('gite.info.item12')}</li>
          <li>{t('gite.info.item13')}</li>
          <li>{t('gite.info.item14')}</li>
          <li>{t('gite.info.item15')}</li>
          <li>{t('gite.info.item16')}</li>
        </ul>
      </BlockRight>
      <BlockLeft></BlockLeft>
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
