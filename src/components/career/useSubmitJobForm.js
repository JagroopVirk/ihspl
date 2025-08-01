// src/components/career/useSubmitJobForm.js
export function useSubmitJobForm() {
  const submitApplication = async (formData) => {
    const response = await fetch('/api/sendApplication', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to submit application');
    }

    return await response.json();
  };

  return { submitApplication };
}
