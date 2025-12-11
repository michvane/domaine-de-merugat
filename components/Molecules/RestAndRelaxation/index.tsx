import styled from 'styled-components'
import colors from '../../../constants/colors'
import { StyledLink } from '../../Atoms/Button'
import Link from 'next/link'
import { mq } from 'constants/mediaQueries'
import { useTranslation } from 'react-i18next'
const RestAndRelaxation: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Grid>
      <BlockRight>
        <SmallTitle>{t('home.rest.title')}</SmallTitle>
        <p style={{ lineHeight: '1.6rem' }}>
        {t('home.rest.block-one')}
        </p>
        <p style={{ lineHeight: '1.6rem', marginBottom: '2rem' }}>
        {t('home.rest.block-two')}
        </p>
        <LinkGrid>
          <Link href={'/gite'} passHref>
            <StyledLink>{t('home.rest.gite')}</StyledLink>
          </Link>
          <Link href={'/bnb'} passHref>
            <StyledLink>{t('home.rest.bnb')}</StyledLink>
          </Link>
        </LinkGrid>
      </BlockRight>
      <BlockLeft />
    </Grid>
  )
}

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: ${mq.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SmallTitle = styled.p`
  color: ${colors.main};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin: 0 0 0.5rem 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
  gap: 0;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: ${mq.tablet}) {
    margin-bottom: 5rem;
    grid-template-columns: 40% 60%;
    gap: 0;
  }
`

const BlockRight = styled.div`
  padding: 1.5rem;
  background: ${colors.beige};
  border-radius: 8px 8px 0 0;

  @media (min-width: ${mq.mobile}) {
    padding: 2.5rem;
  }

  @media (min-width: ${mq.tablet}) {
    padding: 3.5rem;
    border-radius: 8px 0 0 8px;
  }

  p {
    color: ${colors.text.secondary};
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0 0 1rem 0;

    @media (min-width: ${mq.mobile}) {
      font-size: 1.05rem;
      line-height: 1.8;
    }
  }
`

const BlockLeft = styled.div`
  height: 100%;
  min-height: 250px;
  background-image: url('/img/front-view.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 8px 8px;

  @media (min-width: ${mq.mobile}) {
    min-height: 300px;
  }

  @media (min-width: ${mq.tablet}) {
    border-radius: 0 8px 8px 0;
    min-height: 400px;
  }
`

export default RestAndRelaxation
