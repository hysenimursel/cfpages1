import { useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  useEffect(() => {
    if (document.referrer.includes('facebook.com') || window.location.href.includes('fbclid')) {
      //Inject the ad code into the DOM
      const adCode = `TESTINGADS`
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
