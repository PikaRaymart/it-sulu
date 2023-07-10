import { AppLayout } from '@/client/layout'
import { Theme } from '@/client/styled/base'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"


const App = ({ Component, pageProps }: AppProps) =>{

  return (
    <ThemeProvider theme={ Theme }>
      <AppLayout>
        <Component { ...pageProps } />
      </AppLayout>
    </ThemeProvider>
  )
}


export default App