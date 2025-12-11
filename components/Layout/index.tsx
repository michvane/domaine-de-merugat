import React from 'react'
import Footer from '../Molecules/Footer'
import Navigation from '../Navigation'

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
)

export default Layout
