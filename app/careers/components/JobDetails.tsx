'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, UploadCloud, CheckCircle2, X } from 'lucide-react';
import { Job } from '@/data/careers';

interface JobDetailsProps {
  job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset state after close animation if needed
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans py-10">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link href="/careers" className="text-sm hover:underline text-gray-600 hover:text-black mb-8 inline-block">
          &larr; Back to Jobs list
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> {job.department}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {job.type}
            </span>
          </div>
        </div>

        {/* Details Sections */}
        <div className="space-y-12">
          {/* About */}
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
            <h3 className="text-lg font-medium text-gray-900">About the Role :</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{job.aboutRole}</p>
          </div>

          {/* What You'll Do */}
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
            <h3 className="text-lg font-medium text-gray-900">What You'll Do :</h3>
            <ul className="space-y-3">
              {job.whatYoullDo.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="mr-2 mt-1 text-gray-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We're Looking For */}
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
            <h3 className="text-lg font-medium text-gray-900">What We're Looking For :</h3>
            <ul className="space-y-3">
              {job.whatWereLookingFor.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="mr-2 mt-1 text-gray-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nice to Have */}
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
            <h3 className="text-lg font-medium text-gray-900">Nice to Have :</h3>
            <ul className="space-y-3">
              {job.niceToHave.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600">{item}</li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
            <h3 className="text-lg font-medium text-gray-900">What We Offer :</h3>
            <ul className="space-y-3">
              {job.whatWeOffer.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="mr-2 mt-1 text-gray-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-16">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal} />
          
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4 p-8">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{job.department}</span>
                  <h2 className="text-2xl font-bold mt-1 text-gray-900">Apply For {job.title}</h2>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" required placeholder="Sara Jones" className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input type="email" required placeholder="abc@gmail.com" className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" required placeholder="00 000 00000000" className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[calc(50%-12px)]" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Upload Resume / CV <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                      <UploadCloud className="w-6 h-6 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Acceptable Formats (pdf , docx)<br/>Max: 5mb</p>
                      <input type="file" className="hidden" required accept=".pdf,.docx" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Cover Letter ( Optional ) <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={4} 
                      placeholder="Add a cover letter"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for applying to the <strong>{job.title}</strong> role. Our team will review your application and get back to you shortly.
                </p>
                <button 
                  onClick={closeModal}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;