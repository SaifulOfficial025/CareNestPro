import React from "react";

function ChildCareDetails({ formData, updateFormData, handleNext, handleBack, showLocationPopup, setShowLocationPopup }) {
  return (
    <>
      {showLocationPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-xl w-[400px] max-w-full relative flex flex-col">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold z-10"
              onClick={() => setShowLocationPopup(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img src="/mappopup.png" alt="Map Popup" className="w-full h-40 object-cover rounded-t-2xl" />
            <div className="p-8 flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Enable your Location</h2>
              <p className="text-sm text-gray-500 mb-6 text-center">
                This app requires your location to be turned on your device and within this app. Please enable it in your phone settings.
              </p>
              <div className="w-full flex flex-col gap-4">
                <button
                  className="w-full py-3 rounded-md bg-[#0093d1] text-white text-lg font-medium hover:bg-[#007bb0] transition"
                  onClick={() => {
                    setShowLocationPopup(false);
                  }}
                >
                  Allow only while using this App
                </button>
                <button
                  className="w-full py-3 rounded-md border border-[#0093d1] text-[#0093d1] text-lg font-medium bg-white hover:bg-[#f0fbf9] transition"
                  onClick={() => setShowLocationPopup(false)}
                >
                  Don't allow this App
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-6">
          <button onClick={handleBack} className="mr-4 text-gray-500 hover:text-gray-700">←</button>
          <h3 className="text-lg text-gray-700 flex-1">Child care details</h3>
        </div>

        <p className="text-sm text-gray-500 mb-6">Kindly select options to help us understand your preferences</p>

        <div className="flex items-center mb-6">
          <input type="checkbox" id="useLocation" checked={formData.useCurrentLocation} onChange={(e) => updateFormData("useCurrentLocation", e.target.checked)} className="mr-3" />
          <label htmlFor="useLocation" className="text-sm text-gray-700">Use my current Location instead</label>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-2 gap-6">
          <SelectField label="Country" value={formData.country} onChange={(val) => updateFormData("country", val)} options={[]} />
          <SelectField label="Preferred Language" value={formData.language} onChange={(val) => updateFormData("language", val)} options={[]} />
          <SelectField label="State" value={formData.state} onChange={(val) => updateFormData("state", val)} options={[]} />
          <TextField label="City" value={formData.city} onChange={(val) => updateFormData("city", val)} />
          <TextField label="Nationality" value={formData.nationality} onChange={(val) => updateFormData("nationality", val)} />
          <TextField label="Zip Code" value={formData.zipCode} onChange={(val) => updateFormData("zipCode", val)} />
          <CheckboxGroup
  label="Type of child care provider?"
  options={["Nanny", "Babysitter", "Governess", "Mother’s Helper"]}
  values={formData.providerType || []}
  onChange={(val) => updateFormData("providerType", val)}
/>

          <SelectField label="Experience Level" value={formData.experienceLevel} onChange={(val) => updateFormData("experienceLevel", val)} options={[]} />
          <SelectField label="Native Language" value={formData.nativeLanguage} onChange={(val) => updateFormData("nativeLanguage", val)} options={[]} />
          <SelectField label="Other Language" value={formData.otherLanguage} onChange={(val) => updateFormData("otherLanguage", val)} options={[]} />
          <CheckboxGroup
  label="Other Services you can Offer"
  options={["Elderly Care", "Tutoring", "Housekeeping"]}
  values={formData.otherServices || []}
  onChange={(val) => updateFormData("otherServices", val)}
/>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" placeholder="Input rate" value={formData.hourlyRate} onChange={(e) => updateFormData("hourlyRate", e.target.value)} />
            <p className="text-sm text-green-600 mt-1">Average hourly rate is ₦5,500</p>
          </div>
        </div>

        {/* Services Checkboxes */}
        <CheckboxGroup label="Choose the services you can provide" options={[
          "Sleep-in", "Non-sleeper", "Experience with autism", "Can drive", "Special needs experience",
          "Experience with twins", "Supportive", "Speaks Yoruba Fluently", "Speaks Hausa Fluently",
          "Sign language", "Experience with speech delay", "Cook basic meals", "Live-in",
          "Behavioral support", "Speaks French Fluently"
        ]} values={formData.servicesProvided || []} onChange={(val) => updateFormData("servicesProvided", val)} />

        
        {/* Age Preference */}
        <RadioGroup label="Choose the experience level" name="agePreference" options={["Newborn", "Toddler (1-3 years)", "Early School Age (4-6 years)", "Primary school age (7-12 years)", "Teenager (12+ years)"]} value={formData.agePreference} onChange={(val) => updateFormData("agePreference", val)} />

        {/* About You */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us about yourself</label>
          <textarea className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" rows={4} placeholder="Kindly highlight your core skills and experience..." value={formData.aboutYou} onChange={(e) => updateFormData("aboutYou", e.target.value)} />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" placeholder="Give your explanation a title..." value={formData.title} onChange={(e) => updateFormData("title", e.target.value)} />
        </div>

        <div className="flex items-center mt-6">
          <input type="checkbox" id="autoSend" checked={formData.autoSend} onChange={(e) => updateFormData("autoSend", e.target.checked)} className="mr-3" />
          <label htmlFor="autoSend" className="text-sm text-gray-700">I would like to automatically send the above application to potential caretakers</label>
        </div>

        <button onClick={handleNext} className="w-full bg-[#0093d1] text-white text-lg font-medium py-3 rounded-md hover:bg-[#007bb0] transition mt-8">
          Save
        </button>
      </div>
    </>
  );
}

const TextField = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" />
  </div>
);

const SelectField = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900">
      <option value="">Select Option</option>
      {options.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const CheckboxGroup = ({ label, options, values, onChange }) => {
  const handleCheck = (option) => {
    if (values.includes(option)) {
      onChange(values.filter((item) => item !== option));
    } else {
      onChange([...values, option]);
    }
  };

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-4">{label}</label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option, idx) => (
          <label key={idx} className="flex items-center">
            <input type="checkbox" checked={values.includes(option)} onChange={() => handleCheck(option)} className="mr-2" />
            <span className="text-sm text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const RadioGroup = ({ label, name, options, value, onChange }) => (
  <div className="mt-6">
    <label className="block text-sm font-medium text-gray-700 mb-4">{label}</label>
    <div className="grid grid-cols-3 gap-3">
      {options.map((option, idx) => (
        <label key={idx} className="flex items-center">
          <input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(option)} className="mr-2" />
          <span className="text-sm text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

export default ChildCareDetails;
