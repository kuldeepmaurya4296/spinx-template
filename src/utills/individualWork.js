import client from "@/sanity/lib/client";

// Get all projects
export const getAllProjects = async () => {
  try {
    const query = `*[_type == "project"]`;
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// Get project by slug
export const getProjectBySlug = async (slug) => {
  try {
    const query = `*[_type == "project" && slug.current == $slug][0]`;
    const project = await client.fetch(query, { slug });
    return project;
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }
};

// Get projects by category
export const getProjectByCategory = async (category) => {
  try {
    const query = `*[_type == "project" && category == $category]`;
    const projects = await client.fetch(query, { category });
    return projects;
  } catch (error) {
    console.error("Error fetching projects by category:", error);
    return [];
  }
};