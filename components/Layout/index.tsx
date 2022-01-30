import React from 'next'
import styled from 'styled-components'
import Footer from '../Molecules/Footer'
import Navigation from '../Navigation'

const Layout: React.FC = ({ children }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
)

export default Layout
