import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function JobDetails() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar active="Home" />
      <div className="flex-1 font-sfpro px-8 py-8 ml-64">
        <button className="mb-8 text-gray-500 hover:text-gray-700 text-2xl font-bold" onClick={() => window.history.back()}>
          ←
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Details</h2>
        <div className="font-semibold text-lg text-gray-800 mb-1">Professional nanny to care for two kids over 10 days consecutively</div>
        <div className="text-gray-400 text-xs mb-4">Posted 5 minutes ago</div>
        <div className="text-gray-700 text-base mb-6">
          We are seeking an experienced, trustworthy professional nanny to provide exceptional care for two children over 10 consecutive days in Lagos. This is an excellent opportunity for a dedicated childcare professional looking for temporary, intensive placement.<br /><br />
          The ideal candidate must possess proven childcare experience with verifiable references, a clean criminal background check, and medical clearance. Reliable personal transportation is essential for school runs and activities, while first aid and CPR certification is strongly preferred. Excellent communication skills in English are mandatory for effective interaction with both children and parents.<br /><br />
          Responsibilities include full-time supervision and care for both children, meal preparation and feeding assistance, organizing educational activities and creative play sessions, maintaining established daily routines and schedules, and providing emergency response and safety management. Light housekeeping duties related to the children's care are also expected.<br /><br />
          The successful candidate must demonstrate exceptional patience, creativity, and problem-solving abilities. Previous experience caring for multiple children simultaneously is essential, along with the ability to handle emergencies calmly and responsibly. Flexibility regarding schedule adjustments and sleeping arrangements is required for this live-in position.<br /><br />
          We offer competitive daily compensation commensurate with experience and qualifications. A live-in arrangement is strongly preferred to ensure continuous care coverage. Immediate start is available for qualified candidates who successfully complete our verification process. Comprehensive references and thorough background verification are mandatory requirements before final placement confirmation.
        </div>
        <div className="mb-6">
          <div className="text-gray-700 font-medium mb-2">Skills and expertise</div>
          <div className="flex flex-wrap gap-2">
            {['sleep-in', 'Non-smoker', 'Experience with twins', 'help with homework', 'Sign language', 'Special needs experience', 'cook basic meals', 'Experience with speech delay', 'live-in', 'Behavioral support', 'Speaks Igbo Fluently', 'Speaks Hausa Fluently', 'Speaks Yoruba Fluently', 'Experience with autism', 'Speaks French Fluently'].map((skill, i) => (
              <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{skill}</span>
            ))}
          </div>
        </div>
        <button className="w-full bg-[#0093d1] text-white py-3 rounded-md font-semibold hover:bg-[#007bb0] transition" onClick={() => navigate('/careproviders/dashboard/requests', { state: { tab: 2 } })}>Apply Now</button>
      </div>
    </div>
  );
}

export default JobDetails;
