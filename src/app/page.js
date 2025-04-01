import BgEffect from "@/components/common/BgEffect";
import HomePage from "@/components/pages/homepage/Index";
export const metadata = {
  title: "Spinx - The Ultimate Web Experience",
  description: "Spinx is a cutting-edge web application offering seamless performance, rich UI, and intuitive design for an enhanced digital experience.",
  keywords: [
    "Spinx",
    "Next.js App",
    "Web Experience",
    "UI/UX",
    "Modern Web Apps",
    "Fast Web Applications",
    "Seamless User Experience"
  ],
  author: "Flourishers Edge",
  metadataBase: new URL("https://your-spinx-app.com"),
  alternates: {
    canonical: "https://your-spinx-app.com/",
    types: {
      "application/rss+xml": "https://your-spinx-app.com/rss.xml",
    },
  },
  openGraph: {
    title: "Spinx - The Ultimate Web Experience",
    description: "Experience the power of Spinx, a blazing-fast Next.js application built for modern users.",
    url: "https://your-spinx-app.com",
    siteName: "Spinx",
    images: [
      {
        url: "https://your-spinx-app.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spinx Application",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Spinx - The Ultimate Web Experience",
    description: "Experience the power of Spinx, a blazing-fast Next.js application built for modern users.",
    images: ["https://your-spinx-app.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    title: "Spinx - The Ultimate Web Experience",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export default function Home() {
  return (
    <>
      <BgEffect />
      <HomePage />
    </>
  );
}
