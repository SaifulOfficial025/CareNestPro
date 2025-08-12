import React from "react";

function PasswordStep({ formData, updateFormData, onClose, onComplete }) {
  const handleSubmit = () => {
    if (formData.password && formData.password === formData.confirmPassword) {
      onComplete();
    }
  };

  const isValid = formData.password && formData.password === formData.confirmPassword;

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

      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Create Password</h3>
      <p className="text-sm text-gray-500 mb-6">Kindly create a secure password</p>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input 
          type="password" 
          placeholder="Input password"
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900"
          value={formData.password || ""}
          onChange={(e) => updateFormData('password', e.target.value)}
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
        <input 
          type="password" 
          placeholder="Confirm password"
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900"
          value={formData.confirmPassword || ""}
          onChange={(e) => updateFormData('confirmPassword', e.target.value)}
        />
        {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
        )}
      </div>
      
      <button 
        onClick={handleSubmit}
        disabled={!isValid}
        className={`w-full text-lg font-medium py-3 rounded-md transition mt-4 ${
          isValid 
            ? "bg-[#0093d1] text-white hover:bg-[#007bb0]" 
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Complete Sign Up
      </button>
      
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500">Already have an account? </span>
        <a href="#" className="text-blue-500 underline">Sign In</a>
      </div>
    </div>
  );
}

export default PasswordStep;
