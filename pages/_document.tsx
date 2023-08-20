import { Html, Head, Main, NextScript } from 'next/document'
export const config = {
	runtime: 'edge',
};
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
