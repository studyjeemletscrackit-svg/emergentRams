export interface Equipment {
  id: number
  name: string
  price: string
  image: string
  description: string
  category: 'led' | 'audio' | 'projector'
  specs: string[]
  features: string[]
}

export const equipmentData: Equipment[] = [
  {
    id: 1,
    name: 'Visiontek Wall Mount Pull Down 4×6 84 inches',
    price: '₹2,999/day',
    image: '/images/led_1.jpeg',
    description: 'High-quality wall mount pull-down screen perfect for presentations and events',
    category: 'led',
    specs: [
      'Size: 84 inches (4×6 feet)',
      'Resolution: Full HD compatible',
      'Material: Matte white fabric',
      'Viewing Angle: 160°',
    ],
    features: [
      'Easy Installation',
      'Professional Quality',
      'Portable Design',
      'Indoor Use',
    ],
  },
  {
    id: 2,
    name: 'Map Type Screen 6×8 Easy To Carry',
    price: '₹2,500/day',
    image: '/images/led_2.jpg',
    description: 'Portable projection screen ideal for outdoor and indoor events',
    category: 'led',
    specs: [
      'Size: 6×8 feet',
      'Material: Premium fabric',
      'Setup: Instant deployment',
      'Weight: Lightweight portable',
    ],
    features: [
      'Portable Design',
      'Quick Setup',
      'Durable Material',
      'Versatile Use',
    ],
  },
  {
    id: 3,
    name: 'RD BIG MIC SPEAKER USB BLUETOOTH',
    price: '₹6,500/day',
    image: '/images/speaker_1.webp',
    description: 'Professional wireless speaker system with microphone for events',
    category: 'audio',
    specs: [
      'Power: 500W RMS',
      'Connectivity: USB, Bluetooth',
      'Battery: 8-10 hours',
      'Range: 30 meters',
    ],
    features: [
      'Wireless Microphone',
      'Bluetooth Enabled',
      'Long Battery Life',
      'Professional Sound',
    ],
  },
  {
    id: 4,
    name: 'Speaker & Mic Combo',
    price: '₹1,799/day',
    image: '/images/speaker_2.webp',
    description: 'Compact speaker and microphone combo for small to medium events',
    category: 'audio',
    specs: [
      'Power: 200W RMS',
      'Microphone: Wireless handheld',
      'Frequency: 40Hz-18kHz',
      'Battery: 6 hours',
    ],
    features: [
      'Portable System',
      'Clear Audio',
      'Easy Operation',
      'Value Package',
    ],
  },
  {
    id: 5,
    name: 'RD INTREX M222 WIFI 4K 3D PROJECTOR 200 INCHES',
    price: '₹8,500/day',
    image: '/images/projector_1.jpeg',
    description: 'Premium 4K projector with WiFi connectivity for large venues',
    category: 'projector',
    specs: [
      'Resolution: 4K UHD',
      'Brightness: 5000 Lumens',
      'Screen Size: Up to 200 inches',
      'Connectivity: WiFi, HDMI, USB',
    ],
    features: [
      '4K Ultra HD',
      'WiFi Streaming',
      '3D Compatible',
      'Large Screen Support',
    ],
  },
  {
    id: 6,
    name: 'RD INTREX MINI PROJECTOR 30 INCHES',
    price: '₹3,500/day',
    image: '/images/projector_2.webp',
    description: 'Compact portable projector perfect for small meetings and presentations',
    category: 'projector',
    specs: [
      'Resolution: Full HD 1080p',
      'Brightness: 2000 Lumens',
      'Screen Size: Up to 30 inches',
      'Connections: HDMI, USB',
    ],
    features: [
      'Ultra Portable',
      'Easy Setup',
      'Clear Image',
      'Budget Friendly',
    ],
  },
]
