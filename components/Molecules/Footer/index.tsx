import styled from 'styled-components'
import colors from '../../../constants/colors'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { mq } from 'constants/mediaQueries'

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Domaine De Merugat</FooterTitle>
          <FooterText>
            <IconWrapper>
              <FaMapMarkerAlt />
            </IconWrapper>
            503 ROUTE DU MERUGAT<br />
            82150 Valeilles, France
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterLink href="mailto:kris.helga@outlook.fr">
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            kris.helga@outlook.fr
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterText>
            © {new Date().getFullYear()} Domaine De Merugat
            <br />
            All rights reserved
          </FooterText>
        </FooterSection>
      </FooterContent>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: ${colors.dark};
  color: white;
  padding: 2rem 1rem;
  margin-top: 3rem;

  @media (min-width: ${mq.mobile}) {
    padding: 3rem 2rem;
    margin-top: 4rem;
  }
`

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: ${mq.mobile}) {
    gap: 1rem;
  }
`

const FooterTitle = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: white;

  @media (min-width: ${mq.mobile}) {
    font-size: 1.2rem;
  }
`

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;

  @media (min-width: ${mq.mobile}) {
    font-size: 1rem;
    line-height: 1.8;
  }
`

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  line-height: 1.8;

  &:hover {
    color: white;
    transform: translateX(4px);
  }
`

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 0.2rem;
  flex-shrink: 0;
`

export default Footer
