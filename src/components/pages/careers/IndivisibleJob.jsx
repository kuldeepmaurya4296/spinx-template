'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Calendar, DollarSign } from "lucide-react";
import ApplyForm from "./ApplyForm";
import { useParams } from "next/navigation";
import { getJobDetailById } from "@/utills/jobData";

const JobDetails = () => {
  const param = useParams(); // Get slug from the URL
  const id = param?.jobs;
  const [job, setJobDetail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const jobData = await getJobDetailById(id);
        setJobDetail(jobData);
        console.log("jobDetail Data:", jobData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (id) {
      fetchData();
    }
  }, [id]);

  const [showForm, setShowForm] = useState(false);

  const formatDate = (dateString) => dateString ? new Date(dateString).toDateString() : "N/A";

  const renderList = (title, items) => (
    items?.length > 0 && (
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-black">{title}</h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-1">
          {items?.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>
    )
  );

  // Check if the current date is within the valid application period
  const isApplicationOpen = () => {
    const currentDate = new Date();
    const postDate = job?.postDate ? new Date(job.postDate) : null;
    const lastDateToApply = job?.lastDateToApply ? new Date(job.lastDateToApply) : null;

    return postDate && lastDateToApply && currentDate >= postDate && currentDate <= lastDateToApply;
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-40 my-20">
      <motion.h1
        className="text-4xl font-bold mb-4 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {job?.title || "Loading..."}
      </motion.h1>

      {/* Job Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-gray-700 mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-500" />
          <span>{job?.locations?.join(", ") || "Location not available"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-blue-500" />
          <span>{job?.jobType || "Full-time"}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-blue-500" />
          <span>{job?.salaryRange || "Competitive"}</span>
        </div>
      </div>

      {/* Categories */}
      {job?.categories?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-black">Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {job?.categories?.map((category, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                {category}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Job Dates */}
      <div className="mb-6 flex flex-wrap gap-4 text-gray-700">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-green-500" />
          <span><strong>Posted on:</strong> {formatDate(job?.postDate)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-red-500" />
          <span><strong>Apply before:</strong> {formatDate(job?.lastDateToApply)}</span>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-black">Job Overview</h2>
        <p className="text-gray-700 text-lg">{job?.overview || "No overview available"}</p>
      </section>

      {renderList("Responsibilities", job?.responsibilities)}
      {renderList("Qualifications", job?.qualifications)}
      {renderList("Benefits", job?.benefits)}

      {/* Apply Button - Only shows if current date is within the application period */}
      {isApplicationOpen() && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition duration-200 text-lg font-semibold"
          >
            Apply Now
          </button>
        </div>
      )}

      {showForm && <ApplyForm setShowForm={setShowForm} job={job} />}
    </div>
  );
};

export default JobDetails;
