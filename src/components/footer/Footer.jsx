"use client";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, X, Facebook, Youtube, Copyright } from "lucide-react";
import ConsultationPopup from "../ConsultationPopup";
import { getFooterData } from "@/utills/getFooterData";
export default function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getFooterData();
      setFooterData(data);
    }
    fetchData();
  }, []);

  if (!footerData) return <p className="text-center text-white">Loading...</p>;
  console.log('footerData:', footerData); // ✅ Debugging Output
  return (
    <footer className="bg-[#16171A] text-white px-6 md:px-20 py-12 text-sm md:text-base">
      {/* Navigation Links */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 text-lg md:text-xl text-gray-400 border-t border-gray-700 pt-6 mt-6">
        {footerData.navigationLinks?.map((link, index) => (
          <a key={index} href={link.url} className="hover:text-white">
            {link.name}
          </a>
        ))}
        <button className="px-4 py-2 rounded hover:text-white" onClick={() => setIsPopupOpen(true)}>
          Contact Us
        </button>
      </div>
      {isPopupOpen && <ConsultationPopup onClose={() => setIsPopupOpen(false)} />}

      {/* Contact & Socials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-sm md:text-base">
        <div>
          <h3 className="text-xs md:text-sm font-semibold text-gray-400 uppercase mb-2">Chat With Us</h3>
          <p className="flex items-center space-x-2 text-base font-semibold">
            <Phone className="w-4 h-4 text-gray-400" /> <span>{footerData.contact?.phone}</span>
          </p>
          <p className="flex items-center space-x-2 underline cursor-pointer hover:text-gray-300 mt-2">
            <Mail className="w-4 h-4 text-gray-400" /> <span>{footerData.contact?.email}</span>
          </p>
        </div>
        <div>
          <h3 className="text-xs md:text-sm font-semibold text-gray-400 uppercase mb-2">Find Us</h3>
          <p className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{footerData.contact?.address}</span>
          </p>
        </div>
        <div>
          <h3 className="text-xs md:text-sm font-semibold text-gray-400 uppercase mb-2">Follow Us On</h3>
          <div className="flex space-x-4">
            {footerData.socialLinks?.map((social, index) => (
              <a key={index} href={social.url} className="cursor-pointer flex items-center gap-2 flex-col hover:text-gray-300">
                <img src={social.icon || '/globe.svg' } alt={social.name} className="w-5 h-5 md:w-6 md:h-6" />
                <span className=" text-white hover:text-gray-300 text-sm">{social.name || 'insta'}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-center items-center text-xs md:text-sm text-gray-400 border-t border-gray-700 pt-6 mt-6">
        <Copyright className="w-4 h-4 mr-1" />
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
}
