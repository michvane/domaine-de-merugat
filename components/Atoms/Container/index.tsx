import styled from 'styled-components'

const Container: React.FC = ({ children }) => {
  return (
    <ContainerWrapper>
      <PageWidth>{children}</PageWidth>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PageWidth = styled.div`
  padding: 3.2rem;
  max-width: 1280px;
  min-width: 80vw;
`

export default Container
