import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ömer Asaf Karasu - Portfolio</title>
        <meta name="description" content="This my personel web site, if you look or search full stack developer, you can contact me." />
      </Head>
      <body className="scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
