import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Navigation: React.FC = () => {
  return (
    <Container>
      <StyledLink href="/">
        <Logo>Domaine De Merugat</Logo>
      </StyledLink>
      <FlexGrowth />
      <StyledLink href="/gite">
        <NavItem>Gites</NavItem>
      </StyledLink>
      <StyledLink href="/bnb">
        <NavItem>BnB</NavItem>
      </StyledLink>
      <StyledLink href="/tariffs">
        <NavItem>Tarieven</NavItem>
      </StyledLink>
    </Container>
  )
}

const StyledLink = styled(Link)`
  cursor: pointer;
`

const FlexGrowth = styled.div`
  flex-grow: 1;
`

const Container = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  color: black;
  margin-bottom: 3.2rem;
  text-transform: uppercase;
`

const NavItem = styled.div`
  margin-left: 1.6rem;
  cursor: pointer;
`

const Logo = styled.div`
  cursor: pointer;
`

export default Navigation
