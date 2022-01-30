import type { NextPage } from 'next'
import Image from 'next/image'
import front from '../public/img/contact/front.jpg'
import { useTranslation } from 'react-i18next'
import Container from '../components/Atoms/Container'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />
      <Container>Hier komen contact gegevens</Container>
    </>
  )
}

export default Home
