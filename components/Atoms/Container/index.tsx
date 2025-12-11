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
  padding: 1rem;
  max-width: 1280px;
  width: 100%;

  @media (min-width: ${mq.mobile}) {
    padding: 2rem 3rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 4rem;
  }
`

export default Container
