import { AppProps } from 'next/app'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export const config = {
	runtime: 'edge',
};

export default MyApp
