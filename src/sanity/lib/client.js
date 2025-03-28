import { createClient } from '@sanity/client';

const projectId = 'cc98kfz3' || '';
const dataset = 'production' || 'production';
const token = "skOEougU9fNERzJDN1xmd5yDtRvksyUtom5d0kbzQd3anbVjWi0QwZqG315h6t7ODjVHd4Ch0qq5Vt2dwSoOZTFDY32giz05Hj21R8zO49PR4VXTzfpX1dxH5Es7Z7jMGgRSWc2X6YO5nE4O8d5mmKhOKxXh32KDFF2UYsOIUx38l47GtZU4"
if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01',
  useCdn: true,
  token,
});

export default client;
