import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://ramsavservices.com'),
  title: {
    default: "Ram's Audio Visual Services | Premium AV Rentals in India",
    template: "%s | Ram's Audio Visual Services"
  },
  description: 'Premium audio-visual equipment rental services across India. LED screens, projectors, sound systems for corporate events, weddings, conferences in Mumbai, Bangalore, Hyderabad, Chennai.',
  keywords: ['audio visual rental', 'projector rental', 'LED screen rental', 'sound system rental', 'event equipment', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'corporate events', 'wedding AV'],
  authors: [{ name: "Ram's Audio Visual Services" }],
  creator: "Ram's Audio Visual Services",
  publisher: "Ram's Audio Visual Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ramsavservices.com',
    siteName: "Ram's Audio Visual Services",
    title: "Ram's Audio Visual Services | Premium AV Rentals in India",
    description: 'Premium audio-visual equipment rental services across India. LED screens, projectors, sound systems for corporate events.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Ram's Audio Visual Services",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ram's Audio Visual Services | Premium AV Rentals",
    description: 'Premium audio-visual equipment rental across India',
  },
  verification: {
    google: 'AW-17785983412',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17785983412"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17785983412');
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NV95DF7K');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NV95DF7K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
