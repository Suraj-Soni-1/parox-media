// src/components/BookingPage.jsx
import React, { useState } from "react";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState("Mon 25 Aug");
  const [selectedTime, setSelectedTime] = useState("10:30 AM");

  const dates = ["Mon 25 Aug", "Tue 26 Aug", "Wed 27 Aug", "Thu 28 Aug", "Fri 29 Aug"];
  const times = ["10:30 AM", "11:30 AM", "12:30 PM", "09:00 PM", "10:00 PM", "11:00 PM"];

  return (
    <div className="min-h-screen bg-green-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <button className="text-gray-600">&larr;</button>
            <span className="text-gray-700 font-medium">Yashvardhan</span>
          </div>

          {/* Title + Image */}
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h1 className="text-xl font-semibold">Linkedin Growth System</h1>
              <div className="flex items-center text-sm text-gray-600 mt-2 space-x-3">
                <span className="border rounded-full px-3 py-0.5">FREE</span>
                <span className="flex items-center space-x-1">
                  <span>⏱</span>
                  <span>30 mins meeting</span>
                </span>
              </div>
            </div>
            <img
              src="https://via.placeholder.com/60"
              alt="profile"
              className="w-16 h-16 rounded-full"
            />
          </div>

          {/* Tags */}
          <div className="flex space-x-2">
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">Helpful</span>
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">Guidance</span>
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">Insightful</span>
          </div>

          {/* Description */}
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              Yashvardhan delivered valuable Linkedin insights but participants await more
              detailed case studies and plans.
            </p>
            <p className="font-semibold">Coaches, consultants, and lean founders:</p>
            <p>
              <strong>LinkedIn shouldn’t feel like a full-time job.</strong>
            </p>
            <p>
              If you’re posting, DMing, and commenting but still not getting leads? You’re
              not alone. Most founders are stuck in the content hamster wheel. Burning time.
              Chasing DMs. Paying ghostwriters who own the results.
            </p>
            <p className="font-semibold">We build AI Sales Systems that flip that.</p>
            <p>
              In under 30 minutes/day, our system turns LinkedIn into a consistent pipeline
              of warm, qualified leads. On this call, we’ll:
            </p>
            <ul className="list-disc pl-6">
              <li>Audit your current LinkedIn approach</li>
              <li>Show you how our system drives 5–10 deals/month</li>
              <li>Map out if we should build your AI Sales System</li>
            </ul>
            <p>
              We’ve helped 50+ founders drive $10M+ in pipeline—with systems they own and
              scale.
            </p>
            <p className="text-gray-600 text-xs">
              <strong>Note:</strong> This call is for founders serious about growth. Only
              book if you’re considering our AI Sales System offer.
            </p>
            <p>Let’s unlock your next stage of leverage.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-xl border shadow-sm p-6 space-y-6">
          {/* Dates */}
          <div>
            <h3 className="font-medium mb-3">When should we meet?</h3>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedDate === date
                      ? "bg-yellow-200 border-yellow-400"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Times */}
          <div>
            <h3 className="font-medium mb-3">Select time of day</h3>
            <div className="grid grid-cols-2 gap-2">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedTime === time
                      ? "bg-yellow-200 border-yellow-400"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Timezone */}
          <div>
            <h3 className="font-medium mb-2">Timezone</h3>
            <select className="w-full border rounded-lg px-3 py-2">
              <option>(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi</option>
              <option>(GMT+0:00) London</option>
              <option>(GMT-5:00) New York</option>
            </select>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
