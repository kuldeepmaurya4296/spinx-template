import AboutUS from "@/components/pages/aboutUs/Index";
import Head from "next/head";

export const metadata = {
    title: "About Spinx - Our Mission & Vision",
    description: "Learn more about Spinx, our mission, values, and the team behind the ultimate web experience. We are dedicated to innovation and seamless UI/UX design.",
    keywords: [
        "About Spinx",
        "Spinx Team",
        "Our Mission",
        "Spinx Web Experience",
        "Innovative Web Solutions",
        "Seamless UI/UX"
    ],
    author: "Flourishers Edge",
    metadataBase: new URL("https://your-spinx-app.com"),
    alternates: {
        canonical: "https://your-spinx-app.com/about",
    },
    openGraph: {
        title: "About Spinx - Our Mission & Vision",
        description: "Discover Spinx's vision, mission, and the team behind our cutting-edge web solutions. Learn how we create innovative and user-friendly experiences.",
        url: "https://your-spinx-app.com/about",
        siteName: "Spinx",
        images: [
            {
                url: "https://your-spinx-app.com/about-us.jpg",
                width: 1200,
                height: 630,
                alt: "Spinx Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@yourTwitterHandle",
        creator: "@yourTwitterHandle",
        title: "About Spinx - Our Mission & Vision",
        description: "Meet the team behind Spinx and learn about our dedication to innovation, performance, and seamless UI/UX design.",
        images: ["https://your-spinx-app.com/twitter-about.jpg"],
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

// const jsonLdAbout = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": "Spinx",
//     "url": "https://your-spinx-app.com",
//     "logo": "https://your-spinx-app.com/logo.png",
//     "description": "Spinx is an innovative web application dedicated to seamless UI/UX and performance-driven web experiences.",
//     "foundingDate": "2024",
//     "founders": [
//       {
//         "@type": "Person",
//         "name": "Founder Name",
//         "jobTitle": "CEO & Founder",
//         "sameAs": "https://linkedin.com/in/founder-name"
//       }
//     ],
//     "sameAs": [
//       "https://linkedin.com/company/flourishers-edge",
//       "https://twitter.com/yourTwitterHandle"
//     ],
//     "contactPoint": {
//       "@type": "ContactPoint",
//       "telephone": "+91-XXXXXXXXXX",
//       "contactType": "customer service",
//       "email": "support@your-spinx-app.com",
//       "availableLanguage": ["English", "Hindi"]
//     },
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "123 Tech Park, Bhopal",
//       "addressLocality": "Bhopal",
//       "addressRegion": "Madhya Pradesh",
//       "postalCode": "462001",
//       "addressCountry": "IN"
//     }
// };

export default function AboutUSPage() {
    return (
        <>
            {/* <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
                />
            </Head> */}
            <AboutUS />
        </>
    );
}
