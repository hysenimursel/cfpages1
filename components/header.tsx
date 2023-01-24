import { useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'


export default function Header() {
 useEffect(() => {
    if (document.referrer.includes('facebook.com') || window.location.href.includes('fbclid')) {
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1495584723679540"
        onLoad={() => {
          console.log('Script has loaded')
        }}
      />
      //Inject the ad code into the DOM
    const adCode = `<!-- Composite Start -->
    <div id="M860403ScriptRootC1411835"></div>
    <script src="https://jsc.adskeeper.com/i/v/ivermectinhumaa1.vercel.app.1411835.js" async></script>
    <!-- Composite End -->` 
    const adContainer = document.createElement('div');
      adContainer.innerHTML = adCode;
      document.body.appendChild(adContainer);
    }
  }, [])

  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Blog
      </Link>
      .
    </h2>
  )
}
