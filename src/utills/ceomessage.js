import client from "@/sanity/lib/client";

export async function getCeoMessage() {
  try {
    const query = `*[_type == "ceo"][0]{
      name,
      email,
      message,
      about,
      "imageUrl": image.asset->url,
      "slug": slug.current
    }`;

    const ceoData = await client.fetch(query);
    return ceoData;
  } catch (error) {
    console.error('Error fetching CEO message:', error);
    return null;
  }
}
