'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { equipmentData, type Equipment } from '@/lib/equipment-data'

export default function EquipmentPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null)

  const filteredEquipment = activeFilter === 'all'
    ? equipmentData
    : equipmentData.filter((item) => item.category === activeFilter)

  const categories = [
    { id: 'all', label: 'All Equipment', icon: '📦' },
    { id: 'led', label: 'LED Screens', icon: '📺' },
    { id: 'audio', label: 'Audio Systems', icon: '🔊' },
    { id: 'projector', label: 'Projectors', icon: '🎥' },
  ]

  return (
    <>
      <section className="relative gradient-primary text-white py-24 md:py-32 mt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptLTggMTZjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDQtNC0xLjc5LTQtNCAxLjc5LTQgNC00em0xNiAwYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              Premium AV Equipment Rental
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              High-quality audio-visual equipment for events across India
            </p>
            <nav className="flex justify-center text-sm">
              <Link href="/" className="hover:text-accent-300 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Equipment</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Our Equipment Catalog</h2>
            <p className="section-subtitle">
              Browse our premium collection of audio-visual equipment available for rent
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((equipment) => (
              <div key={equipment.id} className="card overflow-hidden group">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-50">
                    <span className="text-6xl">
                      {equipment.category === 'led' ? '📺' : equipment.category === 'audio' ? '🔊' : '🎥'}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary-900/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {equipment.category === 'led' ? 'LED Screen' : equipment.category === 'audio' ? 'Audio' : 'Projector'}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading text-xl font-bold text-primary-900 flex-1">
                      {equipment.name}
                    </h3>
                    <span className="gradient-accent text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap ml-2">
                      {equipment.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {equipment.description}
                  </p>

                  <div className="flex gap-2 mb-4">
                    <Link
                      href="/contact/"
                      className="flex-1 btn btn-primary text-center text-sm py-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Now
                    </Link>
                    <button
                      onClick={() => setSelectedEquipment(equipment)}
                      className="flex-1 btn btn-outline text-center text-sm py-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No Equipment Found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category or contact us for custom requirements
              </p>
            </div>
          )}

          <div className="mt-16 bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 md:p-12">
            <div className="section-header">
              <h2 className="section-title text-3xl">Rental Information</h2>
              <p className="section-subtitle">Everything you need to know about renting from us</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                  title: 'Booking Process',
                  description: 'Reserve equipment online or call us. We require 50% advance payment to confirm your booking.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  ),
                  title: 'Delivery & Setup',
                  description: 'We deliver, install, and test all equipment at your venue. Delivery charges apply based on location.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Safety Deposit',
                  description: 'A refundable security deposit is required. Fully refunded after equipment return in good condition.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: 'Technical Support',
                  description: 'Our technicians provide on-site support throughout your event at no additional cost.',
                },
              ].map((info, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedEquipment && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEquipment(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="font-heading text-2xl font-bold text-primary-900">
                Equipment Details
              </h2>
              <button
                onClick={() => setSelectedEquipment(null)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading text-xl font-bold text-primary-900 flex-1">
                  {selectedEquipment.name}
                </h3>
                <span className="gradient-accent text-white px-4 py-2 rounded-full font-bold">
                  {selectedEquipment.price}
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedEquipment.description}
              </p>

              <div className="mb-6">
                <h4 className="font-heading font-bold text-primary-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Specifications
                </h4>
                <ul className="space-y-2">
                  {selectedEquipment.specs.map((spec, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-heading font-bold text-primary-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEquipment.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/contact/"
                  className="flex-1 btn btn-primary justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book This Equipment
                </Link>
                <a
                  href="tel:+919700033342"
                  className="flex-1 btn btn-outline justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Enquire
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
