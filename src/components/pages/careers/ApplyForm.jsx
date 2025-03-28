"use client";
import { createJobApplication } from "@/utills/createApplication";
import { motion } from "framer-motion";
import { useState } from "react";

const ApplyForm = ({ setShowForm, job }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      setErrorMessage("Please upload your resume.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    const response = await createJobApplication({
      ...formData,
      jobTitle: job.title,
    });

    setLoading(false);

    if (response) {
      alert("Application submitted successfully!");
      setShowForm(false);
    } else {
      setErrorMessage("Failed to submit application. Please try again.");
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: 'linear-gradient(135deg, #6b6f82, #3b4c8f)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-[#16171A] text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Apply for {job.title}</h2>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your full name" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="portfolio">Portfolio URL (optional)</label>
            <input 
              type="url" 
              name="portfolio" 
              id="portfolio"
              value={formData.portfolio} 
              onChange={handleChange} 
              placeholder="https://yourportfolio.com" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="resume">Upload Resume</label>
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white cursor-pointer"
              required
            />
          </div>
          <div className="flex justify-between mt-4">
            <button 
              type="submit" 
              className={`bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200 w-full mr-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
            <button 
              onClick={() => setShowForm(false)} 
              className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ApplyForm;
