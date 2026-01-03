import type { Metadata } from 'next'
import Link from 'next/link'
import Schema from '@/components/Schema'

export const metadata: Metadata = {
  title: "Ram's Audio Visual Services | Premium AV Equipment Rental India",
  description: 'Premium audio-visual equipment rental in Mumbai, Bangalore, Hyderabad, Chennai. LED screens, projectors, sound systems for corporate events, weddings & conferences. 24/7 support.',
  keywords: [
    'audio visual rental India',
    'projector rental Mumbai',
    'LED screen rental Bangalore',
    'sound system rental Hyderabad',
    'event equipment rental Chennai',
    'corporate event AV',
    'wedding sound system',
    'conference equipment rental',
    'projector with screen',
    'professional audio rental',
  ],
  openGraph: {
    title: "Ram's Audio Visual Services | Premium AV Rentals",
    description: 'Premium AV equipment rental across India with 24/7 support',
    url: 'https://ramsavservices.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ramsavservices.com',
  },
}

export default function Home() {
  const branches = [
    {
      city: 'Mumbai',
      address: 'Road No 7, siddhivinayak commercial complex, No 118, MIDC Central Rd, near Ackruti Trade Centre, Kondivita, Andheri East, Mumbai, Maharashtra 400093',
      phone: '+91 9553073030',
      whatsapp: '919553073030',
      email: 'ramsmumbai30@gmail.com',
    },
    {
      city: 'Hyderabad',
      address: '17-2-625/25, MADANNAPET, POST OFFICE, SAIDHA, SAIDHABAD, Hyderabad, Telangana, 500059',
      phone: '+91 9700033342',
      whatsapp: '919700033342',
      email: 'ramsprojectorsonrent@gmail.com',
    },
    {
      city: 'Bangalore',
      address: '5-146, 5th Main Rd, Hanumantapura, Sevashrama, Bengaluru, Karnataka 560021',
      phone: '+91 9553703737',
      whatsapp: '919553703737',
      email: 'ramsbangalore37@gmail.com',
      featured: true,
    },
    {
      city: 'Chennai',
      address: '47/18, Razack Garden Main Road, Arumbakkam, MMDA Colony Main Rd, Rani Anna Nagar, Choolaimedu, Chennai, Tamil Nadu 600106',
      phone: '+91 9014885749',
      whatsapp: '919014885749',
      email: 'ramdigite@gmail.com',
    },
  ]

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Equipment Rental',
      description: 'Premium LED walls, projectors, sound systems, speakers, microphones, and event backdrops for any occasion.',
      features: ['LED Screens & Walls', 'Sound Systems', 'Projectors', 'Microphones'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      title: 'Delivery & Setup',
      description: 'Professional delivery, installation, and configuration of all equipment at your venue.',
      features: ['Safe Transportation', 'Professional Setup', 'Equipment Testing', 'Venue Assessment'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'On-Site Support',
      description: 'Experienced technicians available throughout your event to ensure everything runs smoothly.',
      features: ['Technical Assistance', 'Troubleshooting', 'Real-time Monitoring', 'Emergency Support'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Event Types',
      description: 'We cater to various events with customized AV solutions tailored to your specific needs.',
      features: ['Corporate Events', 'Private Celebrations', 'Weddings', 'Conferences'],
    },
  ]

  return (
    <>
      <Schema type="Organization" data={{}} />
      <Schema type="LocalBusiness" data={{}} />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-primary opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptLTggMTZjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDQtNC0xLjc5LTQtNCAxLjc5LTQgNC00em0xNiAwYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />

        <div className="container-custom relative z-10 text-center text-white py-20">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Ram's Audio Visual Services
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 font-semibold">
            Rapidly Growing Audio-Video Solutions Provider
          </p>
          <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Premium AV equipment for Corporate and Social Events Across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/equipment/" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View Equipment
            </Link>
            <Link href="/contact/" className="btn bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-4 w-full sm:w-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Our Branches Across India</h2>
            <p className="section-subtitle">Serving major cities with premium AV solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch) => (
              <div
                key={branch.city}
                className={`card p-6 ${branch.featured ? 'ring-2 ring-accent-500' : ''}`}
              >
                {branch.featured && (
                  <div className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-4">
                  {branch.city}
                </h3>
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${branch.phone}`} className="hover:text-primary-900">
                      {branch.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex-1 bg-primary-900 text-white text-center py-2 rounded-lg hover:bg-primary-800 transition-colors text-sm font-semibold"
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${branch.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Complete Audio-Visual Solutions</h2>
            <p className="section-subtitle">From equipment rental to on-site support - we handle it all</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Why Choose Ram's AV Services</h2>
            <p className="section-subtitle">Trusted by 500+ events across India</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: 'Premium Quality Equipment',
                  description: 'Latest technology AV equipment from top brands, regularly maintained and upgraded.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: '24/7 Customer Support',
                  description: 'Round-the-clock assistance for any queries or emergency support during events.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  title: 'Experienced Technicians',
                  description: 'Certified professionals with 5+ years experience in event AV management.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Competitive Pricing',
                  description: 'Transparent pricing with no hidden charges. Best value for premium services.',
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-accent rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

              <Link href="/contact/" className="btn btn-primary inline-flex mt-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us Today
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-10 rounded-2xl transform rotate-3" />
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '500+', label: 'Events Served' },
                    { number: '4', label: 'Cities' },
                    { number: '98%', label: 'Client Satisfaction' },
                    { number: '24/7', label: 'Support' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-gradient mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
