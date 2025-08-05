import React from "react";

function PasswordStep({ formData, updateFormData, handleNext }) {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sign Up</h3>
      <p className="text-sm text-gray-500 mb-6">Kindly enter your password</p>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input 
          type="password" 
          placeholder="Input password"
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900"
          style={{ backgroundColor: '#fff', color: '#222' }}
          value={formData.password}
          onChange={(e) => updateFormData('password', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
        <input 
          type="password" 
          placeholder="Input password"
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900"
          style={{ backgroundColor: '#fff', color: '#222' }}
          value={formData.confirmPassword}
          onChange={(e) => updateFormData('confirmPassword', e.target.value)}
        />
      </div>
      <button 
        onClick={handleNext}
        className="w-full bg-[#0093d1] text-white text-lg font-medium py-3 rounded-md hover:bg-[#007bb0] transition mt-4"
        disabled={!formData.password || formData.password !== formData.confirmPassword}
      >
        Sign Up
      </button>
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500">Already have an account? </span>
        <a href="#" className="text-blue-500 underline">Sign In</a>
      </div>
    </div>
  );
}

export default PasswordStep;
