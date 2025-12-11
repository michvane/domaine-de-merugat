import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Container from '../components/Atoms/Container'
import SmallTitle from '../components/Atoms/SmallTitle'
import colors from '../constants/colors'
import front from '../public/img/activities/penne-dagenais.jpg'
import { mq } from 'constants/mediaQueries'
import Head from 'next/head'
import AnimatedSection from '../components/Atoms/AnimatedSection'
import HeaderImage from '../components/Atoms/HeaderImage'

const Tariffs: NextPage = () => {
  const { t } = useTranslation('common')
  const imageSrc = typeof front === 'string' ? front : front.src

  return (
    <>
      <Head>
        <title>{t('activities.title')}</title>
        <link rel="preload" as="image" href={imageSrc} />
      </Head>
      <HeaderImage src={front} alt="Picture of the whole area" priority />

      <Container>
        <AnimatedSection direction="fade" duration={0.6}>
          <PageTitle>{t('activities.title')}</PageTitle>
        </AnimatedSection>
        <ActivitiesGrid>
          <AnimatedSection direction="up" delay={0.1} duration={0.6}>
            <ActivityCard>
              <CardHeader>
                <SmallTitle>{t('activities.markets')}</SmallTitle>
              </CardHeader>
              <List>
                <li>{t('activities.market1')}</li>
                <li>{t('activities.market2')}</li>
                <li>{t('activities.market3')}</li>
                <li>{t('activities.market4')}</li>
                <li>{t('activities.market5')}</li>
                <li>{t('activities.market6')}</li>
                <li>{t('activities.museum')}</li>
                <li>{t('activities.truffles')}</li>
              </List>
            </ActivityCard>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15} duration={0.6}>
            <ActivityCard>
              <CardHeader>
                <SmallTitle>{t('activities.beautiful_villages')}</SmallTitle>
              </CardHeader>
              <List>
                <li>{t('activities.village1')}</li>
                <li>{t('activities.village2')}</li>
                <li>{t('activities.village3')}</li>
                <li>{t('activities.village4')}</li>
                <li>{t('activities.village5')}</li>
                <li>{t('activities.village6')}</li>
                <li>{t('activities.village7')}</li>
              </List>
            </ActivityCard>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} duration={0.6}>
            <ActivityCard>
              <CardHeader>
                <SmallTitle>{t('activities.restaurants')}</SmallTitle>
              </CardHeader>
              <List>
                <li>{t('activities.restaurant1')}</li>
                <li>{t('activities.restaurant2')}</li>
                <li>{t('activities.restaurant3')}</li>
                <li>{t('activities.restaurant4')}</li>
                <li>{t('activities.restaurant5')}</li>
                <li>{t('activities.restaurant6')}</li>
                <li>{t('activities.restaurant7')}</li>
                <li>{t('activities.restaurant8')}</li>
                <li>{t('activities.restaurant9')}</li>
              </List>
            </ActivityCard>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.25} duration={0.6}>
            <ActivityCard>
              <CardHeader>
                <SmallTitle>{t('activities.shops')}</SmallTitle>
              </CardHeader>
              <List>
                <li>{t('activities.shop1')}</li>
                <li>{t('activities.shop2')}</li>
                <li>{t('activities.shop3')}</li>
                <li>{t('activities.shop4')}</li>
                <li>{t('activities.shop5')}</li>
              </List>
            </ActivityCard>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3} duration={0.6}>
            <ActivityCard>
              <CardHeader>
                <SmallTitle>{t('activities.amusement')}</SmallTitle>
              </CardHeader>
              <List>
                <li>{t('activities.amusement1')}</li>
                <li>{t('activities.amusement2')}</li>
                <li>{t('activities.amusement3')}</li>
                <li>{t('activities.amusement4')}</li>
                <li>{t('activities.amusement5')}</li>
                <li>{t('activities.amusement6')}</li>
              </List>
            </ActivityCard>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.35} duration={0.6}>
            <ActivityCard>
              <CardHeader>
                <SmallTitle>{t('activities.castles')}</SmallTitle>
              </CardHeader>
              <List>
                <li>{t('activities.castle1')}</li>
                <li>{t('activities.castle2')}</li>
                <li>{t('activities.castle3')}</li>
                <li>{t('activities.castle4')}</li>
              </List>
            </ActivityCard>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4} duration={0.6}>
            <ActivityCard>
              <CardHeader>
                <SmallTitle>{t('activities.caves')}</SmallTitle>
              </CardHeader>
              <List>
                <li>{t('activities.cave1')}</li>
                <li>{t('activities.cave2')}</li>
              </List>
            </ActivityCard>
          </AnimatedSection>
        </ActivitiesGrid>
      </Container>
    </>
  )
}

const PageTitle = styled.h1`
  font-size: 1.75rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${colors.text.primary};
  font-family: 'Raleway', sans-serif;
  text-transform: none;
  font-weight: 600;

  @media (min-width: ${mq.mobile}) {
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 3rem;
  }

  @media (min-width: ${mq.tablet}) {
    font-size: 2.25rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`

const ActivitiesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;

  @media (min-width: ${mq.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
  }

  @media (min-width: ${mq.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`

const ActivityCard = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  @media (min-width: ${mq.mobile}) {
    padding: 2rem;
  }

  &:hover {
    transform: translateY(-2px);
  }
`

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${colors.beige};
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;

  li {
    padding: 0.75rem 0;
    color: ${colors.text.secondary};
    font-size: 0.95rem;
    line-height: 1.7;
    position: relative;
    padding-left: 1.25rem;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${colors.main};
      font-weight: 700;
      font-size: 1rem;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }
`

export default Tariffs
