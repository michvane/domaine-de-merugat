import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Container from '../Atoms/Container'
import { mq } from 'constants/mediaQueries'
import colors from '../../constants/colors'

const Navigation: React.FC = () => {
  const router = useRouter()
  const { locale, locales, pathname, asPath, query } = router
  const { t } = useTranslation('common')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const currentPath = router.asPath

  return (
    <NavWrapper>
      <Container>
        <Nav>
          <StyledLink href="/">
            <Logo>Domaine De Merugat</Logo>
          </StyledLink>
          <FlexGrowth />
          <NavItems>
            <StyledLink href="/gite">
              <NavItem $active={currentPath === '/gite'}>Gîte</NavItem>
            </StyledLink>
            <StyledLink href="/bnb">
              <NavItem $active={currentPath === '/bnb'}>{t('nav.gite')}</NavItem>
            </StyledLink>
            <StyledLink href="/tariffs">
              <NavItem $active={currentPath === '/tariffs'}>{t('nav.tarrifs')}</NavItem>
            </StyledLink>
            <StyledLink href="/activities">
              <NavItem $active={currentPath === '/activities'}>{t('nav.activities')}</NavItem>
            </StyledLink>
            <StyledLink href="/contact">
              <NavItem $active={currentPath === '/contact'}>Contact</NavItem>
            </StyledLink>
          </NavItems>
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
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </Nav>
        {isMobileMenuOpen && (
          <MobileMenu>
            <StyledLink href="/gite" onClick={() => setIsMobileMenuOpen(false)}>
              <MobileNavItem>Gîte</MobileNavItem>
            </StyledLink>
            <StyledLink href="/bnb" onClick={() => setIsMobileMenuOpen(false)}>
              <MobileNavItem>{t('nav.gite')}</MobileNavItem>
            </StyledLink>
            <StyledLink href="/tariffs" onClick={() => setIsMobileMenuOpen(false)}>
              <MobileNavItem>{t('nav.tarrifs')}</MobileNavItem>
            </StyledLink>
            <StyledLink href="/activities" onClick={() => setIsMobileMenuOpen(false)}>
              <MobileNavItem>{t('nav.activities')}</MobileNavItem>
            </StyledLink>
            <StyledLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <MobileNavItem>Contact</MobileNavItem>
            </StyledLink>
          </MobileMenu>
        )}
      </Container>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background: ${colors.white};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${colors.gray.medium};
`

const Select = styled.select`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${colors.gray.medium};
  border-radius: 6px;
  background: ${colors.white};
  color: ${colors.text.primary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.main};
    box-shadow: 0 0 0 3px ${colors.main}15;
  }

  &:focus {
    outline: none;
    border-color: ${colors.main};
    box-shadow: 0 0 0 3px ${colors.main}15;
  }

  @media (max-width: ${mq.mobile}) {
    display: none;
  }
`

const FlexGrowth = styled.div`
  flex-grow: 1;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.text.primary};
  position: relative;

  @media (min-width: ${mq.mobile}) {
    padding: 1.2rem 0;
  }
`

const NavItems = styled.div`
  display: none;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: ${mq.mobile}) {
    display: flex;
  }
`

const NavItem = styled.div<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: ${props => props.$active ? '600' : '500'};
  cursor: pointer;
  color: ${props => props.$active ? colors.main : colors.text.primary};
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  text-transform: none;

  @media (min-width: ${mq.mobile}) {
    font-size: 0.95rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.$active ? '60%' : '0'};
    height: 2px;
    background: ${colors.main};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.main};
    background: ${colors.gray.light};

    &::after {
      width: 60%;
    }
  }
`

const Logo = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  color: ${colors.main};
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: ${mq.mobile}) {
    font-size: 1.4rem;
  }

  &:hover {
    color: ${colors.dark};
    transform: translateY(-1px);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 1rem;

  span {
    width: 24px;
    height: 2px;
    background: ${colors.text.primary};
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  @media (min-width: ${mq.mobile}) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-top: 1px solid ${colors.gray.medium};
  gap: 0.5rem;

  @media (min-width: ${mq.mobile}) {
    display: none;
  }
`

const MobileNavItem = styled.div`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${colors.text.primary};
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.gray.light};
    color: ${colors.main};
  }
`

export default Navigation
