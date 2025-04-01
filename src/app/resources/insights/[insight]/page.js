
import IndivisualInsights from "@/components/pages/resources/insights/IndivisualInsights/Index";
export const metadata = {
    title: "Insight Title | Spinx - Expert Analysis & Industry Trends",
    description: "Explore this detailed insight on [Topic] by Spinx, offering expert opinions and analysis on the latest trends in the digital world.",
    openGraph: {
      title: "Insight Title | Spinx",
      description: "In this insight, Spinx explores [Topic], providing deep analysis and forward-thinking perspectives on digital innovation.",
      url: "https://www.your-spinx-app.com/insights/insight-title",
      images: [
        {
          url: "https://www.your-spinx-app.com/insights/insight-title-image.jpg",
          width: 1200,
          height: 630,
          alt: "Insight Title"
        }
      ]
    }
  };
  
export default function IndivisualInsightsPage() {

    return (
        <>
            <IndivisualInsights/>
        </>

    )
}