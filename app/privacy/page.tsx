import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ram\'s Audio Visual Services',
  description: 'Privacy policy for Ram\'s Audio Visual Services. Learn how we protect and handle your personal information. We never sell or share your data with third parties.',
  keywords: ['privacy policy', 'data protection', 'rams av privacy'],
  openGraph: {
    title: 'Privacy Policy | Ram\'s Audio Visual Services',
    description: 'How we protect and handle your personal information',
    url: 'https://ramsavservices.com/privacy/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ramsavservices.com/privacy/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="relative gradient-primary text-white py-24 md:py-32 mt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptLTggMTZjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDQtNC0xLjc5LTQtNCAxLjc5LTQgNC00em0xNiAwYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              How we protect and handle your personal information
            </p>
            <nav className="flex justify-center text-sm">
              <Link href="/" className="hover:text-accent-300 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Privacy Policy</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <div className="border-l-4 border-primary-900 pl-6">
              <h2 className="font-heading text-2xl font-bold text-primary-900 mb-3">
                Your Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using our website, you consent to the practices for collecting and using your information as described in this Privacy Policy.
              </p>
            </div>

            <div className="border-l-4 border-primary-900 pl-6">
              <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We only collect information that is essential to provide you with our services:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Information You Provide Directly:</strong> This includes your name, phone number, email address, and event details when you submit an inquiry or booking form.
                  </div>
                </li>
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Information from Communication:</strong> If you contact us via email or our website contact form, we collect the contents of your message, your contact details, and any attachments you send.
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary-900 pl-6">
              <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information is used solely for the purpose of serving you. We use it to:
              </p>
              <ul className="space-y-3">
                {[
                  'Process, confirm, and manage your bookings for audio-visual equipment and services',
                  'Communicate with you regarding your inquiry, booking, or support request',
                  'Deliver our services and equipment to your event location',
                  'Improve the functionality and user experience of our website',
                  'Protect the security of our website and services and prevent fraud',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-gradient-to-br from-accent-50 to-accent-100 border-l-4 border-accent-500 p-6 rounded-lg">
                <p className="text-gray-800 font-semibold leading-relaxed">
                  We take your privacy very seriously. <strong className="text-accent-700">We do not sell, rent, share, or trade your personal information with anyone, under any circumstances.</strong> Your data is kept strictly confidential and is never provided to any outside parties for marketing, advertising, or other unrelated purposes. We only use your information internally to deliver and support the services you request.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-primary-900 pl-6">
              <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="border-l-4 border-primary-900 pl-6">
              <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <strong className="text-primary-900">Email:</strong>
                    <a href="mailto:ramsprojector987@gmail.com" className="text-accent-600 hover:text-accent-700 ml-2">
                      ramsprojector987@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <strong className="text-primary-900">Phone:</strong>
                    <a href="tel:+919700033342" className="text-accent-600 hover:text-accent-700 ml-2">
                      +91 9700033342
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <strong className="text-primary-900">Address:</strong>
                    <span className="text-gray-700 ml-2">
                      Head Office: 17-2-625/25, MADANNAPET, POST OFFICE, SAIDHA, SAIDHABAD, Hyderabad, Telangana, 500059
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t">
              <p className="text-gray-600 text-sm">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
