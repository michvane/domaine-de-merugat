import type { NextPage } from 'next'
import Image from 'next/image'
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
        <Image src={front} layout="responsive" alt="Picture of the whole area" />
      </ImgWrapper>
      <Container>
        <Intro />
        <BnbCarousel />
        <Info />
      </Container>
    </>
  )
}

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
`

export default Bnb
