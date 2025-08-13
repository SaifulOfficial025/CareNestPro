import React from "react";

function Summary({ formData, updateFormData, handleNext, handleBack }) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <button onClick={handleBack} className="mr-4 text-gray-500 hover:text-gray-700">
          ← 
        </button>
        <h3 className="text-lg text-gray-700 flex-1">Summary</h3>
        <span className="text-lg text-[#0093d1] font-bold">Step 6</span> <span className="ml-2 text-lg text-gray-500"> of 7</span>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <div className="text-green-600 mr-3">💡</div>
          <p className="text-sm text-green-700">
            This was generated based on the information you gave. This would help care providers understand your preferences.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          Dedicated childcare provider with extensive ways of managing daily routines for multiple children. Skilled in age-appropriate activities, behavioral guidance, and emergency response. Strong communication with parents, maintains detailed care logs, and prioritizes safety above all. Trustworthy, energetic, and passionate about supporting children's emotional and physical development.
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message to Care Provider</label>
        <textarea 
          placeholder="Have any other information you might want to share with care provider"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900"
          style={{ backgroundColor: '#fff', color: '#222' }}
          value={formData.messageToProvider}
          onChange={(e) => updateFormData('messageToProvider', e.target.value)}
        />
      </div>
      <div className="flex items-start mt-6 mb-6">
        <input 
          type="checkbox" 
          id="terms" 
          className="mr-3 mt-1"
          checked={formData.acceptedTerms}
          onChange={(e) => updateFormData('acceptedTerms', e.target.checked)}
        />
        <label htmlFor="terms" className="text-sm text-gray-700">
          I acknowledge that I have read and accepted{' '}
          <a href="#" className="text-[#0093d1] underline">CareNestPro's Terms of Use</a>,{' '}
          <a href="#" className="text-[#0093d1] underline">Agreement</a> and{' '}
          <a href="#" className="text-[#0093d1] underline">Privacy policy</a>.
        </label>
      </div>
      <button 
        onClick={handleNext}
        className="w-full bg-[#0093d1] text-white text-lg font-medium py-3 rounded-md hover:bg-[#007bb0] transition"
        disabled={!formData.acceptedTerms}
      >
        Next
      </button>
    </div>
  );
}

export default Summary;
