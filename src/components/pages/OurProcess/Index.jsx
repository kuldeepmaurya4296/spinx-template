import { getDiveInData, getProcessSteps, getStepsNavigation } from "@/utills/homepage";
import DiveIn from "../homepage/DiveIn";
import HighlightSection from "../homepage/HighlightSection";
import OurProcessSection from "../homepage/OurProcessSection";
import StepNavigation from "../homepage/StepNavigation";
import DemoImage from "../works/IndivisualWork/DemoImage";

export default async function OurProcess() {

    const processStepsData = await getProcessSteps()
    const stepNavigation = await getStepsNavigation();
    const diveInData = await getDiveInData();
    return (
        <main className="pt-36 bg-[#16171A] text-white">
            <OurProcessSection
                title="Our Process"
                subtitle="From Design to Launch"
                description="Our expert team handles the entire development process, guiding you from concept to a fully launched website."
                processSteps={processStepsData[0]}
            />
            <StepNavigation steps={stepNavigation} />
            <DiveIn data={diveInData} />
        </main> 
    )
}