import React from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'
import { mq } from 'constants/mediaQueries'

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

const StyledButton = styled.button`
  padding: 0.875rem 1.5rem;
  border: none;
  background: ${colors.main};
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  min-height: 44px;
  width: 100%;

  @media (min-width: ${mq.mobile}) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
    width: auto;
  }

  &:hover {
    background: ${colors.dark};
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.main}30;
  }
`

export const StyledLink = styled.a`
  text-align: center;
  padding: 0.875rem 1.5rem;
  border: none;
  background: ${colors.main};
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: block;
  min-height: 44px;
  width: 100%;

  @media (min-width: ${mq.mobile}) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  &:hover {
    background: ${colors.dark};
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.main}30;
  }
`

export default Button
