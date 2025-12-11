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
  text-decoration: none !important;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: block;
  min-height: 44px;
  width: 100%;
  overflow: hidden;
  word-break: break-word;
  hyphens: auto;

  @media (min-width: ${mq.mobile}) {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }

  @media (min-width: ${mq.tablet}) {
    padding: 0.875rem 1.25rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: ${colors.dark};
    text-decoration: none !important;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.main}30;
    text-decoration: none !important;
  }

  &:visited {
    text-decoration: none !important;
  }
`

export default Button
