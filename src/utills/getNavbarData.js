import client from "@/sanity/lib/client";

export async function getNavbarData() {
  try {
    const query = `*[_type == "navbar"][0] {
      navItems[]{
        name,
        href,
        dropdown[]{
          title,
          link,
          description
        }
      }
    }`;

    const navbar = await client.fetch(query);
    return navbar?.navItems || [];
  } catch (error) {
    console.error('Error fetching navbar data:', error);
    return [];
  }
}
