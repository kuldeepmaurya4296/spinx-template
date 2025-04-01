import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import CursorFollower from "@/components/common/CursorFollower";
import Navbar from "@/components/header/Index";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/common/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#040117", // Matches your dark background
  colorScheme: "dark", // Ensures dark mode compatibility
};

export const metadata = {
  title: "Spinx - The Ultimate Web Experience",
  description: "Spinx is a cutting-edge web application offering seamless performance, rich UI, and intuitive design for an enhanced digital experience.",
  keywords: "Spinx, Next.js App, Web Experience, UI/UX, Modern Web Apps",
  author: "Flourishers Edge",
  robots: "index, follow",
  openGraph: {
    title: "Spinx - The Ultimate Web Experience",
    description: "Experience the power of Spinx, a blazing-fast Next.js application built for modern users.",
    url: "https://your-spinx-app.com",
    type: "website",
    images: [
      {
        url: "https://your-spinx-app.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spinx Application",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Spinx - The Ultimate Web Experience",
    description: "Experience the power of Spinx, a blazing-fast Next.js application built for modern users.",
    images: ["https://your-spinx-app.com/twitter-image.jpg"],
  },
};

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "SoftwareApplication",
//   "name": "Spinx",
//   "operatingSystem": "Web",
//   "applicationCategory": "WebApplication",
//   "author": {
//     "@type": "Organization",
//     "name": "Flourishers Edge",
//     "url": "https://your-spinx-app.com"
//   },
//   "description": "Spinx is a cutting-edge web application offering seamless performance, rich UI, and intuitive design for an enhanced digital experience.",
//   "image": "https://your-spinx-app.com/logo.png",
//   "url": "https://your-spinx-app.com",
//   "sameAs": [
//     "https://linkedin.com/company/flourishers-edge",
//     "https://twitter.com/yourTwitterHandle"
//   ],
//   "offers": {
//     "@type": "Offer",
//     "price": "0",
//     "priceCurrency": "USD",
//     "availability": "https://schema.org/InStock"
//   }
// };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </head> */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <Toaster />
        <CursorFollower />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
