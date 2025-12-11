import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import * as common_nl from '../translations/nl/common.json'
import * as common_fr from '../translations/fr/common.json'

import Layout from '../components/Layout'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background: white;
    display: block;
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1e293b;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: #1e293b;
    margin-top: 0;
  }

  p {
    line-height: 1.7;
    margin: 0 0 1rem 0;
  }

  a {
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

const theme = {
  colors: {
    primary: '#fafafa',
  },
}

const App = ({ Component, pageProps }: AppProps) => {
  const { locale, defaultLocale } = useRouter()
  i18next.init({
    interpolation: { escapeValue: false },
    lng: locale || defaultLocale,
    resources: {
      fr: {
        common: common_fr,
      },
      nl: {
        common: common_nl,
      },
    },
  })

  return (
    <I18nextProvider i18n={i18next}>
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    </I18nextProvider>
  )
}
export default App
