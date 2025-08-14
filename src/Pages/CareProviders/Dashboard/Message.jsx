import React, { useState } from "react";
import Sidebar from "./Sidebar";

const messagesList = [
  {
    name: "Aleem Sarah",
    time: "13:09pm",
    text: "The dishes have been washed and I only need to take out the trash",
    avatar: "https://ui-avatars.com/api/?name=Aleem+Sarah&background=E5E7EB&color=374151&size=64"
  },
  {
    name: "John Doe",
    time: "12:45pm",
    text: "Can you confirm the schedule for tomorrow?",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=E5E7EB&color=374151&size=64"
  },
  {
    name: "Maria Lopez",
    time: "11:30am",
    text: "Thank you for your help today!",
    avatar: "https://ui-avatars.com/api/?name=Maria+Lopez&background=E5E7EB&color=374151&size=64"
  },
  {
    name: "David Kim",
    time: "10:15am",
    text: "I'll be arriving at 2pm.",
    avatar: "https://ui-avatars.com/api/?name=David+Kim&background=E5E7EB&color=374151&size=64"
  },
  {
    name: "Priya Singh",
    time: "09:00am",
    text: "Is there anything else needed for today?",
    avatar: "https://ui-avatars.com/api/?name=Priya+Singh&background=E5E7EB&color=374151&size=64"
  }
];

const chatHistories = [
  [
    { type: "received", text: "The dishes have been washed and I only need to take out the trash", time: "09:16 PM", date: "May 3, 2025" },
    { type: "sent", text: "Thank you!", time: "09:17 PM", date: "May 3, 2025" },
    { type: "info", text: "New Activity Started", time: "09:18 PM", date: "May 3, 2025" },
    { type: "received", text: "Let me know if you need anything else.", time: "09:19 PM", date: "May 3, 2025" },
    { type: "info", text: "Activity Ended", time: "09:20 PM", date: "May 3, 2025" }
  ],
  [
    { type: "sent", text: "Can you confirm the schedule for tomorrow?", time: "08:00 AM", date: "May 4, 2025" },
    { type: "received", text: "Yes, I'll be there at 9am.", time: "08:05 AM", date: "May 4, 2025" },
    { type: "info", text: "New Activity Started", time: "08:10 AM", date: "May 4, 2025" },
    { type: "sent", text: "Great, see you then!", time: "08:15 AM", date: "May 4, 2025" }
  ],
  [
    { type: "received", text: "Thank you for your help today!", time: "07:00 PM", date: "May 2, 2025" },
    { type: "sent", text: "You're welcome!", time: "07:05 PM", date: "May 2, 2025" },
    { type: "info", text: "New Activity Started", time: "07:10 PM", date: "May 2, 2025" },
    { type: "info", text: "Activity Ended", time: "07:20 PM", date: "May 2, 2025" }
  ],
  [
    { type: "sent", text: "I'll be arriving at 2pm.", time: "01:00 PM", date: "May 1, 2025" },
    { type: "received", text: "Okay, see you then!", time: "01:05 PM", date: "May 1, 2025" },
    { type: "info", text: "New Activity Started", time: "01:10 PM", date: "May 1, 2025" }
  ],
  [
    { type: "received", text: "Is there anything else needed for today?", time: "09:00 AM", date: "Apr 30, 2025" },
    { type: "sent", text: "No, that's all for now.", time: "09:05 AM", date: "Apr 30, 2025" },
    { type: "info", text: "New Activity Started", time: "09:10 AM", date: "Apr 30, 2025" },
    { type: "info", text: "Activity Ended", time: "09:20 AM", date: "Apr 30, 2025" }
  ]
];

