import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import SmallTitle from '../components/Atoms/SmallTitle'
import colors from '../constants/colors'
import front from '../public/img/tarieven/front.jpg'
import { mq } from 'constants/mediaQueries'
import Head from 'next/head'

const Tariffs: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('tarrifs.title')}</title>
      </Head>
      <ImageContainer>
        <img src={typeof front === 'string' ? front : front.src} alt="Picture of the whole area" />
      </ImageContainer>
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

const ImageContainer = styled.div`
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

const TextDiv = styled.div`
  background: ${colors.beige};
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  @media (min-width: ${mq.mobile}) {
    padding: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: ${mq.tablet}) {
    padding: 3.5rem;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: ${colors.text.primary};

    @media (min-width: ${mq.mobile}) {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  }

  div {
    color: ${colors.text.secondary};
    line-height: 1.7;
    font-size: 0.95rem;

    @media (min-width: ${mq.mobile}) {
      line-height: 1.8;
      font-size: 1.05rem;
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: ${mq.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

export default Tariffs
