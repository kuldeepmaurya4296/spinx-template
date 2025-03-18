'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const JobDetails = ({ job }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-40">
        <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6 text-blue-600 " 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        {job.title}
      </motion.h1>
      <p className="text-gray-700  text-xl md:text-3xl mb-10"><strong>Overview:</strong> {job.overview}</p>
      
      <section className="mb-10">
        <h2 className="text-xl md:text-3xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 text-xl md:text-3xl">
          {job.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl md:text-3xl font-semibold mb-2">Qualifications</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 text-xl md:text-3xl">
          {job.qualifications.map((qual, index) => (
            <li key={index}>{qual}</li>
          ))}
        </ul>
      </section>

      <button 
        onClick={() => setShowForm(true)} 
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200 mt-10"
      >
        Apply Now
      </button>
      
      {showForm && <ApplyForm setShowForm={setShowForm} job={job} />}
    </div>
  );
};

const ApplyForm = ({ setShowForm, job }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Applying for:", job.title, formData);
  };

  return (
    <motion.div 
      className="mt-6 p-4 border rounded-lg bg-gray-100" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Apply for {job.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Full Name" 
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="url" 
          name="portfolio" 
          value={formData.portfolio} 
          onChange={handleChange} 
          placeholder="Portfolio URL (optional)" 
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-200"
        >
          Submit Application
        </button>
      </form>
      <button 
        onClick={() => setShowForm(false)} 
        className="mt-2 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-200"
      >
        Cancel
      </button>
    </motion.div>
  );
};

export default JobDetails;
