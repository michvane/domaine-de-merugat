import type { NextPage } from 'next'
import front from '../public/img/front-page.jpg'
import Container from '../components/Atoms/Container'
import Reviews from '../components/Molecules/Reviews'
import AboutUs from '../components/Molecules/AboutUs'
import Carousel from '../components/Molecules/Carousel'
import RestAndRelaxation from '../components/Molecules/RestAndRelaxation'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import colors from '../constants/colors'
import { mq } from 'constants/mediaQueries'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Domaine De Merugat</title>
      </Head>
      <ImageContainer>
        <img src={typeof front === 'string' ? front : front.src} alt="Picture of the whole area" />
      </ImageContainer>
      <Container>
        <AboutUs />
        <Carousel />
        <RestAndRelaxation />
        <Intermediary>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '1000px',
            }}
          >
            {t('home.interlude.block-one')}
            <br />
            {t('home.interlude.block-two')}
          </p>
        </Intermediary>
        <Reviews />
      </Container>
    </>
  )
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  min-height: 300px;
  overflow: hidden;

  @media (min-width: ${mq.mobile}) {
    height: 50vh;
    min-height: 400px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const Intermediary = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  padding: 2rem 1.5rem;
  background: ${colors.beige};
  border-radius: 8px;

  @media (min-width: ${mq.mobile}) {
    margin: 5rem 0;
    padding: 3rem 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: ${colors.text.secondary};
    max-width: 900px;
    margin: 0;

    @media (min-width: ${mq.mobile}) {
      font-size: 1.1rem;
      line-height: 1.9;
    }
  }
`

export default Home
