import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Navigation: React.FC = () => {
  const { locale, locales, defaultLocale } = useRouter()
  const { t, i18n } = useTranslation()
  console.log(i18next.language)
  return (
    <Container>
      <Link href="/">
        <Logo>Domaine De Merugat</Logo>
      </Link>
      <FlexGrowth />
      <Link href="/gite">
        <NavItem>Gites</NavItem>
      </Link>
      <Link href="/bnb">
        <NavItem>BnB</NavItem>
      </Link>
      <Link href="/tariffs">
        <NavItem>Tarieven</NavItem>
      </Link>
      <select
        onChange={(e) => {
          i18next.changeLanguage(e.target.value)
        }}
      >
        {locales?.map((locale) => (
          <option key={locale}>{locale}</option>
        ))}
      </select>
    </Container>
  )
}
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
