import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { RecoilRoot } from 'recoil'

import Layout from '../src/common/layout'
import { globalStyles } from '../src/common/styles/globalStyles'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
