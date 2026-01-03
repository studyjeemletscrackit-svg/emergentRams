import type { Metadata } from 'next'
import Link from 'next/link'
import Schema from '@/components/Schema'

export const metadata: Metadata = {
  title: 'About Us | Premium Audio Visual Services Provider India',
  description: 'Learn about Ram\'s Audio Visual Services - India\'s trusted AV equipment rental company. 500+ events, 4 cities, 98% client satisfaction. Professional audio-visual solutions since inception.',
  keywords: [
    'about rams av services',
    'audio visual company India',
    'professional av rental',
    'event equipment provider',
    'AV services India',
  ],
  openGraph: {
    title: 'About Ram\'s Audio Visual Services',
    description: 'India\'s trusted AV equipment rental company with presence across major cities',
    url: 'https://ramsavservices.com/about/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ramsavservices.com/about/',
  },
}

export default function AboutPage() {
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
            name: 'About Us',
            item: 'https://ramsavservices.com/about/',
          },
        ]}
      />

      <section className="relative gradient-primary text-white py-24 md:py-32 mt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptLTggMTZjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDQtNC0xLjc5LTQtNCAxLjc5LTQgNC00em0xNiAwYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              About Ram's AV Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Your Trusted Partner for Premium Audio-Visual Solutions Across India
            </p>
            <nav className="flex justify-center text-sm">
              <Link href="/" className="hover:text-accent-300 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Who We Are</h2>
            <p className="section-subtitle">India's rapidly growing AV solutions provider</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded with a vision to transform event experiences, <strong>RAMS PROJECTOR RENTALS WITH SCREEN LAPTOP SOUND SPEAKERS (Ram's Audio Visual Services)</strong> has rapidly emerged as a trusted name in the AV rental industry across India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What started as a passion project has grown into a multi-city operation serving corporate clients, event planners, and individuals seeking premium audio-visual solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that great technology should enhance experiences, not complicate them. Our mission is to make every event memorable with reliable, high-quality AV equipment and professional support.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-accent opacity-10 rounded-2xl transform -rotate-3" />
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary-900 mb-2">
                        Our Vision
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        To become India's most trusted and innovative audio-visual solutions provider, setting new standards in event technology.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 gradient-accent rounded-lg flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary-900 mb-2">
                        Our Mission
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        To deliver exceptional AV experiences through cutting-edge technology, professional service, and unwavering commitment to customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '500+', label: 'Events Served', icon: '🎉' },
              { number: '4', label: 'Cities Across India', icon: '🏙️' },
              { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '24/7', label: 'Support Available', icon: '🛟' },
            ].map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">Complete audio-visual solutions for unforgettable events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '📺',
                title: 'Visual Solutions',
                items: ['LED Screens & Walls', 'High-Definition Projectors', 'Event Backdrops & Drapes', 'Video Conferencing Systems'],
              },
              {
                icon: '🔊',
                title: 'Audio Solutions',
                items: ['Professional Sound Systems', 'Wireless & Wired Microphones', 'PA Systems & Speakers', 'Mixers & Audio Consoles'],
              },
              {
                icon: '⚙️',
                title: 'Support Services',
                items: ['Equipment Delivery', 'Professional Installation', 'On-Site Technical Support', 'Post-Event Pack-up'],
              },
            ].map((category, index) => (
              <div key={index} className="card p-6">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="font-heading text-xl font-bold text-primary-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-heading text-2xl font-bold text-primary-900 mb-6 text-center">
              Events We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: '💼', label: 'Corporate Events' },
                { icon: '🎊', label: 'Private Parties' },
                { icon: '🎤', label: 'Conferences' },
                { icon: '🎓', label: 'Seminars' },
                { icon: '🎵', label: 'Concerts' },
              ].map((event, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-primary-50 transition-colors">
                  <div className="text-4xl mb-2">{event.icon}</div>
                  <div className="text-sm font-medium text-gray-700">{event.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">Our simple 5-step process for seamless event support</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-900 via-accent-500 to-primary-900 transform -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {[
                {
                  number: 1,
                  title: 'Contact & Consultation',
                  description: 'You reach out with your event requirements. We discuss your needs and recommend the perfect AV solution.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
                {
                  number: 2,
                  title: 'Confirmation & Planning',
                  description: 'We provide a detailed quote. Once approved, we create a comprehensive setup plan.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  number: 3,
                  title: 'Equipment Delivery',
                  description: 'Our team safely transports all equipment to your venue at the scheduled time.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  ),
                },
                {
                  number: 4,
                  title: 'Professional Setup',
                  description: 'Certified technicians install and configure all equipment with thorough testing.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                {
                  number: 5,
                  title: 'On-Site Support',
                  description: 'Our team remains available throughout your event for technical assistance.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative z-10">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Elevate Your Event?
            </h3>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contact us today for a free consultation and customized quote for your next event
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="btn bg-white text-primary-900 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </Link>
              <Link href="/equipment/" className="btn btn-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Browse Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
