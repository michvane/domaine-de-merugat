import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import SmallTitle from '../components/Atoms/SmallTitle'
import colors from '../constants/colors'
import front from '../public/img/tarieven/front.jpg'
import Image from 'next/image'
import { mq } from 'constants/mediaQueries'
import Head from 'next/head'

const Tariffs: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('tarrifs.title')}</title>
      </Head>
      <Image src={front} layout="responsive" alt="Picture of the whole area" />

      <Container>
        <h1>{t('tarrifs.tarrifs')}</h1>
        <Grid>
          <TextDiv>
            <SmallTitle>{t('tarrifs.price-gite')}</SmallTitle>
            <div dangerouslySetInnerHTML={{ __html: t('tarrifs.block1', { interpolation: { escapeValue: false } }) }} />
          </TextDiv>
          <TextDiv>
            <SmallTitle>{t('tarrifs.price-bnb')}</SmallTitle>
            <div dangerouslySetInnerHTML={{ __html: t('tarrifs.block2', { interpolation: { escapeValue: false } }) }} />
          </TextDiv>
        </Grid>
        <TextDiv>
          <SmallTitle>{t('tarrifs.cancel-title')}</SmallTitle>
          <p>
            <div
              dangerouslySetInnerHTML={{ __html: t('tarrifs.cancel-text', { interpolation: { escapeValue: false } }) }}
            />
          </p>
        </TextDiv>
      </Container>
    </>
  )
}

const TextDiv = styled.div`
  background-color: ${colors.main}15;
  padding: 2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 4rem;

  @media (min-width: ${mq.tablet}) {
    grid-template-columns: 50% 50%;
  }
`

export default Tariffs
