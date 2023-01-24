import Link from 'next/link'
import Ad from './ad-code.html'

export default function Header() {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <Ad />
    </>
  )
}
