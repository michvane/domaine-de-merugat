import styled from 'styled-components'

const Footer: React.FC = () => {
  return <Wrapper>503 ROUTE DU MERUGAT - 82150 Valeilles - kris.helga@outlook.fr - © {new Date().getFullYear()} </Wrapper>
}

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`

export default Footer
