'use client';
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin, Clock, CheckCircle2, X } from 'lucide-react';
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), { ssr: false })

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column - Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
            <ContactForm onSuccess={() => setIsModalOpen(true)} />
          </div>

          {/* Right Column - Info + Map stacked */}
          <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Or Reach Us Directly</h2>
            <div className="space-y-6 text-gray-500 mb-8">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-gray-400 shrink-0" />
                <p>Email: info@wmsols.com</p>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-gray-400 shrink-0" />
                <p>Phone: +1 (505) 386-1888</p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-gray-400 shrink-0" />
                <p>Address: 123 Tech Avenue, San Francisco,<br />CA 94102</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-0.5 text-gray-400 shrink-0" />
                <p>Response Time: Within 24 business hours</p>
              </div>
            </div>

            {/* Map sits directly under the info block */}
            <div className="w-full overflow-hidden z-0 ">
              <Map />
            </div>
          </div>

        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full mx-4 text-center z-10">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center justify-center space-x-2 mb-4 mt-2">
              <CheckCircle2 className="w-6 h-6 text-black" />
              <h1 className="text-2xl font-sans font-bold text-gray-900">Message Received</h1>
            </div>
            <p className="text-gray-500 text-sm mb-8 px-4">
              Thank you for reaching out. A member of the WMsols team will be in touch within 24 hours. In the meantime, explore our latest work below.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-500 text-white py-2.5 px-6 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              View Case Studies
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;