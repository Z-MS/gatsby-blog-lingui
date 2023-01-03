import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { useLocalization } from 'gatsby-theme-i18n'
import { t } from '@lingui/macro'

const IndexPage = () => {
  const { locale, defaultLang, config } = useLocalization()
  return (
    <main>
      <Layout pageTitle={t({
        id: 'home.title',
        message: 'Home Page'
      })}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Gatsby logo"
          src="../images/icon.png"
        />
        <p>Current locale: {locale}</p>
        <p>Default locale: {defaultLang}</p>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage