import type { NextPage } from 'next'
import Page from '../components/Layout'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Tariffs: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      {t('tarrifs.tarrifs')}
      <p>Gîte voor max 6 personen</p>
      <p>
        Hier komen tarieven
        {/* Hoogseizoen van 01/07 tot 31/08 Enkel te boeken met aankomst en vertrek op zaterdag Week : 1100 € Eindschoonmaak
        : 50 € Tussenseizoen van 16/06 tot 30/06 en van 01/09 tot 15/09 Week-end : 300 € tot 400 € (2 of 3 nachten)
        Mid-week : 550 € (4nachten) Week : 900 € Eindschoonmaak : 50 € Laag seizoen van 01/04 tot 15/06 en van 15/09 tot
        15/11 Week-end : 250 € tot 350 € (2 of 3 nachten) Mid-week : 500 € (4 nachten) Week : 800 € Eindschoonmaak : 50
        € Onze prijzen zijn exclusief toeristentaks : 0,50 € p.p/nacht voor + 18 jaar. De eindschoonmaak en
        toeristentaks worden ter plaatse cash afgerekend. Aankomst vanaf 16 uur, bij vertrek dient de woning vrij te
        zijn om 10 uur. Waarborg: 250 € cash te betalen bij aankomst. Bij boeking vragen wij een voorschot van 50% van
        de totale huurprijs. Het saldo dient betaald te worden uiterlijk 2 maand voor aankomst. Wij aanvaarden geen
        betaalkaarten. Annulatie voorwaarden: Bij annulering van de overeenkomst is de huurder de annuleringskosten
        verschuldigd die afhankelijk zijn van het moment van annulering. Tot 8 weken voor de aankomstdag : 50¨% van de
        totale huursom Minder dan 8 weken voor de aankomstdag : 100% van de totale huursom Wij hanteren de “Corona
        Annulatie Garantie” waarbij de reeds betaalde voorschotten en saldo bedragen niet verloren gaan in geval van een
        reisverbod ten gevolge van het coronavirus. De reisdatum kan kosteloos worden gewijzigd binnen dezelfde
        boekingsklasse en volgens beschikbaarheid. */}
      </p>
    </>
  )
}

export default Tariffs
