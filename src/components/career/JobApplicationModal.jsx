import { useState, useEffect } from 'react';
import '@/styles/career/jobApplicationModal.css';

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
    <div
      className="modalBg fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h3 className="mb-4 text-2xl font-semibold">Apply for {selectedJob.title}</h3>
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.target;
            const formData = new FormData(form);

            const payload = {
              name: formData.get('name'),
              email: formData.get('email'),
              phone: formData.get('phone'),
              message: formData.get('message'),
              resumeUrl: 'Uploaded Separately', // optional: use a file upload service
            };

            if (formData.get('website')) {
              return; // likely a bot
            }

            try {
              const response = await fetch(
                'https://script.google.com/macros/s/AKfycbz1ysEFuq61SmGkkcZOUolKYyOBUQPLmkhZeNQZ0tjBcGK-1XWCPrnYAUDe3VK0lp-gHg/exec',
                {
                  method: 'POST',
                  body: JSON.stringify(payload),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                },
              );

              const result = await response.json();
              if (result.result === 'success') {
                alert('Application submitted successfully!');
                form.reset();
              } else {
                alert('Something went wrong. Please try again.');
              }
            } catch (error) {
              console.error(error);
              alert('Error submitting form');
            }
          }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="mb-1 block text-base font-medium">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              className="focus:ring-input-focus w-full rounded-md border p-2 text-base focus:ring-1 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block text-base font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
              className="focus:ring-input-focus w-full rounded-md border p-2 text-base focus:ring-1 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="mb-1 block text-base font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your phone number"
              className="focus:ring-input-focus w-full rounded-md border p-2 text-base focus:ring-1 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="resume" className="mb-1 block text-base font-medium">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              className="focus:ring-input-focus w-full rounded-md border p-2 text-base focus:ring-1 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="mb-1 block text-base font-medium">
              Cover Letter<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write cover letter"
              required
              className="focus:ring-input-focus h-32 w-full rounded-md border p-2 text-base focus:ring-1 focus:outline-none"
            ></textarea>
          </div>

          <div className="mb-4 hidden">
            <label htmlFor="website" className="mb-1 block text-base font-medium">
              Website
            </label>
            <input type="text" id="website" name="website" placeholder="website" className="border text-base" />
          </div>
          <button
            type="submit"
            className="button contactBtn mt-4 w-full rounded-md bg-teal-500 py-2 text-white hover:bg-teal-600"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
