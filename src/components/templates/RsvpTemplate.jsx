'use client'
import Button from '@/components/atoms/Button'
import { Heading2, Paragraph } from '@/components/atoms/Typography'
import Header from '@/components/organisms/Header'
import { useState } from 'react'

export default function RsvpTemplate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('RSVP submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-2xl mx-auto">
          <Heading2 className="text-center mb-4">
            RSVP
          </Heading2>
          <Paragraph className="text-center mb-12">
            We can't wait to celebrate with you! Please let us know if you'll be joining us.
          </Paragraph>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Will you be attending? *
              </label>
              <select
                name="attendance"
                required
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="">Please select</option>
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Sorry, can't make it</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message for the Couple
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your wishes for our special day..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full">
              Send RSVP
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
