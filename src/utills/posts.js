import client from "@/sanity/lib/client";

export async function getAllPosts() {
  try {
    const query = `*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "imageUrl": image.asset->url,
      body
    } | order(publishedAt desc)`;

    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

