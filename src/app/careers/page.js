import Careers from "@/components/pages/careers/Index";
import Head from "next/head";

export const metadata = {
    title: "Careers at Spinx - Join Our Team",
    description: "Explore exciting career opportunities at Spinx. Join our innovative team and work on cutting-edge web technologies to shape the future of digital experiences.",
    keywords: [
        "Spinx Careers",
        "Jobs at Spinx",
        "Work at Spinx",
        "Web Development Jobs",
        "UI/UX Careers",
        "Tech Jobs",
        "Next.js Developer Jobs"
    ],
    author: "Flourishers Edge",
    metadataBase: new URL("https://your-spinx-app.com"),
    alternates: {
        canonical: "https://your-spinx-app.com/careers",
    },
    openGraph: {
        title: "Careers at Spinx - Join Our Team",
        description: "Join Spinx and be part of an innovative team working on modern web technologies. Explore job openings and grow your career with us.",
        url: "https://your-spinx-app.com/careers",
        siteName: "Spinx",
        images: [
            {
                url: "https://your-spinx-app.com/careers.jpg",
                width: 1200,
                height: 630,
                alt: "Spinx Careers",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@yourTwitterHandle",
        creator: "@yourTwitterHandle",
        title: "Careers at Spinx - Join Our Team",
        description: "Discover career opportunities at Spinx and become part of our talented team shaping the future of the web.",
        images: ["https://your-spinx-app.com/twitter-careers.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            { url: "/favicon.ico", type: "image/x-icon" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
};

// const jsonLdCareers = {
//     "@context": "https://schema.org",
//     "@type": "JobPosting",
//     "title": "Various Positions at Spinx",
//     "description": "Join Spinx, a cutting-edge web development company. We are looking for talented individuals in Next.js, React, UI/UX, and full-stack development.",
//     "hiringOrganization": {
//         "@type": "Organization",
//         "name": "Spinx",
//         "sameAs": "https://your-spinx-app.com",
//         "logo": "https://your-spinx-app.com/logo.png"
//     },
//     "employmentType": "Full-time",
//     "jobLocation": {
//         "@type": "Place",
//         "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "123 Tech Park, Bhopal",
//             "addressLocality": "Bhopal",
//             "addressRegion": "Madhya Pradesh",
//             "postalCode": "462001",
//             "addressCountry": "IN"
//         }
//     },
//     "datePosted": "2025-04-01",
//     "validThrough": "2025-06-30",
//     "baseSalary": {
//         "@type": "MonetaryAmount",
//         "currency": "INR",
//         "value": {
//             "@type": "QuantitativeValue",
//             "value": "Negotiable",
//             "unitText": "MONTH"
//         }
//     },
//     "applicantLocationRequirements": {
//         "@type": "Country",
//         "name": "India"
//     }
// };

export default function CareerPage() {
    return (
        <>
            {/* <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCareers) }}
                />
            </Head> */}
            <Careers />
        </>
    );
}
