import Careers from "@/components/pages/careers/Index";
import JobDetails from "@/components/pages/careers/IndiisualJob";

export default function WorkPage() {
    const jobData = {
        title: "Frontend Developer",
        location: "Remote",
        overview: "We are looking for a talented Frontend Developer to join our team and build amazing user interfaces.",
        responsibilities: [
            "Develop and maintain web applications",
            "Ensure UI/UX designs are technically feasible",
            "Optimize applications for speed and scalability",
            "Collaborate with backend developers and designers",
        ],
        qualifications: [
            "Proficiency in React.js and Next.js",
            "Strong understanding of HTML, CSS, and JavaScript",
            "Experience with Tailwind CSS and Framer Motion",
            "Knowledge of RESTful APIs and Git",
        ],
    };


    return (
        <>
            <JobDetails job={jobData} />
        </>
    )
}