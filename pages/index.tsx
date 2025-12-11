import type { NextPage } from 'next'
import front from '../public/img/front-page.jpg'
import bnbFront from '../public/img/bnb/front.jpg'
import giteFront from '../public/img/gite/overview.jpg'
import activitiesFront from '../public/img/activities/penne-dagenais.jpg'
import tariffsFront from '../public/img/tarieven/front.jpg'
import contactFront from '../public/img/contact/front.jpg'
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
import AnimatedSection from '../components/Atoms/AnimatedSection'
import HeaderImage from '../components/Atoms/HeaderImage'

const Home: NextPage = () => {
  const { t } = useTranslation('common')
  const imageSrc = typeof front === 'string' ? front : front.src
  const bnbImageSrc = typeof bnbFront === 'string' ? bnbFront : bnbFront.src
  const giteImageSrc = typeof giteFront === 'string' ? giteFront : giteFront.src
  const activitiesImageSrc = typeof activitiesFront === 'string' ? activitiesFront : activitiesFront.src
  const tariffsImageSrc = typeof tariffsFront === 'string' ? tariffsFront : tariffsFront.src
  const contactImageSrc = typeof contactFront === 'string' ? contactFront : contactFront.src

  return (
    <>
      <Head>
        <title>Domaine De Merugat</title>
        {/* Preload current page image */}
        <link rel="preload" as="image" href={imageSrc} />
        {/* Prefetch other pages' header images for instant loading on navigation */}
        <link rel="prefetch" as="image" href={bnbImageSrc} />
        <link rel="prefetch" as="image" href={giteImageSrc} />
        <link rel="prefetch" as="image" href={activitiesImageSrc} />
        <link rel="prefetch" as="image" href={tariffsImageSrc} />
        <link rel="prefetch" as="image" href={contactImageSrc} />
      </Head>
      <HeaderImage src={front} alt="Picture of the whole area" priority />
      <Container>
        <AboutUs />
        <Carousel />
        <RestAndRelaxation />
        <AnimatedSection direction="fade" duration={0.7}>
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
        </AnimatedSection>
        <Reviews />
      </Container>
    </>
  )
}

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
