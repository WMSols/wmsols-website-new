const STRAPI_BASE_URL = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '');
const STRAPI_BEARER_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN ?? '';

export interface JobApplicationPayload {
  name: string;
  email: string;
  phone: string;
  coverLetter?: string;
  title: string;
  resume?: File;
}

export async function submitJobApplication(payload: JobApplicationPayload): Promise<Response> {
  const headers = new Headers();
  headers.set('Authorization', `Bearer ${STRAPI_BEARER_TOKEN}`);
  
  let resumeId: number | null = null;

  // STEP 1: Upload the file first
  if (payload.resume) {
    const uploadFormData = new FormData();
    // Strapi's upload endpoint expects the key to be exactly 'files'
    uploadFormData.append('files', payload.resume);

    const uploadRes = await fetch(`${STRAPI_BASE_URL}/api/upload`, {
      method: 'POST',
      headers, // Passes Authorization, browser handles Content-Type for FormData
      body: uploadFormData,
    });

    if (!uploadRes.ok) {
      const text = await uploadRes.text().catch(() => '');
      throw new Error(`Resume upload failed: ${text}`);
    }

    const uploadData = await uploadRes.json();
    // /api/upload returns an array of uploaded file objects
    resumeId = uploadData[0].id; 
  }

  // STEP 2: Create the job application entry
  // Now we explicitly set JSON headers for the entry creation
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');

  const jsonPayload = {
    data: {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      title: payload.title,
      ...(payload.coverLetter && { coverLetter: payload.coverLetter }),
      ...(resumeId && { resume: resumeId }), // Link the uploaded file ID
    }
  };

  const url = `${STRAPI_BASE_URL}/api/job-applications`;
  
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(jsonPayload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(
      `Strapi entry creation failed (${res.status} ${res.statusText}) ${text}`.trim()
    );
  }

  const json = await res.json();
  console.log(JSON.stringify(json, null, 2));
  return res;
}