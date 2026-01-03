export interface SchemaProps {
  type: 'Organization' | 'LocalBusiness' | 'BreadcrumbList' | 'Product' | 'WebPage'
  data: any
}

export default function Schema({ type, data }: SchemaProps) {
  const schemas: Record<string, any> = {
    Organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: "Ram's Audio Visual Services",
      alternateName: 'RAMS PROJECTOR RENTALS WITH SCREEN LAPTOP SOUND SPEAKERS',
      url: 'https://ramsavservices.com',
      logo: 'https://ramsavservices.com/images/logo.png',
      description: 'Premium audio-visual equipment rental services across India',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '17-2-625/25, MADANNAPET, POST OFFICE, SAIDHA, SAIDHABAD',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500059',
        addressCountry: 'IN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9700033342',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
      ],
      sameAs: [
        'https://wa.me/919700033342',
      ],
      ...data,
    },
    LocalBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: "Ram's Audio Visual Services",
      image: 'https://ramsavservices.com/images/logo.png',
      '@id': 'https://ramsavservices.com',
      url: 'https://ramsavservices.com',
      telephone: '+91-9700033342',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '17-2-625/25, MADANNAPET, POST OFFICE',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500059',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '22:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '23:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '09:00',
          closes: '21:00',
        },
      ],
      ...data,
    },
    BreadcrumbList: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data,
    },
    Product: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      ...data,
    },
    WebPage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      ...data,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[type]) }}
    />
  )
}
