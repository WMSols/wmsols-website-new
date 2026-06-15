'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, UploadCloud, CheckCircle2, X } from 'lucide-react';
import { Job, parseRichTextBlocks } from '@/lib/strapi-careers';
import { submitJobApplication } from '@/lib/strapi-jobApply';
// 1. Import the tracking functions
import { trackJobApplicationStart, trackJobApplicationSubmit } from '@/lib/analytics';

interface JobDetailsProps {
  job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Controlled form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setResumeFile(file);
    if (errorMsg) setErrorMsg(null);
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Read file directly from the input ref at submit time — most reliable
    const file = fileInputRef.current?.files?.[0] ?? resumeFile ?? null;

    if (!file) {
      setErrorMsg('Please upload your resume before submitting.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      await submitJobApplication({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        coverLetter: formData.coverLetter,
        title: job.title,
        resume: file,
      });
      
      setIsSubmitted(true);
      
      // 2. Track Successful Submission
      trackJobApplicationSubmit(job.title, true);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMsg(errorMessage);
      
      // 3. Track Failed Submission (helps identify if people are failing due to file size limits, etc.)
      trackJobApplicationSubmit(job.title, false, errorMessage);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setErrorMsg(null);
      setFormData({ name: '', email: '', phone: '', coverLetter: '' });
      setResumeFile(null);
    }, 300);
  };

  // ─── Data Mapping ─────────────────────────────────────────────────────────
  const overviewText = parseRichTextBlocks(job.overview).join('\n\n');
  const responsibilitiesList = parseRichTextBlocks(job.responsiblities);
  const requirementsList = parseRichTextBlocks(job.requirements);
  const benefitsList = parseRichTextBlocks(job.benefits);
  const extrasList = job.extras
    ? job.extras.split(/,|\n/).map(s => s.trim()).filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans py-10">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          href="/careers"
          className="text-sm hover:underline text-gray-600 hover:text-black mb-8 inline-block"
        >
          &larr; Back to Jobs list
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> {job.domain}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {job.type}
            </span>
          </div>
        </div>

        {/* Detail Sections */}
        <div className="space-y-12">
          {overviewText && (
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
              <h2 className="text-lg font-medium text-gray-900">About the Role :</h2>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                {overviewText}
              </p>
            </div>
          )}

          {responsibilitiesList.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
              <h2 className="text-lg font-medium text-gray-900">What You'll Do :</h2>
              <ul className="space-y-3">
                {responsibilitiesList.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 mt-1 text-gray-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {requirementsList.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
              <h2 className="text-lg font-medium text-gray-900">What We're Looking For :</h2>
              <ul className="space-y-3">
                {requirementsList.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 mt-1 text-gray-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {extrasList.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
              <h2 className="text-lg font-medium text-gray-900">Nice to Have :</h2>
              <ul className="space-y-3">
                {extrasList.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 mt-1 text-gray-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {benefitsList.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
              <h2 className="text-lg font-medium text-gray-900">What We Offer :</h2>
              <ul className="space-y-3">
                {benefitsList.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 mt-1 text-gray-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Apply Button */}
        <div className="mt-16">
          <button
          aria-label={`Apply for ${job.title} position`}
            onClick={() => {
              setIsModalOpen(true);
              // 4. Track Intent to Apply
              trackJobApplicationStart(job.title);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[70vh] overflow-y-auto m-4 p-8">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">
                    {job.domain}
                  </span>
                  <h2 className="text-2xl font-bold mt-1 text-gray-900">
                    Apply For {job.title}
                  </h2>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-6">
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
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="00 000 00000000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[calc(50%-12px)]"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Upload Resume / CV <span className="text-red-500">*</span>
                    </label>
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <UploadCloud className="w-6 h-6 text-gray-400 mb-2" />
                      {resumeFile ? (
                        <p className="text-sm text-green-600 font-medium">{resumeFile.name}</p>
                      ) : (
                        <p className="text-sm text-gray-500">
                          Acceptable Formats (pdf, docx)<br />Max: 5mb
                        </p>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept=".pdf,.docx"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      name="coverLetter"
                      rows={4}
                      placeholder="Add a cover letter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {errorMsg && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-md px-4 py-2">
                      {errorMsg}
                    </p>
                  )}

                  <button
                  aria-label='Job Application Submission button'
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
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
                        Submitting…
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </form>
              </>
            ) : (
              // ── Success State ──────────────────────────────────────────────
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Application Submitted!
                </h2>
                <p className="text-gray-500 text-sm max-w-sm mb-8">
                  Thank you for applying to the{' '}
                  <strong className="text-gray-900">{job.title}</strong> role.
                  Our team will review your application and get back to you shortly.
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