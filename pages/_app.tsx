import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraBaseProvider>
    <Component {...pageProps} />
  </ChakraBaseProvider>
    )
}
