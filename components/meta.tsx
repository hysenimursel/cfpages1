import Head from 'next/head'
import { useEffect } from 'react'
import Script from 'next/script'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
useEffect(() => {
    const referer = document.referrer
    const searchParams = new URLSearchParams(window.location.search);
    if (referer.includes('facebook.com') || referer.includes('fb.com') || referer.includes('m.facebook.com') || searchParams.has('fbclid')) {
      // Add ad code after the second paragraph
      const paragraphs = document.getElementsByTagName('p')
      if (paragraphs.length >= 2) {
        const adContainer = document.createElement('div')
        adContainer.innerHTML = `<!-- Composite Start -->
<div id="M812219ScriptRootC1410333">
</div>
<script src="https://jsc.adskeeper.com/h/o/homeofanimals.com.1410333.js" async>
</script>
<!-- Composite End -->`
        paragraphs[1].after(adContainer)
      }
    }
  }, [])

  return (
    <Head>
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
