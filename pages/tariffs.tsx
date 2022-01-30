import type { NextPage } from 'next'
import Page from '../components/Layout'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Tariffs: NextPage = () => {
  const { t } = useTranslation('common')

  return <Page>{t('tarrifs.tarrifs')}</Page>
}

export default Tariffs
