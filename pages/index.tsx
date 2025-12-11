import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/front-page.jpg'
import Container from '../components/Atoms/Container'
import Reviews from '../components/Molecules/Reviews'
import AboutUs from '../components/Molecules/AboutUs'
import Carousel from '../components/Molecules/Carousel'
import RestAndRelaxation from '../components/Molecules/RestAndRelaxation'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Domaine De Merugat</title>
      </Head>
      <ImageContainer>
        <Image src={front} fill style={{ objectFit: 'cover' }} alt="Picture of the whole area" />
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
  height: 60vh;
  min-height: 400px;
`

const Intermediary = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`

export default Home
