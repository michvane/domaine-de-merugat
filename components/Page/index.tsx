import React from 'next'
import styled from 'styled-components'
import Navigation from '../Navigation'

const Page: React.FC = ({ children }) => (
  <PageLayout>
    <Container>
      <Navigation />
      {children}
    </Container>
  </PageLayout>
)

export default Page

const PageLayout = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  padding: 3.2rem;
  max-width: 1280px;
  min-width: 80vw;
`
