import React from "react";
import WorkerImg from "../../../public/walking.svg"; // ✅ replace with actual image
import Note from "../../../public/note.png";
import LikeDislike from "../../../public/like-dislike.png";
import Verify from "../../../public/verify.png";
import BG from "../../../public/howitworksbg.png";

function HowItWorks() {
  const steps = [
    {
      icon: Note,
      title: "Register your information on our CareNest Pro App",
      desc: "Create your CareNestPro account by answering a few questions about your care needs.",
    },
    {
      icon: LikeDislike,
      title: "Get Matched",
      desc: "View lists of vetted care providers based on your specific needs and preferences.",
    },
    {
      icon: Verify,
      title: "Connect & Hire",
      desc: "Review profiles, schedule interviews, and hire a care provider that best fits your requirements with confidence.",
    },
  ];

  return (
    <section className="w-full bg-cover py-16 px-6 flex justify-center" style={{ backgroundImage: `url(${BG})` }}>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-stretch gap-8">
        
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={WorkerImg}
            alt="Care Worker"
           className="w-full h-full object-cover rounded-2xl shadow-lg border-[10px] border-opacity-50 border-[#92b7c6] "



          />
        </div>

        {/* Right Steps */}
        <div className="flex-1 text-white px-4 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">How it works</h2>

          <div className="space-y-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start space-x-4 relative">
                {/* Icon */}
                <img src={step.icon} alt="" className="h-10 w-10" /> 

                {/* Text */}
                <div>
                  <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </div>

                {/* Dashed Line Connector (between steps) */}
                {idx !== steps.length - 1 && (
                  <div className="absolute left-[5px] top-12 w-px h-10 border-l border-dashed border-[#00c0f3]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
