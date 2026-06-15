'use client';

import React, { useState } from 'react';
import { submitContactForm } from '@/lib/strapi-contact';
import { trackFormSubmission } from '@/lib/analytics'; // 1. Import tracking

interface ContactFormProps {
  onSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    description: '',
    source: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        projectDetails: formData.description,
        budget: formData.budget,
        company: formData.company,
        reference: formData.source,
        phone: formData.phone,
        requiredService: formData.service,
      });
      
      // 2. Track the successful submission with valuable contextual data
      trackFormSubmission("Main Contact Form", true, {
        service_requested: formData.service,
        budget_range: formData.budget,
        lead_source: formData.source
      });

      onSuccess();
    } catch (err) {
      // 3. Optional: You can also track form failures if you want to debug drop-offs
      trackFormSubmission("Main Contact Form", false, {
        error_type: err instanceof Error ? err.message : 'Unknown'
      });

      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl w-full">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Sara Jones"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-1">
              Company/Organisation
            </label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Dell Inc"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+92 323 3243456"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-1">
              Service You are Interested in
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white "
            >
              <option value="" disabled>Select a service of your choice</option>
              <option value="web-dev">Web Development</option>
              <option value="mobile-dev">Mobile App Development</option>
              <option value="ai-automation">AI Automation</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="database">Database Architecture</option>
              <option value="digital-strategy">Digital Strategy</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-1">
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
            >
              <option value="" disabled>Choose your amount</option>
              <option value="under-5k">Under $5K</option>
              <option value="5k-15k">$5K–$15K</option>
              <option value="15k-50k">$15K–$50K</option>
              <option value="50k-plus">$50K+</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Tell us about your project <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            placeholder="Please write a detailed description about your project"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <label htmlFor="source" className="block text-sm font-medium text-gray-900 mb-1">
              How did you hear about us? (Optional)
            </label>
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-500"
            >
              <option value="" disabled>Select a value from dropdown</option>
              <option value="linkedin">LinkedIn</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 items-end">
            {/* Error message */}
            {errorMsg && (
              <p className="text-xs text-red-500 text-right w-full">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              aria-label={isSubmitting ? 'Sending contact request' : 'Send contact request'}
              className="w-full md:w-36 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending…
                </>
              ) : (
                'Send'
              )}
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;