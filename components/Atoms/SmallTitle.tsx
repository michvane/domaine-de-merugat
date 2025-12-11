import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

const SmallTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>
}

const StyledParagraph = styled.p`
  color: ${colors.main};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin: 0 0 0.5rem 0;
`

export default SmallTitle
