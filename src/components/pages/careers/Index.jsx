import { getLogos, getProcessSteps } from "@/utills/homepage";
import LearnSection from "../homepage/LearnSection";
import LogoCarousel from "../homepage/LogoCareousel";
import OurProcessSection from "../homepage/OurProcessSection"
import Jobs from "./Jobs";
import { getJobsData } from "@/utills/jobData";

export default async function Careers() {
    const jobData = await getJobsData();
    // console.log(jobData)
    
    const processStepsData = await getProcessSteps()
    const logos = await getLogos();
    return (
        <main className="pt-36 bg-[#16171A] text-white">
            <OurProcessSection
                title="Our Process"
                subtitle="From Design to Launch"
                description="Our expert team handles the entire development process, guiding you from concept to a fully launched website."
                processSteps={processStepsData[0]}
            />
            <LogoCarousel logos={logos} bgColor="white" direction="left" />
            <Jobs 
                title="Opportunities"
                data={jobData}
                // linkTitle="View More Insights"
                // linkHref="/insights"
            />
        </main>
    )
}