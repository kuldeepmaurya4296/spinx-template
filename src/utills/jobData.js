import client from "@/sanity/lib/client";

export async function getJobsData() {
  try {
    const query = `*[_type == "job"]{
      _id,
      title,
      "jobId": jobId.current,
      categories,
      locations,
      overview,
      responsibilities,
      qualifications,
      benefits,
      postDate,
      lastDateToApply,
      salaryRange,
      jobType
    } | order(postDate desc)`;

    const jobs = await client.fetch(query);
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}


export async function getJobDetailById(jobId) {
  try {
    const query = `*[_type == "job" && _id == $jobId][0]{
      _id,
      title,
      type,
      categories,
      locations,
      overview,
      responsibilities,
      qualifications,
      benefits,
      salaryRange,
      jobType,
      postDate,
      lastDateToApply
    }`;

    const job = await client.fetch(query, { jobId });
    return job || null;
  } catch (error) {
    console.error("Error fetching job details:", error);
    return null;
  }
}
