import React from "react";

function EmailStep({ formData, updateFormData, onClose, onComplete }) {
  const handleSubmit = () => {
    if (formData.email) {
      onComplete();
    }
  };

  return (
    <div className="w-full">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <div className="flex flex-col items-center mb-6">
        <img src="/girl.svg" alt="CareLogo" className="mb-4 w-24 h-24" />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
          Sign Up to View Care Providers near you
        </h3>
        <p className="text-sm text-gray-500 text-center">
          Kindly enter your email address below to view care providers near you.
        </p>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input 
          type="email" 
          placeholder="Input email address"
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900"
          value={formData.email || ""}
          onChange={(e) => updateFormData('email', e.target.value)}
        />
      </div>
      
      <button 
        onClick={handleSubmit}
        disabled={!formData.email}
        className={`w-full text-lg font-medium py-3 rounded-md transition mt-4 ${
          formData.email 
            ? "bg-[#0093d1] text-white hover:bg-[#007bb0]" 
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Sign Up
      </button>
    </div>
  );
}

export default EmailStep;
