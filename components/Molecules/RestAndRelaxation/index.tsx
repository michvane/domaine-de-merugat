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
  grid-gap: 1rem;
`

const SmallTitle = styled.p`
  color: ${colors.main};
  text-transform: uppercase;
  font-weight: bold;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 4rem;

  @media (min-width: ${mq.tablet}) {
    grid-template-columns: 40% 60%;
  }
`

const BlockRight = styled.div`
  padding: 1rem;
  background-color: ${colors.main}15;
  @media (min-width: ${mq.mobile}) {
    padding: 3rem;
  }
`

const BlockLeft = styled.div`
  height: 100%;
  background-image: url('/img/front-view.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default RestAndRelaxation
