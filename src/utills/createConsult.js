import client from "@/sanity/lib/client";

export async function createConsultation(data) {
  try {
    const response = await client.create({
      _type: "consultation", // Ensure this matches your Sanity schema type
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      website: data.website,
      message: data.message,
    });
    return response;
  } catch (error) {
    console.error("Sanity error:", error);
    throw error;
  }
}
