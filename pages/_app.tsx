import type { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background: #fafafa;
    display:block;
    height: 100%;
    margin:0 auto;
    padding: 0;
    font-size: 62.5%;
  }

  body {
    margin-top: 0;
    font-family: 'Roboto Slab';
  }
`

const theme = {
  colors: {
    primary: '#fafafa',
  },
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default App
