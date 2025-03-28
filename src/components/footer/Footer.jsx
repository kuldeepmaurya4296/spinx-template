import { Mail, Phone, MapPin, Linkedin, X, Facebook, Youtube, Globe } from "lucide-react";

const footerData = {
  navLinks: [
    { label: "About Us", href: "/about-us" },
    { label: "Insights", href: "/resources/insights" },
    { label: "Contact Us", href: "/connect-with-us" },
  ],
  contact: {
    phone: "213.894.9933",
    email: "hello@spinxdigital.com",
    address: "911 W. Washington Blvd. Los Angeles, California 90015",
  },
  socialLinks: [
    { icon: Linkedin, href: "#" },
    { icon: X, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Globe, href: "#" },
  ],
  bottomLinks: [
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Do Not Sell My Info", href: "#" },
  ],
  copyright: "© 2025 SPINX Digital All Rights Reserved",
};

export default function Footer() {
  return (
    <footer className="bg-[#16171A] text-white px-6 md:px-20 py-12 text-sm md:text-base">
      {/* Navigation Links */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 text-lg md:text-xl text-gray-400 border-t border-gray-700 pt-6 mt-6">
        {footerData.navLinks.map((link, index) => (
          <a key={index} href={link.href} className="hover:text-white">
            {link.label}
          </a>
        ))}
      </div>

      {/* Contact & Socials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-sm md:text-base">
        {/* Chat with us */}
        <div>
          <h3 className="text-xs md:text-sm font-semibold text-gray-400 uppercase mb-2">Chat With Us</h3>
          <p className="flex items-center space-x-2 text-base font-semibold">
            <Phone className="w-4 h-4 text-gray-400" /> <span>{footerData.contact.phone}</span>
          </p>
          <p className="flex items-center space-x-2 underline cursor-pointer hover:text-gray-300 mt-2">
            <Mail className="w-4 h-4 text-gray-400" /> <span>{footerData.contact.email}</span>
          </p>
        </div>

        {/* Find us */}
        <div>
          <h3 className="text-xs md:text-sm font-semibold text-gray-400 uppercase mb-2">Find Us</h3>
          <p className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{footerData.contact.address}</span>
          </p>
        </div>

        {/* Follow us on */}
        <div>
          <h3 className="text-xs md:text-sm font-semibold text-gray-400 uppercase mb-2">Follow Us On</h3>
          <div className="flex space-x-4">
            {footerData.socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="cursor-pointer hover:text-gray-300">
                <social.icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 border-t border-gray-700 pt-6 mt-6">
        <p>{footerData.copyright}</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {footerData.bottomLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
