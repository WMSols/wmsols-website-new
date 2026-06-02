import React, { useState } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    onSuccess();
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
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
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
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
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Company/Organisation
            </label>
            <input
              type="text"
              name="company"
              placeholder="Dell Inc"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Phone
            </label>
            <input
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
            <label className="block text-sm font-medium  mb-1">
              Service You are Interested in
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-500"
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
            <label className="block text-sm font-medium  mb-1">
              Project Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white "
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
          <label className="block text-sm font-medium  mb-1">
            Tell us about your project <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            required
            rows={5}
            placeholder="Please write a detail description about your project"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              How did you hear about us? ( Optional )
            </label>
            <select
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
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full md:w-32 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;