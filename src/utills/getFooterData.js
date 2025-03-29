import client from "@/sanity/lib/client";

export async function getFooterData() {
  try {
    const query = `*[_type == "footer"][0]{
      navigationLinks[]{name, url},
      contact{phone, email, address},
      socialLinks[]{name, "icon": icon.asset->url, url},
      copyright
    }`;
    
    const footerData = await client.fetch(query);
    return footerData;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return null;
  }
}
