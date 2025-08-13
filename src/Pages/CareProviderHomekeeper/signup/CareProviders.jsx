import React from "react";
import EmailPasswordStep from "./EmailPasswordStep";
// import Girl from "../../../public/girl.svg";

function CareProviders({ showSubscribePopup, setShowSubscribePopup }) {
  const [showEmailPasswordPopup, setShowEmailPasswordPopup] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPaymentPopup, setShowPaymentPopup] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState(null);
  // Example payment details for each plan
  const paymentDetails = {
    Free: { rate: 0, hours: 0, fee: 0, total: 0 },
    Quarterly: { rate: 13, hours: 32, fee: 7, total: 416 },
    Monthly: { rate: 13, hours: 32, fee: 7, total: 416 },
  };
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-8 pt-8">
        <h2 className="text-3xl font-semibold text-gray-800">Care Providers near you</h2>
        <div className="flex items-center">
          <span className="text-lg text-[#0093d1] font-bold">Step 7</span> <span className="ml-2 text-lg text-gray-500"> of 7</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-8 pb-8">
        <div className="grid grid-cols-2 gap-6 mt-8">
          {[1, 2, 3, 4, 5, 6].map((provider) => (
            <div
              key={provider}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition"
            >
              {/* Profile */}
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Provider"
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Aleem Sarah</h4>
                  <p className="text-sm text-gray-500">Old Dallas, Salford, UK</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-4 leading-snug">
                5 years of experience with extensive ways of managing daily routines for multiple children. 
                Skilled in age-appropriate activities, behavioural guidance.
              </p>

              {/* Experience | Rate | Rating */}
              <div className="grid grid-cols-3 border border-gray-200 rounded-lg overflow-hidden mb-4">
                <div className="p-2 text-center border-r border-gray-200">
                  <div className="text-xs text-gray-500">Experience</div>
                  <div className="font-semibold text-sm text-gray-700">8 years</div>
                </div>
                <div className="p-2 text-center border-r border-gray-200">
                  <div className="text-xs text-gray-500">Rate</div>
                  <div className="font-semibold text-sm text-gray-700">$135/hr</div>
                </div>
                <div className="p-2 text-center">
                  <div className="text-xs text-gray-500">Rating</div>
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-400 text-base">★★★★★</span>
                    <span className="text-xs text-gray-600 ml-1">5.0</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-2">
                <button 
                  className="flex-1 bg-[#0093d1] text-white py-2 rounded-md font-medium hover:bg-[#007bb0] transition"
                  onClick={() => setShowEmailPasswordPopup(true)}
                >
                  Interested
                </button>
                <button className="flex-1 border border-[#0093d1] text-[#0093d1] py-2 rounded-md font-medium hover:bg-[#f0fbf9] transition">
                  Not Interested
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Popup */}
      {showEmailPasswordPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-xl w-[400px] max-w-full relative flex flex-col items-center p-8">
            <EmailPasswordStep
              formData={formData}
              updateFormData={(field, value) => setFormData(prev => ({ ...prev, [field]: value }))}
              handleNext={() => setShowEmailPasswordPopup(false)}
              onClose={() => setShowEmailPasswordPopup(false)}
            />
          </div>
        </div>
      )}

      {/* Payment Popup */}
      {showPaymentPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-xl w-[400px] max-w-full relative flex flex-col items-center p-8">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold z-10"
              onClick={() => { setShowPaymentPopup(false); setShowSubscribePopup(false); }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Proceed to Payment</h2>
            <p className="text-sm text-gray-500 mb-6 text-center">Are you sure you want to proceed to payment?</p>
            <div className="w-full bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Rate per hour</span>
                <span>${paymentDetails[selectedPlan]?.rate ?? 13}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Total hours</span>
                <span>{paymentDetails[selectedPlan]?.hours ?? 32}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Service Fee</span>
                <span>${paymentDetails[selectedPlan]?.fee ?? 7}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-gray-800 text-lg">
                <span>Total Amount</span>
                <span>${paymentDetails[selectedPlan]?.total ?? 416}.00</span>
              </div>
            </div>
            <button className="w-full bg-[#0093d1] text-white py-3 rounded-lg font-semibold text-lg mb-3 hover:bg-[#007bb0] transition">Proceed to Payment</button>
            <button className="w-full border border-[#0093d1] text-[#0093d1] py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition" onClick={() => { setShowPaymentPopup(false); setShowSubscribePopup(false); }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareProviders;
