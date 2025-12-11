import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

const SmallTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>
}

const StyledParagraph = styled.p`
  color: ${colors.main};
  text-transform: uppercase;
  font-weight: bold;
`

export default SmallTitle