function Message() {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    // Dummy payment data for each message
    const paymentData = [
      { rate: 13, hours: 32, fee: 7, total: 416 },
      { rate: 15, hours: 28, fee: 8, total: 428 },
      { rate: 12, hours: 40, fee: 6, total: 486 },
      { rate: 14, hours: 30, fee: 7, total: 427 },
    ];
    const paymentDetails = paymentData[selected];


  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar active="Message" />
      <div className="flex-1 font-sfpro px-0 py-0 ml-64 flex">
        {/* Left: Messages List */}
        <div className="w-[340px] border-r border-gray-100 bg-[#f7fafd] flex flex-col">
          <div className="px-6 py-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Messages</h2>
            <input
              type="text"
              placeholder="Search messages"
              className="w-full px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none"
            />
          </div>
          <div className="flex-1 overflow-y-auto px-2 pt-2 pb-2">
            {messagesList.map((msg, i) => (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition text-left mb-1 hover:bg-[#c5c7ca] focus:outline-none ${selected === i ? "bg-[#c5c7ca]" : ""}`}
                onClick={() => setSelected(i)}
              >
                <img src={msg.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-base">{msg.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{msg.text}</div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Right: Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="flex items-center px-8 py-6 border-b border-gray-100 bg-[#eaf6fb] relative">
            <img src={messagesList[selected].avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3 object-cover" />
            <div className="flex-1 flex items-center">
              <div className="font-semibold text-gray-800 text-lg">{messagesList[selected].name}</div>
            </div>
            <div className="flex gap-4 items-center">
              <button className="text-[#0d99c9] hover:text-[#007bb0] text-xl"><i className="fas fa-phone"></i></button>
              <button className="text-[#0d99c9] hover:text-[#007bb0] text-xl"><i className="fas fa-video"></i></button>
            </div>
            <div className="ml-4 relative">
              <button
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="18" r="2" />
                </svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <button
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 text-sm"
                    onClick={() => { setShowPayment(true); setMenuOpen(false); }}
                  >
                    Start a new activity
                  </button>
                  <button
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    End activity
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Payment Popup */}
          {showPayment && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
              <div className="bg-white rounded-2xl shadow-xl w-[400px] max-w-full p-8 relative">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                  onClick={() => { setShowPayment(false); setPaymentSuccess(false); }}
                >
                  &times;
                </button>
                {!paymentSuccess ? (
                  <>
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">Proceed to Payment</h2>
                    <p className="text-center text-gray-500 mb-6">Are you sure you want to proceed to payment</p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-500">Rate per hour</span>
                        <span className="text-gray-800 font-semibold">${paymentDetails.rate}</span>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-500">Total hours</span>
                        <span className="text-gray-800 font-semibold">{paymentDetails.hours}</span>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-500">Service Fee</span>
                        <span className="text-gray-800 font-semibold">${paymentDetails.fee}</span>
                      </div>
                      <div className="border-t border-gray-200 my-3"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Total Amount</span>
                        <span className="text-[#0d99c9] text-xl font-bold">${paymentDetails.total.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      className="w-full bg-[#0d99c9] text-white py-3 rounded-md font-semibold hover:bg-[#007bb0] transition mb-3"
                      onClick={() => setPaymentSuccess(true)}
                    >
                      Proceed to Payment
                    </button>
                    <button
                      className="w-full border border-[#0d99c9] text-[#0d99c9] py-3 rounded-md font-semibold bg-white hover:bg-[#f7fafd] transition"
                      onClick={() => { setShowPayment(false); setPaymentSuccess(false); }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64">
                    <svg width="48" height="48" fill="#0d99c9" viewBox="0 0 24 24" className="mb-4"><path d="M20.285 6.709l-11.285 11.285-5.285-5.285 1.415-1.415 3.87 3.87 9.87-9.87z"/></svg>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Successful!</h3>
                    <p className="text-gray-500 mb-4">Your payment has been processed.</p>
                    <button
                      className="w-full bg-[#0d99c9] text-white py-3 rounded-md font-semibold hover:bg-[#007bb0] transition"
                      onClick={() => { setShowPayment(false); setPaymentSuccess(false); }}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* Chat Body */}
          <div className="flex-1 px-8 py-6 overflow-y-auto bg-white">
            {/* Date */}
            <div className="flex justify-center mb-6">
              <span className="text-xs text-gray-400 bg-[#f7fafd] px-4 py-1 rounded-full">{chatHistories[selected][0]?.date || ""}</span>
            </div>
            {/* Messages */}
            {chatHistories[selected].map((msg, i) => (
              <div key={i} className="mb-4">
                {msg.type === "received" && (
                  <div className="flex flex-col max-w-[60%]">
                    <span className="text-xs text-gray-500 font-semibold mb-1">{messagesList[selected].name}</span>
                    <div className="bg-gray-100 rounded-lg px-5 py-3 text-gray-800 text-sm">
                      {msg.text}
                    </div>
                    <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
                  </div>
                )}
                {msg.type === "sent" && (
                  <div className="flex flex-col items-end max-w-[60%] ml-auto">
                    <span className="text-xs text-gray-500 font-semibold mb-1">You</span>
                    <div className="bg-[#0d99c9] rounded-lg px-5 py-3 text-white text-sm">
                      {msg.text}
                    </div>
                    <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
                  </div>
                )}
                {msg.type === "info" && (
                  <div className="flex justify-end">
                    <div className="bg-[#eaf6fb] rounded-2xl px-6 py-4 min-w-[220px] max-w-[320px] flex flex-col items-start shadow-sm">
                      <span className="text-[#0d99c9] text-md font-medium mb-2">{msg.text}</span>
                      <span className="text-[#0d99c9] text-sm font-normal ml-auto self-end">{msg.time}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Chat Input */}
          <div className="px-8 py-6 border-t border-gray-100 bg-white flex items-center">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Start message"
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 bg-[#f7fafd] text-gray-700 text-sm focus:outline-none"
            />
            <button className="ml-4 bg-[#0d99c9] hover:bg-[#007bb0] rounded-full w-10 h-10 flex items-center justify-center">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M2 21l21-9-21-9v7l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
