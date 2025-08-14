import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar active="Home" />
      <div className="flex-1 font-sfpro px-8 py-8 ml-64">

        <div className="flex items-center mb-4">
          <RiVerifiedBadgeFill className="text-[#8ed796] mr-2 text-3xl" />
        <h2 className="text-3xl font-semibold text-gray-800 ">Hello, Mark!</h2>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for amount"
            className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none"
          />
        </div>
 
        {[1,2,3,4,5].map((_, i) => (
          <button
            key={i}
            className="w-full text-left bg-white border border-gray-100 rounded-lg px-6 py-4 mb-4 transition hover:shadow-lg hover:border-[#0093d1] focus:outline-none"
            onClick={() => navigate("/careproviders/dashboard/job_details")}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-xs">Posted 5 minutes ago</span>
              <span className="text-[#0093d1] text-xs font-semibold">Budget - #23,000/day</span>
            </div>
            <div className="font-semibold text-lg text-gray-800 mb-1">Professional nanny to care for two kids over 10 days consecutively</div>
            <div className="text-gray-500 text-sm">Professional nanny needed in Lagos to care for two kids over 10 consecutive days. Looking for trustworthy individual with childcare background, clean record, and own transportation. Must be patient, creative, and capable of handling emergencies responsibly</div>
          </button>
        ))}
      </div>
    </div>
  );
}
