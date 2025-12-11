import React from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { mq } from 'constants/mediaQueries'
import AnimatedSection from '../../Atoms/AnimatedSection'

const iconStyle = { marginRight: '0.75rem', flexShrink: 0, marginTop: '0.2rem' }

const Contact: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <AnimatedSection direction="up" duration={0.7}>
        <Grid>
          <BlockLeft>
            <AnimatedSection direction="fade" delay={0.1} duration={0.6}>
              <SmallTitle>Contact</SmallTitle>
            </AnimatedSection>
            <AnimatedSection direction="fade" delay={0.2} duration={0.6}>
              <h2 data-i18n="[html]contact.subtitle">
                <div dangerouslySetInnerHTML={
                    {__html: t('contact.subtitle', {interpolation: {escapeValue: false}})}
                } />
              </h2>
            </AnimatedSection>
          </BlockLeft>
          <BlockRight>
            <AnimatedSection direction="fade" delay={0.3} duration={0.5}>
              <Line>
                <FaMapMarkerAlt color={colors.main} style={iconStyle} />
                <span>503 ROUTE DU MERUGAT – 82150 Valeilles</span>
              </Line>
            </AnimatedSection>
            <AnimatedSection direction="fade" delay={0.35} duration={0.5}>
              <Line>
                <FaPhone color={colors.main} style={iconStyle} />
                <span>0032 475 595678</span>
              </Line>
            </AnimatedSection>
            <AnimatedSection direction="fade" delay={0.4} duration={0.5}>
              <Line>
                <FaPhone color={colors.main} style={iconStyle} />
                <span>0033 648 483610</span>
              </Line>
            </AnimatedSection>
            <AnimatedSection direction="fade" delay={0.45} duration={0.5}>
              <a href="mailto:kris.helga@outlook.fr" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Line>
                  <FaEnvelope color={colors.main} style={iconStyle} />
                  <span>kris.helga@outlook.fr</span>
                </Line>
              </a>
            </AnimatedSection>
          </BlockRight>
        </Grid>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2} duration={0.7}>
        <Map />
      </AnimatedSection>
    </>
  )
}

const Map: React.FC = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.770434259798!2d0.9123505157402901!3d44.376304213388195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ab9f8d4e5b1ca3%3A0x6a1651df924ca026!2sDomaine%20de%20Merugat!5e0!3m2!1snl!2sbe!4v1643547906934!5m2!1snl!2sbe"
        width={'100%'}
        style={{ border: 0, borderRadius: '12px' }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </MapContainer>
  )
}

const MapContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1.5rem;

  @media (min-width: ${mq.mobile}) {
    margin-top: 2rem;
  }

  iframe {
    height: 300px;

    @media (min-width: ${mq.mobile}) {
      height: 450px;
    }
  }
`

const Line = styled.p`
  display: flex;
  align-items: flex-start;
  margin: 0 0 20px 0;
  font-size: 0.9rem;
  color: ${colors.text.primary};
  transition: all 0.3s ease;
  line-height: 1.6;
  word-break: break-word;

  @media (min-width: ${mq.mobile}) {
    font-size: 1.05rem;
    margin: 0 0 1.25rem 0;
  }
`

const SmallTitle = styled.p`
  color: ${colors.main};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin: 0 0 0.5rem 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
  gap: 0;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: ${mq.tablet}) {
    margin-bottom: 4rem;
    grid-template-columns: 40% 60%;
    gap: 0;
  }
`

const BlockRight = styled.div`
  padding: 1.5rem;
  background: ${colors.beige};
  border-radius: 0 0 8px 8px;

  @media (min-width: ${mq.mobile}) {
    padding: 2rem;
  }

  @media (min-width: ${mq.tablet}) {
    padding: 3.5rem;
    border-radius: 0 8px 8px 0;
  }

  a {
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateX(4px);
    }
  }
`

const BlockLeft = styled.div`
  padding: 1.5rem;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px 8px 0 0;

  @media (min-width: ${mq.mobile}) {
    padding: 2rem;
  }

  @media (min-width: ${mq.tablet}) {
    padding: 3.5rem;
    border-radius: 8px 0 0 8px;
  }

  h2 {
    font-size: 1.25rem;
    margin: 0.5rem 0 0 0;
    color: ${colors.text.primary};

    @media (min-width: ${mq.mobile}) {
      font-size: 1.5rem;
    }

    @media (min-width: ${mq.tablet}) {
      font-size: 2rem;
    }
  }
`

export default Contact
