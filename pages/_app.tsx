import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import * as common_nl from '../translations/nl/common.json'
import * as common_fr from '../translations/fr/common.json'

import Layout from '../components/Layout'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background: white;
    display:block;
    height: 100%;
    margin:0 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'Roboto Slab', sans-serif;
  }

  p {
    line-height: 1.6rem
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
