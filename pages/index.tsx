import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/front-page.jpg'
import { useTranslation } from 'react-i18next'
import Container from '../components/Atoms/Container'
import Reviews from '../components/Molecules/Reviews'
import AboutUs from '../components/Molecules/AboutUs'
import Carousel from '../components/Molecules/Carousel'
import RestAndRelaxation from '../components/Molecules/RestAndRelaxation'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />
      <Container>
        <AboutUs />
        <Carousel />
        <RestAndRelaxation />
        <Reviews />
      </Container>
    </>
  )
}

export default Home
