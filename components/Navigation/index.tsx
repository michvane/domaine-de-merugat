import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import Container from '../Atoms/Container'

const Navigation: React.FC = () => {
  const { locale, locales, defaultLocale } = useRouter()
  const { t, i18n } = useTranslation()
  console.log(i18next.language)
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
          <NavItem>B&B</NavItem>
        </Link>
        <Link href="/tariffs">
          <NavItem>Tarieven</NavItem>
        </Link>
        <Link href="/contact">
          <NavItem>Contact</NavItem>
        </Link>
        {/* <Select
          onChange={(e) => {
            i18next.changeLanguage(e.target.value)
          }}
        >
          {locales?.map((locale) => (
            <option key={locale}>{locale}</option>
          ))}
        </Select> */}
      </Nav>
    </Container>
  )
}

const Select = styled.select`
  margin-left: 1rem;
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
`

const NavItem = styled.div`
  margin-left: 1.6rem;
  font-size: 1rem;
  cursor: pointer;
`

const Logo = styled.div`
  cursor: pointer;
`

export default Navigation
