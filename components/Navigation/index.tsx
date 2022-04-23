import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Container from '../Atoms/Container'
import { mq } from 'constants/mediaQueries'

const Navigation: React.FC = () => {
  const router = useRouter()
  const { locale, locales, pathname, asPath, query  } = router
  const { t } = useTranslation('common')
  return (
    <Container>
      <Nav>
        <Link href="/">
          <Logo>Domaine De Merugat</Logo>
        </Link>
        <FlexGrowth />
        <Link href="/gite">
          <NavItem>Gîte</NavItem>
        </Link>
        <Link href="/bnb">
          <NavItem>{t('nav.gite')}</NavItem>
        </Link>
        <Link href="/tariffs">
          <NavItem>{t('nav.tarrifs')}</NavItem>
        </Link>
        <Link href="/contact">
          <NavItem>Contact</NavItem>
        </Link>
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

export default Navigation
