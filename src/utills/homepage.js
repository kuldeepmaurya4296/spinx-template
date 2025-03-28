import client from "@/sanity/lib/client";

export async function getHeroData() {
  const query = `*[_type == "heroSection"][0]{
      mainTitle,
      "mainTitleImage": mainTitleImage.asset->url,
      subTitle,
      "sideImage": sideImage.asset->url,
      companyTitle,
      companyDescription
    }`;

  try {
    const data = await client.fetch(query);
    // console.log("Fetched Hero Data:", data); // ✅ Debug Log
    return data;
  } catch (error) {
    console.error("Error fetching hero section data:", error);
    return null;
  }
}


export async function getAwards() {
  const query = `*[_type == "award"][0]{
    heading,
    logos[]{
      src,
      alt,
      title,
      link
    }
  }`;

  try {
    const data = await client.fetch(query);
    // console.log("Fetched Awards Data:", data); // ✅ Debug Log
    return data;
  } catch (error) {
    console.error("Error fetching awards data:", error);
    return null;
  }
}


export async function getProjectsData() {
  const query = `*[_type == "project"]{
      title,
      description,
      "imageUrl": image.asset->url,
    }`;

  try {
    const projects = await client.fetch(query);
    // console.log("Fetched Projects Data:", projects);
    return projects;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return [];
  }
}


export async function getWhatWeAre() {
  try {
    const query = `*[_type == "whatWeAre"][0] {
      heading,
      title,
      description,
      years,
      projects,
      awards
    }`;

    const data = await client.fetch(query);
    // console.log("Fetched 'What We Are' Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching 'What We Are' data:", error);
    return null;
  }
}


export async function getHighlights() {
  try {
    const query = `*[_type == "highlight"]{
      title,
      description,
      imageUrl,
      positionOffset
    }`;

    const highlights = await client.fetch(query);
    return highlights;
  } catch (error) {
    console.error("Error fetching highlights:", error);
    return [];
  }
}


export async function getBrands() {
  try {
    const query = `*[_type == "brands"][0]{
      heading,
      description
    }`;

    const brands = await client.fetch(query);
    return brands;
  } catch (error) {
    console.error("Error fetching brands data:", error);
    return null;
  }
}

export async function getLogos() {
  try {
    const query = `*[_type == "logos"] {
      "imageUrl": image.asset->url
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching Logos data:", error);
    return [];
  }
}


export async function getExpertise() {
  try {
    const query = `*[_type == "expertise"][0]{
      title,
      sections[] {
        title,
        content,
        link
      }
    }`;

    const expertise = await client.fetch(query);
    return expertise;
  } catch (error) {
    console.error("Error fetching expertise data:", error);
    return null;
  }
}


export async function getAwardsRecognition() {
  try {
    const query = `*[_type == "awardsRecognition"][0]{
      heading,
      subheading,
      description,
      link {
        text,
        url
      }
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching awards recognition data:", error);
    return null;
  }
}



export async function getAwardsSection() {
  try {
    const query = `*[_type == "awards"]{
      "logo": logo.asset->url,
      title,
      description,
      awards[] {
        organization,
        award
      }
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching awards data:", error);
    return [];
  }
}



export async function getProcessSteps() {
  try {
    const query = `*[_type == "processSteps"]{
      title,
      description,
      videoUrl
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching process steps data:", error);
    return [];
  }
}


export async function getStepsNavigation() {
  try {
    const query = `*[_type == "stepsNavigation"] | order(number asc) {
      id,
      title,
      number,
      content
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching steps navigation data:", error);
    return [];
  }
}


export async function getContactData() {
  try {
    const query = `*[_type == "contact"][0] {
      title,
      heading,
      label,
      "imageUrl": imageUrl.asset->url,
      description,
      buttonText
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return null;
  }
}



export async function getTestimonials() {
  try {
    const query = `*[_type == "testimonial"] {
      "logo": logo.asset->url,
      category,
      quote,
      name,
      position
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}


export async function getInsights() {
  try {
    const query = `*[_type == "insight"] {
      type,
      title,
      categories,
      readTime,
      slug
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching insights:", error);
    return [];
  }
}


export async function getDiveInData() {
  const query = `
    *[_type == "diveIn"][0] {
      titlePart1,
      titlePart2,
      images {
        "default": default.asset->url,
        "work": work.asset->url,
        "expertise": expertise.asset->url
      },
      sections
    }
  `;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching Dive In data:", error);
    return null;
  }
}