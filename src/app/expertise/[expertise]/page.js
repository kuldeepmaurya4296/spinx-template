import Expertise from "@/components/pages/experties/Index";
import IndivisualExpertise from "@/components/pages/experties/indivisualExperty/Index";
export const metadata = {
    title: "Expertise Detail | Spinx - Industry-Leading Digital Solutions",
    description: "Learn more about Spinx’s specialized expertise in web development, UI/UX design, and innovative digital solutions tailored to your business needs.",
    openGraph: {
      title: "Expertise Detail | Spinx",
      description: "Explore how Spinx delivers top-notch services in cutting-edge digital solutions, helping businesses thrive in the digital era.",
      url: "https://www.your-spinx-app.com/expertise/detail"
    }
  };
  
export default function WorkPage() {
    return (
        <>
            <IndivisualExpertise />
        </>
    )
}