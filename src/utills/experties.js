import client from "@/sanity/lib/client";


// Fetch expertise hero section
export async function getHeroExperties() {
  try {
    const query = `*[_type == "expertiseHero"][0]{
      level,
      title {
        main,
        secondary
      },
      subtitle,
      description,
      bgText
    }`;

    const heroExpertise = await client.fetch(query);
    return heroExpertise;
  } catch (error) {
    console.error("Error fetching hero expertise:", error);
    return null;
  }
}


// Fetch all expertise documents
export async function getAllExperties() {
  try {
    const query = `*[_type == "individualExpertise"]{
      _id,
      title,
      subtitle,
      name,
      description,
      "slug": slug.current,
      "speciality": speciality[]{
        name,
        description,
        "bgImageUrl": bgImage.asset->url
      }
    }`;

    const expertises = await client.fetch(query);
    return expertises;
  } catch (error) {
    console.error("Error fetching expertise:", error);
    return [];
  }
}

// Fetch a single expertise by slug
export async function getExpertiesBySlug(slug) {
  try {
    const query = `*[_type == "individualExpertise" && slug.current == $slug][0]{
      _id,
      title,
      subtitle,
      name,
      description,
      "slug": slug.current,
      "speciality": speciality[]{
        name,
        description,
        "bgImageUrl": bgImage.asset->url
      }
    }`;

    const expertise = await client.fetch(query, { slug });
    return expertise;
  } catch (error) {
    console.error("Error fetching expertise by slug:", error);
    return null;
  }
}
