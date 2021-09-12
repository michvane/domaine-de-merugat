import type { NextPage } from 'next'
import Page from '../components/Page'
import Image from 'next/image'
import front from '../public/img/front-page.jpg'
import { useTranslation } from 'react-i18next'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <Page>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />
    </Page>
  )
}

export default Home
