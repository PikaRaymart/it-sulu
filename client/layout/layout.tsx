import { GlobalStyle } from "@/client/styled/base"
import { HTMLHead } from "./head"
import { Header } from "./header"


type LayoutProps = { children: React.ReactNode }

const Layout = ( { children }: LayoutProps ) =>{

  return (
    <>
      <HTMLHead />
      <GlobalStyle />
      <Header />
      { children }
    </>
  )
}


export default Layout