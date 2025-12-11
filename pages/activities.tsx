import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import SmallTitle from '../components/Atoms/SmallTitle'
import colors from '../constants/colors'
import front from '../public/img/activities/penne-dagenais.jpg'
import Image from 'next/image'
import { mq } from 'constants/mediaQueries'
import Head from 'next/head'

const Tariffs: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('activities.title')}</title>
      </Head>
      <ImageContainer>
        <Image src={front} fill style={{ objectFit: 'cover' }} alt="Picture of the whole area" />
      </ImageContainer>

      <Container>
        <h1>{t('activities.title')}</h1>
        <TextDiv>
          <Grid>
            <div>
              <SmallTitle>{t('activities.markets')}</SmallTitle>
              <List>
                <li>{t('activities.market1')}</li>
                <li>{t('activities.market2')}</li>
                <li>{t('activities.market3')}</li>
                <li>{t('activities.market4')}</li>
                <li>{t('activities.market5')}</li>
                <li>{t('activities.market6')}</li>
                <li>{t('activities.museum')}</li>
                <li>{t('activities.truffles')}</li>
              </List>
            </div>

            <div>
              <SmallTitle>{t('activities.beautiful_villages')}</SmallTitle>
              <List>
                <li>{t('activities.village1')}</li>
                <li>{t('activities.village2')}</li>
                <li>{t('activities.village3')}</li>
                <li>{t('activities.village4')}</li>
                <li>{t('activities.village5')}</li>
                <li>{t('activities.village6')}</li>
                <li>{t('activities.village7')}</li>
              </List>
            </div>

            <div>
              <SmallTitle>{t('activities.restaurants')}</SmallTitle>
              <List>
                <li>{t('activities.restaurant1')}</li>
                <li>{t('activities.restaurant2')}</li>
                <li>{t('activities.restaurant3')}</li>
                <li>{t('activities.restaurant4')}</li>
                <li>{t('activities.restaurant5')}</li>
                <li>{t('activities.restaurant6')}</li>
                <li>{t('activities.restaurant7')}</li>
                <li>{t('activities.restaurant8')}</li>
                <li>{t('activities.restaurant9')}</li>
              </List>
            </div>

            <div>
              <SmallTitle>{t('activities.shops')}</SmallTitle>
              <List>
                <li>{t('activities.shop1')}</li>
                <li>{t('activities.shop2')}</li>
                <li>{t('activities.shop3')}</li>
                <li>{t('activities.shop4')}</li>
                <li>{t('activities.shop5')}</li>
              </List>
            </div>

            <div>
              <SmallTitle>{t('activities.amusement')}</SmallTitle>
              <List>
                <li>{t('activities.amusement1')}</li>
                <li>{t('activities.amusement2')}</li>
                <li>{t('activities.amusement3')}</li>
                <li>{t('activities.amusement4')}</li>
                <li>{t('activities.amusement5')}</li>
                <li>{t('activities.amusement6')}</li>
              </List>
            </div>

            <div>
              <SmallTitle>{t('activities.castles')}</SmallTitle>
              <List>
                <li>{t('activities.castle1')}</li>
                <li>{t('activities.castle2')}</li>
                <li>{t('activities.castle3')}</li>
                <li>{t('activities.castle4')}</li>
              </List>
            </div>
            <div>
              <SmallTitle>{t('activities.caves')}</SmallTitle>
              <List>
                <li>{t('activities.cave1')}</li>
                <li>{t('activities.cave2')}</li>
              </List>
            </div>
          </Grid>
        </TextDiv>
      </Container>
    </>
  )
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
`

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
`

const TextDiv = styled.div`
  background-color: ${colors.main}15;
  padding: 2rem;
`

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  margin-bottom: 4rem;

  @media (min-width: ${mq.tablet}) {
    grid-template-columns: 50% 50%;
  }
`

export default Tariffs
