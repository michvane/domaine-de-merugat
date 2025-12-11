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
    <ReviewsSection>
      <ReviewsTitle>{t('home.reviews.title')}</ReviewsTitle>
      <Grid>
        {reviews.map((review) => (
          <ReviewContainer key={review.name}>
            <ReviewName>{review.name}</ReviewName>
            <ReviewText>{review.text}</ReviewText>
          </ReviewContainer>
        ))}
      </Grid>
    </ReviewsSection>
  )
}

const ReviewsSection = styled.div`
  margin-bottom: 3rem;

  @media (min-width: ${mq.mobile}) {
    margin-bottom: 5rem;
  }
`

const ReviewsTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${colors.text.primary};

  @media (min-width: ${mq.mobile}) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.25rem;

  @media (min-width: ${mq.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`

const ReviewContainer = styled.div`
  background: ${colors.beige};
  padding: 1.5rem;
  border-radius: 8px;

  @media (min-width: ${mq.mobile}) {
    padding: 2rem;
  }
`

const ReviewName = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: ${colors.main};
  margin: 0 0 0.75rem 0;
  font-family: 'Raleway', sans-serif;

  @media (min-width: ${mq.mobile}) {
    font-size: 1.1rem;
  }
`

const ReviewText = styled.p`
  color: ${colors.text.secondary};
  line-height: 1.7;
  margin: 0;
  font-size: 0.9rem;

  @media (min-width: ${mq.mobile}) {
    font-size: 0.95rem;
    line-height: 1.8;
  }
`

export default Reviews
