import React from "react";
import { FiSearch } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import BudgetFilter from "../../../../public/budget_filter.svg"

export default function HomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [sortOrder, setSortOrder] = React.useState(null); // 'asc' or 'desc'
  // Dummy jobs data
  const jobs = [
    { budget: 23000, title: "Professional nanny to care for two kids over 10 days consecutively", desc: "Professional nanny needed in Lagos to care for two kids over 10 consecutive days. Looking for trustworthy individual with childcare background, clean record, and own transportation. Must be patient, creative, and capable of handling emergencies responsibly", posted: "Posted 5 minutes ago" },
    { budget: 18000, title: "Weekend babysitter needed for 2 children", desc: "Looking for a reliable babysitter for weekends. Must have experience and references.", posted: "Posted 10 minutes ago" },
    { budget: 25000, title: "Full-time nanny for newborn", desc: "Seeking a full-time nanny for a newborn. Must be certified and have prior experience.", posted: "Posted 20 minutes ago" },
    { budget: 21000, title: "After-school care for 3 kids", desc: "Need after-school care for 3 kids. Must be patient and creative.", posted: "Posted 30 minutes ago" },
    { budget: 20000, title: "Temporary nanny for vacation", desc: "Temporary nanny needed for family vacation. Must be flexible and energetic.", posted: "Posted 1 hour ago" },
  ];
  // Filter and sort jobs
  let filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(search.toLowerCase()) || job.desc.toLowerCase().includes(search.toLowerCase()) || job.budget.toString().includes(search));
  if (sortOrder === "asc") filteredJobs = filteredJobs.sort((a, b) => a.budget - b.budget);
  if (sortOrder === "desc") filteredJobs = filteredJobs.sort((a, b) => b.budget - a.budget);
  return (
    <div className="flex min-h-screen bg-white ">
      <Sidebar active="Home" />
      <div className="flex-1 font-sfpro  ml-64 ">

        <div className="bg-[#f5f8ff] py-5 px-2">
        <div className="flex items-center mb-4 ml-5">
          <RiVerifiedBadgeFill className="text-[#8ed796] mr-2 text-3xl" />
        <h2 className="text-3xl font-semibold text-gray-800  ">Hello, Mark!</h2>
        </div>

        <div className="mb-8 ml-5 flex items-end px-2">
          <div className="relative flex w-full items-center">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search for amount"
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 bg-[#f7fcfe] text-gray-700 text-sm focus:outline-none shadow-sm"
                style={{ background: '#f7fcfe' }}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="relative " style={{ marginLeft: 'auto' }}>
              <img src={BudgetFilter} alt="Budget Filter" className="ml-2 h-10 rounded-md p-1 mr-5 cursor-pointer  bg-white" onClick={() => setFilterOpen(v => !v)} />
              {filterOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <button
                    className={`w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 text-sm ${sortOrder === "asc" ? "bg-gray-50" : ""}`}
                    onClick={() => { setSortOrder("asc"); setFilterOpen(false); }}
                  >
                    Budget: Lower to Higher
                  </button>
                  <button
                    className={`w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 text-sm ${sortOrder === "desc" ? "bg-gray-50" : ""}`}
                    onClick={() => { setSortOrder("desc"); setFilterOpen(false); }}
                  >
                    Budget: Higher to Lower
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
 
        {filteredJobs.map((job, i) => (
          <button
            key={i}
            className="w-full text-left bg-white border border-gray-100 rounded-lg px-6 py-4 mb-4 transition hover:shadow-lg hover:border-[#0093d1] focus:outline-none "
            onClick={() => navigate("/careproviders/dashboard/job_details")}
          >
            <div className="px-5">
            <div className="flex justify-between items-center mb-2 ">
              <span className="text-gray-400 text-xs">{job.posted}</span>
              <span className="text-[#436d7b] text-xs font-semibold">Budget - #{job.budget.toLocaleString()}/day</span>
            </div>
            <div className="font-semibold text-lg text-gray-800 mb-1">{job.title}</div>
            <div className="text-gray-500 text-sm">{job.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
