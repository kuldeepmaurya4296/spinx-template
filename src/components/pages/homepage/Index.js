import Link from "next/link";
import AwardWinningAgency from "./Awards";
import FeaturedProject from "./FeaturedProject";
import HeroSection from "./HeroSection";
import WeAreSection from "./WeAre";
import HighlightSection from "./HighlightSection";
import BrandsSection from "./BrandsSection";
import LogoCarousel from "./LogoCareousel";
import ExpertiseSection from "./ExpertiesSection";
import AwardsRecognition from "./AwardsRecognition";
import AwardsSection from "./AwardsSection";
import OurProcessSection from "./OurProcessSection";
import StepNavigation from "./StepNavigation";
import ContactUsSection from "./ContactUsSection";
import Testimonials from "./Testimonials";
import LearnSection from "./LearnSection";
import DiveIn from "./DiveIn";
import SplitText from "@/components/animation/SplitText";
import { getAwards, getAwardsRecognition, getAwardsSection, getBrands, getContactData, getDiveInData, getExpertise, getHeroData, getHighlights, getInsights, getLogos, getProcessSteps, getProjectsData, getStepsNavigation, getTestimonials, getWhatWeAre } from "@/utills/homepage";
import { getAllProjects } from "@/utills/individualWork";
import { urlFor } from "@/sanity/lib/image";

export default async function HomePage() {
    const heroData = await getHeroData();
    const awardData = await getAwards()
    const projects = await getAllProjects()
    const whatWeAre = await getWhatWeAre()
    const highlightData = await getHighlights()
    const brandsData = await getBrands()
    const logos = await getLogos()
    const expertiseData = await getExpertise()
    const awardsRecognitionData = await getAwardsRecognition()
    const awardsData = await getAwardsSection()

    const processStepsData = await getProcessSteps()
    const stepsData = await getStepsNavigation()
    const contactData = await getContactData()
    const testimonialData = await getTestimonials()
    const insightsData = await getInsights()
    const diveInData = await getDiveInData()

    // console.log('heroData', brandsData)
    // console.log('expertiseData', expertiseData)
    // console.log('awardsRecognitionData', awardsRecognitionData) 
    // console.log('awardsData', awardsData)
    // console.log('processStepsData', processStepsData)
    // console.log('stepsData', stepsData)
    // console.log('contactData', contactData)
    // console.log('testimonialData', testimonialData)
    // console.log('insightsData', insightsData)
    // console.log('diveInData', diveInData)
    // console.log('logos', logos)

    return (
        <main className="bg-[#16171A] text-white">
            <HeroSection data={heroData} />
            <AwardWinningAgency data={awardData} />
            <div className="py-4">
                <h1 className="md:text-end text-2xl md:text-6xl font-bold px-4 md:px-20">
                    {/* Featured Projects */}
                    <SplitText text="Featured Projects" />
                </h1>
                {projects.slice(0, 3).map((project, index) => (
                    <FeaturedProject
                        key={index}
                        title={project.title}
                        description={project.subtitle}
                        image={project.thumbnailImage ? urlFor(project.thumbnailImage).url() : "/default.webp"} // Fallback Image
                        bgColor={index % 2 === 0 ? "#10141c" : "white"}
                        slug={project.slug.current}
                    />
                ))}


                <div className="flex justify-end">
                    <Link href="/work" className="underline text-lg md:text-2xl text-end px-4 md:px-20">
                        See More Work
                    </Link>
                </div>
            </div>
            <WeAreSection data={whatWeAre} />

            <div className="px-4 md:px-20 py-20 overflow-hidden">
                <h2 className="text-gray-400 text-lg text-center md:text-left w-full border-b py-4">
                    What makes us one of the top-rated web design companies?
                </h2>
                {highlightData.map((item, index) => (
                    <HighlightSection
                        key={index}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        positionOffset={item.positionOffset}
                    />
                ))}
            </div>

            <BrandsSection data={brandsData} />
            <LogoCarousel logos={logos} bgColor="white" direction="right" />
            <LogoCarousel logos={logos} />
            <ExpertiseSection data={expertiseData} />
            <div>

                <div className="px-4 md:px-20 py-10 md:pt-40">
                    <h2 className="text-4xl md:text-7xl md:pr-60 font-bold bg-gradient-to-r from-lime-400 to-green-500 text-transparent bg-clip-text">
                        We are experts in leading industry standard platforms & technologies.
                    </h2>
                </div>
                <LogoCarousel logos={logos} bgColor="white" direction="right" />
                <LogoCarousel logos={logos} />
            </div>

            <section>
                <AwardsRecognition data={awardsRecognitionData} />
                <AwardsSection awardsData={awardsData} />
                <sapn className='w-full px-20 text-4xl mt-20 py-10'>

                    <Link href={'#'} >View More</Link>
                </sapn>
            </section>
            <OurProcessSection
                title="Our Process"
                subtitle="From Design to Launch"
                description="Our expert team handles the entire development process, guiding you from concept to a fully launched website."
                processSteps={processStepsData}
            />
            <StepNavigation steps={stepsData} />
            <ContactUsSection data={contactData} />;
            <Testimonials
                heading="Testimonials"
                description="Take a deep dive into the tales of triumph from our web design agency. Our clients enthusiastically recount their journeys, showcasing how our cutting-edge web design solutions have revolutionized their online platforms."
                testimonials={testimonialData}
            />
            <LearnSection
                title="Learn"
                data={insightsData}
                linkTitle="View More Insights"
                linkHref="/resources/insights"
            />

            <div className="bg-[#181818] text-white px-4 md:px-20 py-16">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Uniquely built for{" "}
                    <span className="text-[#F5C37E]">your brand</span>
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
                    Our team of web designers and developers at SPINX Digital excel at
                    creating custom design solutions for every single client – no two sites
                    are alike. Here's how we do it:
                </p>
            </div>
            <StepNavigation steps={stepsData} />
            <DiveIn data={diveInData} />;
        </main>
    );
}