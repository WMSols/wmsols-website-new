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
  const url = `${STRAPI_BASE_URL}/api/job-applications`;

  const formData = new FormData();
  formData.append('data[name]', payload.name);
  formData.append('data[email]', payload.email);
  formData.append('data[phone]', payload.phone);
  formData.append('data[title]', payload.title);
  if (payload.coverLetter) {
    formData.append('data[coverLetter]', payload.coverLetter);
  }

  if (payload.resume) {
    formData.append('files.resume', payload.resume);
  }

  const headers = new Headers();
  headers.set('Authorization', `Bearer ${STRAPI_BEARER_TOKEN}`);
  headers.set('Accept', 'application/json');

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(
      `Strapi request failed (${res.status} ${res.statusText}) ${text}`.trim()
    );
  }
console.log(res)
  return res;
  
}