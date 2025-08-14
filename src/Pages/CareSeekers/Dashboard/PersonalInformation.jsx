import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function PersonalInformation() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar active="Setting" />
      <div className="flex-1 font-sfpro px-8 py-8 ml-64">
        <div className="mb-8 flex items-center">
          <button className="mr-4 text-gray-500 hover:text-gray-700 text-2xl font-bold" onClick={() => window.history.back()}>
            ←
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
        </div>
        <div className="max-w-xl space-y-6">
          <div>
            <div className="text-gray-500 mb-2">Email address</div>
            <input type="text" value="Ayodeleadetunji@gmail.com" readOnly className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-gray-800" />
          </div>
          <div>
            <div className="text-gray-500 mb-2">Country</div>
            <input type="text" value="Nigeria" readOnly className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
