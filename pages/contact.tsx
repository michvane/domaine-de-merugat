import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/contact/front.jpg'
import { useTranslation } from 'react-i18next'
import Container from '../components/Atoms/Container'
import Contact from '../components/Molecules/Contact'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />
      <Container>
        <Contact />
      </Container>
    </>
  )
}

export default Home
