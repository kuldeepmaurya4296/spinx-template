import { getDiveInData, getHighlights, getStepsNavigation, getWhatWeAre } from "@/utills/homepage";
import DiveIn from "../homepage/DiveIn";
import HighlightSection from "../homepage/HighlightSection";
import StepNavigation from "../homepage/StepNavigation";
import WeAreSection from "../homepage/WeAre";
import DemoImage from "../works/IndivisualWork/DemoImage";
import CEOMessage from "./CEOMessage";
import { getCeoMessage } from "@/utills/ceomessage";

export default async function AboutUS() {
    const weAre = await getWhatWeAre();
    const highlightData = await getHighlights()
    const stepNavigation = await getStepsNavigation();
    const ceoData = await getCeoMessage();
    const diveInData = await getDiveInData();
    return (
        <main className="pt-0 bg-[#16171A] text-white flex flex-col gap-20">
            <WeAreSection data={weAre} />
            {/* <DemoImage images={demoImages} /> */}
            <div className="px-4 md:px-20 py-4">
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
            <StepNavigation steps={stepNavigation}/>
            <CEOMessage data={ceoData} />
            <DiveIn data={diveInData}/>
        </main>
    )
}