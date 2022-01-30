import React from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  background-color: ${colors.main};
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: background-color 0.3s;
    background-color: ${colors.main}75;
  }
`

export default Button
