// src/components/career/JobApplicationModal.jsx
import { useState, useEffect } from 'react';

export default function JobApplicationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      setSelectedJob(e.detail);
      setIsOpen(true);
    };
    window.addEventListener('open-job-modal', handler);
    return () => window.removeEventListener('open-job-modal', handler);
  }, []);

  if (!isOpen || !selectedJob) return null;

  return (
    <div className="bg-bg-opaque fixed inset-0 z-50 mt-10 flex h-fit justify-center" onClick={() => setIsOpen(false)}>
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h3 className="mb-4 text-2xl font-semibold">Apply for {selectedJob.title}</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Upload Resume</label>
            <input type="file" accept=".pdf,.doc,.docx" className="mt-1 block w-full rounded-md shadow-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Cover Letter</label>
            <textarea rows="4" className="mt-1 block w-full rounded-md shadow-sm" />
          </div>
          <button type="submit" className="button contactBtn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
