import React from "react";
import TrustedIcon from "../../../public/whychooseus (1).svg"; // ✅ replace with actual icons
import ReliableIcon from "../../../public/whychooseus (2).png";
import TailoredIcon from "../../../public/whychooseus (1).png";

function WhyChooseUs() {
  const reasons = [
    {
      name: "Trusted Provider",
      desc: "We thoroughly vet all our care providers to ensure your peace of mind",
      icon: TrustedIcon,
      bg: "bg-[#eaf6eb]",
    },
    {
      name: "Reliable Support",
      desc: "Our care providers are punctual, dependable and dedicated to helping.",
      icon: ReliableIcon,
      bg: "bg-[#fbede6]",
    },
    {
      name: "Tailored Care",
      desc: "We provide personalized care to meet your family's unique needs",
      icon: TailoredIcon,
      bg: "bg-[#fff4e0]",
    },
  ];

  return (
    <section className="w-full bg-white mb-20">
      {/* Light Blue Top Strip */}
      <div className="bg-[#e8f8fd] h-20 w-full"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 -mt-10">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 mt-5">Why Choose Us?</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.name}
              className={`rounded-xl p-6 ${reason.bg} shadow-sm hover:shadow-md transition`}
            >
              {/* Icon */}
              <div className="mb-4 opacity-50">
                <img src={reason.icon} alt={reason.name} className="h-16 w-auto" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{reason.name}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-snug">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
