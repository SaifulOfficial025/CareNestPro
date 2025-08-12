import React from "react";

function EmailStep({ formData, updateFormData, handleNext, handleBack }) {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
          <button onClick={handleBack} className="mr-4 text-gray-500 hover:text-gray-700">←</button>
        </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Enter Email</h3>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input 
          type="email" 
          placeholder="Input email address"
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900"
          style={{ backgroundColor: '#fff', color: '#222' }}
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
        />
      </div>
      <button 
        onClick={() => {
          console.log('Email Next clicked, email:', formData.email);
          handleNext();
        }}
        className="w-full bg-[#0093d1] text-white text-lg font-medium py-3 rounded-md hover:bg-[#007bb0] transition mt-4"
        disabled={!formData.email}
      >
        Continue
      </button>
    </div>
  );
}

export default EmailStep;
