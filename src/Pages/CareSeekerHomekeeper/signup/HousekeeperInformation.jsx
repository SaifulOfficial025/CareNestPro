import React from "react";

function HousekeeperInformation({ formData, updateFormData, handleNext, handleBack, showLocationPopup, setShowLocationPopup }) {
  return (
    <>
      {/* Location Popup */}
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

      {/* Main Form */}
      <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button onClick={handleBack} className="mr-4 text-gray-500 hover:text-gray-700">←</button>
          <h3 className="text-lg text-gray-700 flex-1">Housekeeping details</h3>
          <span className="text-lg text-[#0093d1] font-bold">Step 2</span>
          <span className="ml-2 text-lg text-gray-500"> of 7</span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-base font-medium text-gray-800 mb-2">Details</h4>
          <p className="text-sm text-gray-500 mb-6">
            Kindly select options to help us understand your preferences
          </p>
        </div>

        {/* Use Current Location */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="useLocation"
            checked={formData.useCurrentLocation}
            onChange={(e) => updateFormData("useCurrentLocation", e.target.checked)}
            className="mr-3"
          />
          <label htmlFor="useLocation" className="text-sm text-gray-700">
            Use my current Location instead
          </label>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Country & Preferred Language */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.country} onChange={(e) => updateFormData("country", e.target.value)}>
                <option>Select country</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.language} onChange={(e) => updateFormData("language", e.target.value)}>
                <option>Select language</option>
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>

          {/* State & City */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.state} onChange={(e) => updateFormData("state", e.target.value)}>
                <option>Select state</option>
                <option>California</option>
                <option>Texas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input type="text" placeholder="Input city" className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.city} onChange={(e) => updateFormData("city", e.target.value)} />
            </div>
          </div>

          {/* Nationality & Zip */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
              <input type="text" placeholder="Input nationality" className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.nationality} onChange={(e) => updateFormData("nationality", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
              <input type="text" placeholder="Input zip code" className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.zipCode} onChange={(e) => updateFormData("zipCode", e.target.value)} />
            </div>
          </div>

          {/* Housekeeping Specific Fields */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What kind of Housekeeping</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.housekeepingType} onChange={(e) => updateFormData("housekeepingType", e.target.value)}>
                <option>Select option</option>
                <option>House keeper</option>
                <option>Cook</option>
                <option>Laundry Support</option>
                <option>Cleaner</option>
                <option>Others</option>

              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size of your House</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.houseSize} onChange={(e) => updateFormData("houseSize", e.target.value)}>
                <option>Select option</option>
                <option>Bungalow</option>
                <option>Duplex</option>
                <option>2 storey building</option>
                <option>3 storey building</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bedrooms</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.bedrooms} onChange={(e) => updateFormData("bedrooms", e.target.value)}>
                <option>Select option</option>
                {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bathrooms</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.bathrooms} onChange={(e) => updateFormData("bathrooms", e.target.value)}>
                <option>Select option</option>
                {[1, 2, 3, 4].map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
          </div>

          {/* Toilets & Pets */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Toilets</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.toilets} onChange={(e) => updateFormData("toilets", e.target.value)}>
                <option>Select option</option>
                {[1, 2, 3, 4].map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pets present</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.pets} onChange={(e) => updateFormData("pets", e.target.value)}>
                <option>Select option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          {/* Specify Pet & Additional Care */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">(If yes) Specify Pet present</label>
              <input type="text" placeholder="Input pet name" className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.petName} onChange={(e) => updateFormData("petName", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Care</label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900" value={formData.additionalCare} onChange={(e) => updateFormData("additionalCare", e.target.value)}>
                <option>Select option</option>
                <option>Child Care</option>
                <option>Elderly Care</option>
                <option>Tutoring</option>
              </select>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button onClick={handleNext} className="w-full bg-[#0093d1] text-white text-lg font-medium py-3 rounded-md hover:bg-[#007bb0] transition mt-8">
          Next
        </button>
      </div>
    </>
  );
}

export default HousekeeperInformation;
