import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Container from '../Atoms/Container'
import { mq } from 'constants/mediaQueries'

const Navigation: React.FC = () => {
  const router = useRouter()
  const { locale, locales, pathname, asPath, query } = router
  const { t } = useTranslation('common')
  return (
    <Container>
      <Nav>
        <StyledLink href="/">
          <Logo>Domaine De Merugat</Logo>
        </StyledLink>
        <FlexGrowth />
        <StyledLink href="/gite">
          <NavItem>Gîte</NavItem>
        </StyledLink>
        <StyledLink href="/bnb">
          <NavItem>{t('nav.gite')}</NavItem>
        </StyledLink>
        <StyledLink href="/tariffs">
          <NavItem>{t('nav.tarrifs')}</NavItem>
        </StyledLink>
        <StyledLink href="/activities">
          <NavItem>{t('nav.activities')}</NavItem>
        </StyledLink>
        <StyledLink href="/contact">
          <NavItem>Contact</NavItem>
        </StyledLink>

        <Select
          onChange={(e) => {
            router.push({ pathname, query }, asPath, { locale: e.target.value })
          }}
          value={locale}
        >
          {locales?.map((locale) => (
            <option key={locale}>{locale}</option>
          ))}
        </Select>
      </Nav>
    </Container>
  )
}

const Select = styled.select`
  margin-left: 0;
  width: min-content;

  @media (min-width: ${mq.mobile}) {
    margin-left: 1rem;
  }
`

const FlexGrowth = styled.div`
  flex-grow: 1;
`

const Nav = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  color: black;
  text-transform: uppercase;
  flex-direction: column;

  @media (min-width: ${mq.mobile}) {
    flex-direction: row;
  }
`

const NavItem = styled.div`
  margin-left: 0;
  font-size: 1rem;
  cursor: pointer;

  @media (min-width: ${mq.mobile}) {
    margin-left: 1.6rem;
  }
`

const Logo = styled.div`
  cursor: pointer;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export default Navigation
