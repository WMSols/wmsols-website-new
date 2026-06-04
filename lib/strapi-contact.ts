export interface ContactPayload {
  name: string;
  email: string;
  projectDetails: string;
  company: string;
  budget: string;
  reference: string;
  phone: string;
  requiredService: string;
}

export interface ContactResponse {
  data: {
    id: number;
    documentId: string;
  };
}

export async function submitContactForm(payload: ContactPayload): Promise<ContactResponse> {
  const base = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '');
  const token = process.env.NEXT_PUBLIC_API_TOKEN ?? '';

  const response = await fetch(`${base}/api/contact-messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ data: payload }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => null);
    throw new Error(err?.error?.message ?? `Request failed: ${response.status}`);
  }

  return response.json() as Promise<ContactResponse>;
}