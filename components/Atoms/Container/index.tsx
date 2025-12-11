import { mq } from 'constants/mediaQueries'
import styled from 'styled-components'

const Container: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
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
  padding: 1.2rem;
  max-width: 1280px;
  min-width: 80vw;

  @media (min-width: ${mq.mobile}) {
    padding: 3.2rem;
  }
`

export default Container
