import { Mail, Phone, MapPin, Linkedin, X, Facebook, Youtube,  Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#16171A] text-white px-6 md:px-20 py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 border-t pt-6">
        {/* Industries */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Industries</h3>
          <ul className="space-y-2 text-sm">
            <li>Automotive Marketing</li>
            <li>Beauty & Skincare Marketing Agency</li>
            <li>Law Firm Marketing</li>
            <li>Law Firm Website Design</li>
            <li>Travel & Hospitality Marketing Agency</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Website Design</li>
            <li>Website Development</li>
            <li>Enterprise CMS Solutions</li>
            <li>Website Redesign Services</li>
            <li>Website Maintenance Services</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Technologies</h3>
          <ul className="space-y-2 text-sm">
            <li>Sitecore</li>
            <li>Drupal</li>
            <li>Sitefinity</li>
            <li>WordPress</li>
            <li>Adobe Experience Manager (AEM)</li>
          </ul>
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Case Studies</h3>
          <ul className="space-y-2 text-sm">
            <li>The California Endowment Website Redesign</li>
            <li>BEGA Website Redesign</li>
            <li>BSM Consulting Website and Portal Redesign</li>
            <li>Spexster Web App Design & Development</li>
            <li>KPFF Website Redesign & Development</li>
          </ul>
        </div>
      </div>

      {/* Contact & Socials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-sm">
        {/* Chat with us */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Chat With Us</h3>
          <p className="flex items-center space-x-2 text-lg font-semibold">
            <Phone className="w-4 h-4 text-gray-400" /> <span>213.894.9933</span>
          </p>
          <p className="flex items-center space-x-2 underline cursor-pointer hover:text-gray-300 mt-2">
            <Mail className="w-4 h-4 text-gray-400" /> <span>hello@spinxdigital.com</span>
          </p>
        </div>

        {/* Find us */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Find Us</h3>
          <p className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>911 W. Washington Blvd.<br /> Los Angeles, California 90015</span>
          </p>
        </div>

        {/* Follow us on */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Follow Us On</h3>
          <div className="flex space-x-4">
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <X className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            {/* <Behance className="w-5 h-5 cursor-pointer hover:text-gray-300" /> */}
            <Globe className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-700 pt-6 mt-6">
        <p>© 2025 SPINX Digital All Rights Reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Contact Us</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Do Not Sell My Info</a>
        </div>
      </div>
    </footer>
  );
}
