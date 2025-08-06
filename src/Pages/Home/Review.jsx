import React, { useState } from "react";
import User1 from "../../../public/profilepic (1).png"; // ✅ replace with actual images
import User2 from "../../../public/profilepic (2).png";
import User3 from "../../../public/profilepic (3).png";

function Review() {
  const reviews = [
    {
      img: User1,
      quote: "CareNestPro has truly changed the way I find care for my family. As a busy mum, I used to struggle with finding trustworthy and professional caregivers — but with CareNestPro, the process was seamless. The caregiver we hired was not only verified but also well-trained and incredibly compassionate. I finally have peace of mind knowing my children are in safe hands. I know that CareNestPro puts care providers through proper screening and training. It's a platform I recommend to every parent who wants quality and peace of mind.",
      name: "Alisha A",
      position: "Lagos",
    },
    {
      img: User2,
      quote: "Partnering with CareNestPro has significantly improved our caregiving operations. Their user-friendly platform streamlines scheduling, staff coordination, reporting, and compliance. With excellent customer support and continuous feature updates, we've seen better staff productivity and resident satisfaction. We highly recommend them for efficient, high-quality care management.",
      name: "Solomon Osagie",
      position: "Anabella Home",
    },
    {
      img: User3,
      quote: "CareNestPro has completely transformed the way we manage our caregiving services. The platform is intuitive, reliable, and has significantly improved communication between our team and the families we support. Scheduling is seamless, documentation is organized, and the customer service is outstanding. We've seen real improvements in care quality and team efficiency since switching to CareNestPro. Highly recommended!",
      name: "Moyin Jacobs",
      position: "Director of Operations, Resource Badge",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Show 3 cards at a time, loop through reviews
  const visibleReviews = [];
  for (let i = 0; i < 3; i++) {
    visibleReviews.push(reviews[(current + i) % reviews.length]);
  }

  return (
    <section className="w-full bg-white py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">
          What do people say about us
        </h2>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex">
            {visibleReviews.map((review, idx) => (
              <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between">
                  {/* User Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>
                  {/* Quote */}
                  <div className="flex items-start mb-4">
                    <span className="text-[#0093d1] text-3xl mr-2">&ldquo;</span>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {review.quote}
                    </p>
                  </div>
                  {/* Name & Position */}
                  <div className="mt-6">
                    <p className="font-semibold text-gray-800 text-base">{review.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{review.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center mt-8 pr-8 gap-3">
            <button
              onClick={prevSlide}
              className="bg-[#f0f0f0] hover:bg-[#e0e0e0] p-3 rounded-full text-[#0093d1] shadow-md border border-gray-200"
              style={{ outline: 'none' }}
            >
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="none"/><path d="M14.5 8l-4 4 4 4" stroke="#0093d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#0093d1] hover:bg-[#007bb0] p-3 rounded-full text-white shadow-md border border-[#0093d1]"
              style={{ outline: 'none' }}
            >
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="none"/><path d="M9.5 8l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
