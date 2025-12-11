import type { NextPage } from 'next'
import front from '../public/img/bnb/front.jpg'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import Intro from '../components/Molecules/Bnb/Intro'
import Info from '../components/Molecules/Bnb/Info'
import BnbCarousel from '../components/Molecules/Carousel/bnb'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

const Bnb: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('bnb.title')}</title>
      </Head>
      <ImgWrapper>
        <img src={typeof front === 'string' ? front : front.src} alt="Picture of the whole area" />
      </ImgWrapper>
      <Container>
        <Intro />
        <BnbCarousel />
        <Info />
      </Container>
    </>
  )
}

import colors from '../constants/colors'

import { mq } from 'constants/mediaQueries'

const ImgWrapper = styled.div`
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

export default Bnb
