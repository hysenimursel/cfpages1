import Head from 'next/head'
import Script from 'next/script'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const dynamicScript = `
  var s = document.createElement('script');
  s.innerHTML = "console.log('_index log')";
  document.head.appendChild(s);
`;

const adScript = `
let adCode = "test";
let referer = document.referrer;
if (referer.includes("facebook.com") || referer.includes("fb.com")) {
  document.querySelectorAll("p").forEach((p, index) => {
    if (index === 2) {
      p.insertAdjacentHTML("afterbegin", adCode);
    }
  });
}
`'


export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
 <script dangerouslySetInnerHTML={{ __html: dynamicScript }} />
       <script dangerouslySetInnerHTML={{ __html: adScript }} />
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
