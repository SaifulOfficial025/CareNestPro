    import React, { useState } from "react";
import SidebarSignup from "./SidebarSignup";
import CareCategory from "./CareCategory";
import HousekeeperInformation from "./HousekeeperInformation";
import TimeDetails from "./TimeDetails";
import EmailStep from "./EmailStep";
import PasswordStep from "./PasswordStep";
import Summary from "./Summary";
import CareProviders from "./CareProviders";

function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Childcare");
  const [formData, setFormData] = useState({
    // Step 1
    careCategory: "Childcare",
    // Step 2 - Elderly Information
    useCurrentLocation: false,
    country: "",
    preferredLanguage: "",
    state: "",
    city: "",
    nationality: "",
    zipCode: "",
    elderlyCareType: "",
    relationshipWithElderly: "",
    ageOfElderly: "",
    genderOfElderly: "",
    healthCondition: "",
    otherHealthCondition: "",
    assistanceForm: "",
    // Step 3 - Care Provider Experience
    careProviderQualities: [],
    careProviderExperience: [],
    extraCareCategory: "",
    // Step 4 - Time/Date Details
    scheduleType: "Reoccurring",
    startDate: "",
    endDate: "",
    repeatEvery: "",
    repeatFrequency: "Weekly",
    repeatDays: [],
    startTime: "",
    endTime: "",
    hourlyRateStart: 80,
    hourlyRateEnd: 1230,
    // Step 5 - Summary
    messageToProvider: "",
    acceptedTerms: false,
    // Step 6 - Email signup
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'useCurrentLocation' && value === true) {
      setShowLocationPopup(true);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <CareCategory 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            updateFormData={updateFormData}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <HousekeeperInformation
            formData={formData}
            updateFormData={updateFormData}
            handleNext={handleNext}
            handleBack={handleBack}
            showLocationPopup={showLocationPopup}
            setShowLocationPopup={setShowLocationPopup}
          />
        );
      case 3:
        return (
          <TimeDetails 
            formData={formData}
            updateFormData={updateFormData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 4:
        return (
          <EmailStep 
            formData={formData}
            updateFormData={updateFormData}
            handleNext={handleNext}
          />
        );
      case 5:
        return (
          <PasswordStep 
            formData={formData}
            updateFormData={updateFormData}
            handleNext={handleNext}
          />
        );
      case 6:
        return (
          <Summary 
            formData={formData}
            updateFormData={updateFormData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 7:
        return (
          <CareProviders 
            showSubscribePopup={showSubscribePopup}
            setShowSubscribePopup={setShowSubscribePopup}
          />
        );
      default:
        return (
          <CareCategory 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            updateFormData={updateFormData}
            handleNext={handleNext}
          />
        );
    }
  };
  console.log("Signup Component Loaded");


  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <SidebarSignup activeStep={currentStep} />

      {/* Main Content */}
      <div 
        className="flex-1 flex items-center justify-center min-h-screen"
        style={{ marginLeft: '440px' }}
      >
        <div className="w-full flex flex-col items-center justify-center py-12 px-8">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
            Create an account
          </h2>
          <div className="w-full flex justify-center">
            {renderStepContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
