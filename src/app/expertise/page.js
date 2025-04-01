import Expertise from "@/components/pages/experties/Index";
import Works from "@/components/pages/works/Index";
export const metadata = {
    title: "Our Expertise | Spinx - Innovative Digital Solutions",
    description: "Discover our expertise in web development, UI/UX design, digital marketing, and more. We craft cutting-edge solutions for businesses of all sizes.",
    openGraph: {
      title: "Our Expertise | Spinx",
      description: "Explore Spinx's industry-leading expertise in digital solutions, including design, development, and marketing strategies.",
      url: "https://www.your-spinx-app.com/expertise"
    }
  };
  
export default function WorkPage() {
    return (
        <>
            <Expertise />
        </>
    )
}