import type { NextPage } from 'next'
import Page from '../components/Page'
import Image from 'next/image'
import front from '../public/img/front-page.jpg'

import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <Page>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />
    </Page>
  )
}

export default Home

const StyledImage = styled(Image)`
  /* border-radius: 1.6rem; */
`
