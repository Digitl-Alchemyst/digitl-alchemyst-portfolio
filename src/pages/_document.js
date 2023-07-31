/* eslint-disable react/function-component-definition */
import { Html, Head, Main, NextScript } from 'next/document'

// Metadata
export const metadata = {
  title: 'Digitl Alchemyst Steven Watkins',
  description:
    'Web Application Development Portfolio, for Steven Watkins aka Digitl Alchemyst',
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
