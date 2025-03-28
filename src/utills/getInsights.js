import client from "@/sanity/lib/client";

export const getInsightsBySlug = async (slug) => {
  const query = `
    *[_type == "insight" && slug.current == $slug][0] {
      title,
      slug,
      type,
      categories,
      readTime,
      "author": user-> { userId, name },
      thumbnailImage,
      content
    }
  `;

  try {
    const insight = await client.fetch(query, { slug });
    return insight;
  } catch (error) {
    console.error("Error fetching insight by slug:", error);
    return null;
  }
};



export async function getRelatedInsights(slug) {
  try {
    // Fetch the current insight based on the slug
    const currentInsight = await client.fetch(
      `*[_type == "insight" && slug.current == $slug][0]{
        categories
      }`,
      { slug }
    );

    if (!currentInsight) return [];

    // Fetch related insights that share at least one category, excluding the current insight
    const relatedInsights = await client.fetch(
      `*[_type == "insight" && slug.current != $slug && count(categories[@ in $categories]) > 0]{
        title,
        slug,
        type,
        readTime,
        "author": user->name,
        "thumbnail": thumbnailImage.asset->url,
        categories
      }`,
      { slug, categories: currentInsight.categories }
    );

    return relatedInsights;
  } catch (error) {
    console.error("Error fetching related insights:", error);
    return [];
  }
}
