import Head from 'next/head'
import { useEffect, useState } from 'react'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  const [isFacebook, setIsFacebook] = useState(false)
  useEffect(() => {
    const { referrer } = document
    const fbclid = new URLSearchParams(window.location.search).get("fbclid")
    if (referrer.includes('facebook.com') || fbclid) {
      setIsFacebook(true)
    }
  }, [])

  return (
    <Head>
	    {isFacebook && <script src="https://jsc.adskeeper.com/i/v/ivermectinhumaa1.vercel.app.1411854.js" async></script>}
         <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
  
    </Head>
  )
}
