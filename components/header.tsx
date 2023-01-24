import { useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
 useEffect(() => {
    if (document.referrer.includes('facebook.com') || window.location.href.includes('fbclid')) {
      //Inject the ad code into the DOM
      <script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1495584723679540" crossorigin="anonymous"></script>
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1495584723679540" data-ad-slot="3765044096" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
` const adContainer = document.createElement('div');
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
