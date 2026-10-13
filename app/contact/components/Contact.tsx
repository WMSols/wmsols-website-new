'use client';
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin, Clock, CheckCircle2, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { contactOffices, footerData } from '@/data/navigation';
import { SocialLinks } from '@/components/common/SocialIcons';

const Map = dynamic(() => import('./Map'), { ssr: false });

const contactItems = footerData[2].children ?? [];

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">

          {/* Left Column - Form */}
          <div className="flex flex-col lg:h-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
            <div className="lg:flex-1 lg:min-h-0">
              <ContactForm onSuccess={() => setIsModalOpen(true)} />
            </div>
          </div>

          {/* Right Column - Info + Map stacked */}
          <div className="w-full flex flex-col lg:h-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Or Reach Us Directly</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 shrink-0">
              {/* Email, phones, response, socials */}
              <div className="space-y-6 text-gray-500">
                {contactItems.map((item) => {
                  const isEmail = item.item.includes('@');
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-start hover:text-gray-900 transition-colors"
                    >
                      {isEmail ? (
                        <Mail className="w-5 h-5 mr-3 mt-0.5 text-gray-400 shrink-0" />
                      ) : (
                        <Phone className="w-5 h-5 mr-3 mt-0.5 text-gray-400 shrink-0" />
                      )}
                      <p>{isEmail ? `Email: ${item.item}` : `Phone: ${item.item}`}</p>
                    </a>
                  );
                })}

                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-0.5 text-gray-400 shrink-0" />
                  <p>Response Time: Within 24 business hours</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-3">Follow Us</p>
                  <SocialLinks
                    className="flex items-center gap-4"
                    iconClassName="w-5 h-5"
                  />
                </div>
              </div>

              {/* Offices — plain text, no map links */}
              <div className="space-y-4">
                {contactOffices.map((office) => (
                  <div key={office.label} className="flex items-start text-gray-500">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5 text-gray-400 shrink-0" />
                    <span>
                      <span className="block font-medium text-gray-900">{office.label}</span>
                      <span className="text-sm">{office.address}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full overflow-hidden z-0 h-[300px] shrink-0 mt-auto">
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
