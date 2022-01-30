import React from 'next'
import styled from 'styled-components'
import Navigation from '../Navigation'

const Layout: React.FC = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
)

export default Layout
