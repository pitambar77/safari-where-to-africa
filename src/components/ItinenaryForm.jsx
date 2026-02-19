import React from "react";

const ItinenaryForm = ({ onClose, trip }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-start justify-center p-6 z-50 overflow-auto">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-xl relative">
        {/* Header */}
        <div className="flex items-start gap-4 p-6 border-b">
          <img
            src={trip?.image}
            alt={trip?.title}
            className="w-20 h-16 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold">
              Request more info for {trip?.title}
            </h2>

            <p className="text-gray-600 mt-1 text-sm">{trip?.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form Section */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div>
            {/* Travel Date */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Travel date</h3>
                <span className="text-sm text-gray-500">*Required</span>
              </div>

              <select className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Departure Date *</option>
              </select>
            </div>

            {/* Personal Details */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Personal details</h3>
                <span className="text-sm text-gray-500">*Required</span>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Phone Input */}
                <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                  <div className="px-4 py-3 border-r flex items-center gap-2">
                    🇮🇳 <span className="text-gray-600">+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="flex-1 px-4 py-3 focus:outline-none"
                  />
                </div>
              </div>

              {/* Policies */}
              <div className="flex gap-6 mt-6 text-sm text-gray-600">
                <button className="underline">Privacy Policy</button>
                <button className="underline">Cookie Policy</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* Additional Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Additional Information
              </h3>
              <textarea
                rows={5}
                placeholder="What can a Contiki expert help you with?"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Contact Preference */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                How would you like us to contact you?
              </h3>

              <div className="flex gap-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 border rounded" />
                  <span>By Email</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 border rounded" />
                  <span>By Phone</span>
                </label>
              </div>
            </div>

            {/* Tick All */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  Please tick all that apply
                </h3>
                <span className="text-sm text-gray-500">*Required</span>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>
                    Keep me updated on the latest Contiki news, deals and latest
                    trips
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>I am a Contiki past traveller</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>
                    Please confirm you have read and accept the Contiki Privacy
                    Policy*
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="flex justify-end mt-10">
                <button className="bg-[#C9B48A] hover:bg-[#b8a375] text-black font-semibold px-10 py-3 rounded-full border-2 border-blue-600 transition">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItinenaryForm;
