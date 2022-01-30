import React from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const iconStyle = { marginRight: '1rem' }

const Contact: React.FC = () => {
  return (
    <>
      <Grid>
        <BlockLeft>
          <SmallTitle>Contact</SmallTitle>
          <h2>
            Heeft u vragen of wilt u een boeking doen? <br /> Neem contact met ons op!
          </h2>
        </BlockLeft>
        <BlockRight>
          <Line style={{ lineHeight: '1.6rem' }}>
            <FaMapMarkerAlt color={colors.main} style={iconStyle} />
            Lieu Dit Merugat – 82150 Valeilles
          </Line>
          <Line>
            <FaPhone color={colors.main} style={iconStyle} />
            0032 475 595678
          </Line>
          <Line>
            <FaPhone color={colors.main} style={iconStyle} />
            0033 648 483610
          </Line>
          <a href="mailto:kris.helga@outlook.fr" style={{ textDecoration: 'none', color: 'black' }}>
            <Line>
              <FaEnvelope color={colors.main} style={iconStyle} />
              kris.helga@outlook.fr
            </Line>
          </a>
        </BlockRight>
      </Grid>
      <Map />
    </>
  )
}

const Map: React.FC<{}> = () => {
  return (
    <div style={{ width: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.770434259798!2d0.9123505157402901!3d44.376304213388195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ab9f8d4e5b1ca3%3A0x6a1651df924ca026!2sDomaine%20de%20Merugat!5e0!3m2!1snl!2sbe!4v1643547906934!5m2!1snl!2sbe"
        width={'100%'}
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  )
}

const Line = styled.p`
  display: flex;
  align-items: center;
`

const SmallTitle = styled.p`
  color: ${colors.main};
  text-transform: uppercase;
  font-weight: bold;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 4rem;
`

const BlockRight = styled.div`
  padding: 3rem;
  background-color: ${colors.main}15;
`

const BlockLeft = styled.div`
  padding: 3rem;
`

export default Contact
