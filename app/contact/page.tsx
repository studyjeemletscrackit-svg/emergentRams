import type { Metadata } from 'next'
import Link from 'next/link'
import Schema from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Contact Us | Ram\'s Audio Visual Services - AV Rental Enquiry',
  description: 'Contact Ram\'s AV Services for equipment rental quotes. Available in Mumbai, Bangalore, Hyderabad, Chennai. Call +91 9700033342 or WhatsApp for instant quotes. 24/7 customer support.',
  keywords: [
    'contact rams av',
    'av rental enquiry',
    'projector rental contact',
    'event equipment booking',
    'av equipment quote India',
  ],
  openGraph: {
    title: 'Contact Ram\'s Audio Visual Services',
    description: 'Get instant quotes for AV equipment rental across India',
    url: 'https://ramsavservices.com/contact/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ramsavservices.com/contact/',
  },
}

export default function ContactPage() {
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

  return (
    <>
      <Schema
        type="BreadcrumbList"
        data={[
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ramsavservices.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact Us',
            item: 'https://ramsavservices.com/contact/',
          },
        ]}
      />

      <section className="relative gradient-primary text-white py-24 md:py-32 mt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptLTggMTZjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDQtNC0xLjc5LTQtNCAxLjc5LTQgNC00em0xNiAwYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Ready to elevate your event? Contact us for premium AV solutions across India
            </p>
            <nav className="flex justify-center text-sm">
              <Link href="/" className="hover:text-accent-300 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="font-heading text-3xl font-bold text-center text-primary-900 mb-4">
              Quick & Easy Contact
            </h2>
            <p className="text-center text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              <strong>Reach out to our nearest branch for instant quotes, equipment bookings, or technical support.</strong> We respond within 30 minutes during business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: '⏱️', label: 'Quick Response' },
                { icon: '🎧', label: 'Expert Support' },
                { icon: '💰', label: 'Instant Quotes' },
              ].map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-lg">
                  <span className="text-2xl">{highlight.icon}</span>
                  <span className="font-semibold text-primary-900">{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-header">
            <h2 className="section-title">Contact Our Branches</h2>
            <p className="section-subtitle">Reach out to your nearest location for personalized service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch) => (
              <div
                key={branch.city}
                className={`card p-6 md:p-8 ${
                  branch.featured ? 'ring-2 ring-accent-500 relative' : ''
                }`}
              >
                {branch.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary-900">
                    {branch.city}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <strong className="text-primary-900">Location:</strong>
                      <p className="text-gray-600 mt-1">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <strong className="text-primary-900">Phone:</strong>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-accent-600 hover:text-accent-700 ml-2 font-semibold"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <div>
                      <strong className="text-primary-900">WhatsApp:</strong>
                      <a
                        href={`https://wa.me/${branch.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 ml-2 font-semibold"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <strong className="text-primary-900">Email:</strong>
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-accent-600 hover:text-accent-700 ml-2 break-all"
                      >
                        {branch.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex-1 btn btn-primary justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${branch.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Business Hours
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here when you need us
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { days: 'Monday - Friday', hours: '8:00 AM - 10:00 PM' },
                  { days: 'Saturday', hours: '9:00 AM - 11:00 PM' },
                  { days: 'Sunday', hours: '9:00 AM - 9:00 PM' },
                  { days: 'Emergency Support', hours: '24/7 Available', highlight: true },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-4 rounded-lg ${
                      schedule.highlight
                        ? 'gradient-accent text-white font-bold'
                        : 'bg-gray-50'
                    }`}
                  >
                    <span>{schedule.days}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-900 p-6 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h4 className="font-heading font-bold text-primary-900 mb-2">
                      Quick Response Guarantee
                    </h4>
                    <p className="text-gray-700">
                      We respond to all inquiries within 30 minutes during business hours. WhatsApp messages get priority response.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Not Sure Which Branch?
              </h3>
              <p className="text-white/90 mb-8">
                Contact our central support team for assistance:
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+919700033342"
                  className="block bg-white text-primary-900 p-6 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center text-white mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-lg">Central Helpline</div>
                      <div className="text-primary-600">+91 9700033342</div>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:ramsprojector987@gmail.com"
                  className="block bg-white text-primary-900 p-6 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center text-white mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-lg">Email Support</div>
                      <div className="text-primary-600 text-sm break-all">
                        ramsprojector987@gmail.com
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
