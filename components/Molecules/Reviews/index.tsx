import styled from 'styled-components'

const reviews = [
  {
    name: 'Katinka',
    text: '“We hebben een geweldige tijd gehad. Ik Kan het iedereen aanraden! Zeer schoon, heerlijk ontbijt en zeer aardige en gezellige gastheer en gastvrouw.”',
  },
  {
    name: 'Dominique',
    text: '“Mooie omgeving. Prachtig zwembad met hoogwaardige diensten (parasol, handdoeken, ligstoelen) in een perfect onderhouden gebied. Bijzonder vriendelijk welkom van de gastheren. Ontbijt van 4 sterren. Diner mogelijk en redelijk geprijsd.”',
  },
  {
    name: 'Michel',
    text: '“Uitstekende bed and breakfast. uitstekend welkom. Geweldig ontbijt. Verfijnd huis. Niets om over te klagen. Gelegen op het platteland, zeer rustig, het is beter om een GPS om dit mooie huis te vinden ...” ',
  },
]

const Reviews: React.FC = () => {
  return (
    <>
      <h2>Wat onze gasten vinden</h2>
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`

const ReviewContainer = styled.div`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 1rem;
  padding: 1rem 2rem;
`

export default Reviews
