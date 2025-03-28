import client from "@/sanity/lib/client";

export const createJobApplication = async (formData) => {
  try {
    const { name, email, portfolio, resume, jobTitle } = formData;

    // Upload resume file to Sanity
    const uploadedResume = await client.assets.upload("file", resume);

    const newApplication = await client.create({
      _type: "jobApplication",
      name,
      email,
      portfolio,
      jobTitle,
      resume: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: uploadedResume._id,
        },
      },
      appliedAt: new Date().toISOString(),
    });

    return newApplication;
  } catch (error) {
    console.error("Error submitting application:", error);
    return null;
  }
};


export const getAllApplications = async () => {
  try {
    const applications = await client.fetch('*[_type == "jobApplication"]');
    console.log("Fetched applications:", applications);
    return applications;
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw new Error("Failed to retrieve job applications.");
  }
};
