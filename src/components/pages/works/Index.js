import AwardWinningAgency from "../homepage/Awards";
import LearnSection from "../homepage/LearnSection";
import LogoCarousel from "../homepage/LogoCareousel";
import OurProcessSection from "../homepage/OurProcessSection";
import Testimonials from "../homepage/Testimonials";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import Work from "./work";

export default function Works() {
  const processStepsData =
  {
    title: "Planning & Research",
    description: "We start by understanding your goals and audience.",
    videoUrl: "https://www.youtube.com/watch?v=zUtTpuqV55U",
  }
  const logos = [
    "/image-intro1.webp",
    "/image-intro1.webp",
    "/image-intro1.webp",
    "/image-intro1.webp",
    "/image-intro1.webp",
    "/image-intro1.webp",
    "/image-intro1.webp",
  ];
  const testimonialData = [
    {
      logo: "/image-intro1.webp",
      category: "B2C ELECTRICAL PARTS ECOMMERCE WEBSITE",
      quote:
        "The team is highly responsive and eager to help. They show a commitment to excellence for both large and small projects.",
      name: "Dana Knight",
      position: "Senior Director Global Marketing & Customer Experience",
    },
    {
      logo: "/image-intro1.webp",
      category: "SAAS SOFTWARE COMPANY",
      quote:
        "Their expertise in design and development has helped us scale our product faster and enhance user engagement.",
      name: "Alex Johnson",
      position: "CTO, Tech Solutions Inc.",
    },
  ];
  const insightsData = [
    {
      type: "Insight",
      title: "48 Award-Winning Best Website Designs in 2025",
      categories: ["UX", "Web Development", "Website Redesign"],
    },
    {
      type: "Insight",
      title: "25 Web Design Tutorials and Courses for Beginners to Expert Developers in 2024",
      categories: ["Web Development"],
    },
    {
      type: "Guide",
      title: "Top Website Design Companies in 2025",
      categories: ["Website Redesign"],
    },
  ];

  return (
    <main className="bg-[#16171A] text-white pt-36">
      <OurProcessSection
        title="World Class"
        subtitle="Digital destinations, from idea to execution"
        processSteps={processStepsData}
      />
      <LogoCarousel logos={logos} bgColor="white" direction="right" />
      <LogoCarousel logos={logos} />
      <Work />
      <Projects />
      <Testimonials
        testimonials={testimonialData}
      />
      <AwardWinningAgency />
      <LearnSection
      title="Learn"
      data={insightsData}
      linkTitle="View More Insights"
      linkHref="/insights"
    />
    </main>
  )
}