import { mq } from 'constants/mediaQueries'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import colors from '../../../constants/colors'

const Reviews: React.FC = () => {
  const { t } = useTranslation('common')

  const reviews = [
    {
      name: 'Katinka',
      text: `${t('home.reviews.katinka')}`,
    },
    {
      name: 'Dominique',
      text: `${t('home.reviews.dominique')}`,
    },
    {
      name: 'Michel',
      text: `${t('home.reviews.michel')}`,
    },
  ]
  return (
    <>
      <h2>{t('home.reviews.title')}</h2>
      <Grid>
        {reviews.map((review) => (
          <ReviewContainer key={review.name}>
            <p>{review.name}</p>
            <p>{review.text}</p>
          </ReviewContainer>
        ))}
      </Grid>
    </>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: ${mq.mobile}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const ReviewContainer = styled.div`
  background-color: ${colors.main}15;
  padding: 1rem 2rem;
`

export default Reviews
