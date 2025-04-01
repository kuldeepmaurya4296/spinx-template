import Careers from "@/components/pages/careers/Index";
import JobDetails from "@/components/pages/careers/IndivisibleJob";
import { getJobsData } from "@/utills/jobData";
export const metadata = {
    title: "Job Details | Spinx - Find Your Next Career Opportunity",
    description: "Explore detailed job descriptions, responsibilities, qualifications, and benefits for exciting career opportunities at Spinx.",
    openGraph: {
      title: "Job Details | Spinx",
      description: "Find all the details about job openings at Spinx, including requirements, benefits, and how to apply.",
      url: "https://www.your-spinx-app.com/careers/job-detail"
    }
  };
  
export default async function JobPage() {

    return (
        <>
            <JobDetails  />
        </>
    )
}