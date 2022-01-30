import styled from 'styled-components'

const Footer: React.FC = () => {
  return <Wrapper>Domaine De Merugat - {new Date().getFullYear()} </Wrapper>
}

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`

export default Footer
