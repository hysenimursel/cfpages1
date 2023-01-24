import Head from 'next/head'
import { useEffect } from 'react'
import Script from 'next/script'

export default function Meta({ referer = '' }) {
  const searchParams = new URLSearchParams(window.location.search);
  useEffect(() => {
    if (referer.includes('facebook.com') || referer.includes('fb.com') || referer.includes('m.facebook.com') || searchParams.has('fbclid')) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
              if (mutation.addedNodes[0].nodeName === 'P') {
                const paragraphs = document.getElementsByTagName('p')
                if (paragraphs.length >= 2) {
                  const adContainer = document.createElement('div')
                  adContainer.innerHTML = `
                    <ins class="adsbygoogle" style="display:inline-block;width:600px;height:300px" data-ad-client="ca-pub-1495584723679540" data-ad-slot="3765044096" data-page-url="http://theglobalmagazine.com"></ins>
                  `
                  paragraphs[1].after(adContainer)
                }
              }
            }
          })
        })
        observer.observe(document.body, { childList: true, subtree: true })
    }
  }, [])

  return (
    <Head>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1495584723679540`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`
        }}
      />
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

export async function getInitialProps({ req }) {
  return { referer: req.headers.referer }
}
