import '../styles/globals.css'
import '../public/assets/css/tailwind-built.css'
import '../public/assets/css/animate.min.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
