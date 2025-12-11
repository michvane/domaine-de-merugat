import type { NextPage } from 'next'
import front from '../public/img/bnb/front.jpg'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import Intro from '../components/Molecules/Bnb/Intro'
import Info from '../components/Molecules/Bnb/Info'
import BnbCarousel from '../components/Molecules/Carousel/bnb'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import HeaderImage from '../components/Atoms/HeaderImage'

const Bnb: NextPage = () => {
  const { t } = useTranslation('common')
  const imageSrc = typeof front === 'string' ? front : front.src

  return (
    <>
      <Head>
        <title>{t('bnb.title')}</title>
        <link rel="preload" as="image" href={imageSrc} />
      </Head>
      <HeaderImage src={front} alt="Picture of the whole area" priority />
      <Container>
        <Intro />
        <BnbCarousel />
        <Info />
      </Container>
    </>
  )
}

export default Bnb
