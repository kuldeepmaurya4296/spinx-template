'use client';

import { createConsultation } from "@/utills/createConsult";
import { useState } from "react";
import { toast } from "sonner"; // Import Sonner

const ConsultationPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    console.log("Submitted Data:", formData); // ✅ Log submitted data
  
    try {
      const response = await createConsultation(formData);
      console.log("Sanity Response:", response); // ✅ Log Sanity API response
  
      toast.success("Your consultation request has been submitted! ✅");
      setFormData({ fullName: "", email: "", phone: "", website: "", message: "" });
    } catch (err) {
      toast.error("Failed to submit. Please try again. ❌");
      console.error("Submission error:", err);
    }
  
    setLoading(false);
  };
  

  return (
    <div className="fixed inset-0 bg-[#16171A] text-white bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white rounded-lg max-w-5xl w-full flex relative p-4">
        <div className="w-1/3 hidden md:block">
          <img src="/default.webp" alt="Dummy" className="w-full h-full object-cover rounded-l-lg" />
        </div>
        <div className="w-full md:w-2/3 p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl cursor-pointer">
            &times;
          </button>
          <h2 className="text-2xl md:text-5xl font-bold mb-2">
            Schedule a Free<br /> 30-min Consultation
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Discover which design improvements could turn more visitors into customers in only 30 minutes.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name *"
                className="bg-gray-800 p-2 rounded text-white w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="bg-gray-800 p-2 rounded text-white w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                className="bg-gray-800 p-2 rounded text-white w-full"
                required
              />
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your Website URL *"
                className="bg-gray-800 p-2 rounded text-white w-full"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your requirements"
              className="bg-gray-800 p-2 rounded text-white w-full h-24"
            ></textarea>
            <button
              type="submit"
              className="bg-lime-500 text-black font-bold py-2 px-4 rounded w-full"
              disabled={loading}
            >
              {loading ? "Submitting..." : "BOOK MY FREE CONSULT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
