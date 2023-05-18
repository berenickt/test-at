import styled from '@emotion/styled'

import LayoutHeader from './header/Header.container'
import LayoutFooter from './footer/Footer'
import LayoutBanner from './banner/Banner'
import LayoutBanner2 from './banner2/Banner'
import LayoutBanner3 from './banner3/Banner'

const Body = styled.section`
  min-height: 60rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface ILayoutProps {
  children: JSX.Element
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutBanner2 />
      <Body>{props.children}</Body>
      <LayoutBanner3 />
      <LayoutFooter />
    </>
  )
}
