import React from "react";
import CareLogo from "../../../../public/CareLogo.png";

const navItems = [
  { label: "Home", icon: "fa-home" },
  { label: "Requests", icon: "fa-bell" },
  { label: "Message", icon: "fa-envelope" },
  { label: "Setting", icon: "fa-cog" },
];

function Sidebar({ active = "Home", onNav }) {
  return (
    <div className="h-screen w-64 bg-[#024a68] flex flex-col py-8 px-6 text-white font-sfpro fixed top-0 left-0 z-40">
      <div className="flex items-center mb-12">
        <img src={CareLogo} alt="CareNestPro Logo" className="h-10 mr-3" />
        <span className="text-xl font-bold tracking-wide">CareNestPro</span>
      </div>
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium text-base hover:bg-[#0093d1] focus:outline-none ${active === item.label ? "bg-[#0093d1]" : ""}`}
            onClick={() => onNav && onNav(item.label)}
          >
            {/* Replace with icons if you use an icon library */}
            <span className="sidebar-icon" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
