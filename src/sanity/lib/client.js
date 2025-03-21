import { createClient } from '@sanity/client';

const projectId = 'cc98kfz3' || '';
const dataset = 'production' || 'production';

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables.");
}
console.log("projectId", projectId);
console.log("dataset", dataset);

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01',
  useCdn: true,
});

export default client;
