import { getAwards, getInsights, getLogos, getProcessSteps, getProjectsData, getTestimonials } from "@/utills/homepage";
import AwardWinningAgency from "../homepage/Awards";
import LearnSection from "../homepage/LearnSection";
import LogoCarousel from "../homepage/LogoCareousel";
import OurProcessSection from "../homepage/OurProcessSection";
import Testimonials from "../homepage/Testimonials";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import Work from "./work";
import { getAllProjects } from "@/utills/individualWork";

export default async function Works() {
  const processStepsData = await getProcessSteps();
  const awardData=  await getAwards()
  const logos = await getLogos();
  const testimonialData = await getTestimonials();
 
  const insightsData = await getInsights()
  const projects = await getAllProjects()
  // console.log('insightsData-----', projects)

  return (
    <main className="bg-[#16171A] text-white pt-36">
      <OurProcessSection
        title="World Class"
        subtitle="Digital destinations, from idea to execution"
        processSteps={processStepsData[0]}
      />
      <LogoCarousel logos={logos} bgColor="white" direction="right" />
      <LogoCarousel logos={logos} />
      <Work projects={projects}/>
      <Projects projectCard={projects}/>
      <Testimonials
        testimonials={testimonialData}
      />
      <AwardWinningAgency data={awardData} />
      <LearnSection
      title="Learn"
      data={insightsData}
      linkTitle="View More Insights"
      linkHref="/resources/insights"
    />
    </main>
  )
}