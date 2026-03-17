import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function PopForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    tripType: "",
    destinations: [],
    planningStage: "",
    adults: 1,
    children: 0,
    budget: "",
    travelDate: "",
    interests: "",

    // NEW (Step 2)
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    acceptPolicy: false,
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleDestination = (value) => {
    setForm((prev) => {
      const exists = prev.destinations.includes(value);
      return {
        ...prev,
        destinations: exists
          ? prev.destinations.filter((d) => d !== value)
          : [...prev.destinations, value],
      };
    });
  };

  // close dropdown on outside click
  useEffect(() => {
    const close = () => setOpenDropdown(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const dropdownClass =
    "w-full flex items-center justify-between bg-transparent font-quicksand border border-[#aba186]/40 px-4 py-3 rounded outline-none cursor-pointer";

  const optionsClass =
    "px-4 py-3 hover:bg-[#f6f1e9] cursor-pointer text-sm flex items-center justify-between";

  return (
    <>
      <div className="bg-[#ebe6dd]  ">
     
        <div className=" bg-[#f6f4f4cd] p-8 shadow-sm font-quicksand rounded">
          {/* Heading */}
          <div className=" font-quicksand text-center mb-10">
            <h2 className="text-xl tracking-widest text-gray-600 uppercase">
              Send Your Inquiry
            </h2>
          </div>
          <div className=" px-20">
            <div className="relative mb-16">
              {/* Base Line (between dots only) */}
              <div className="absolute top-[7px] left-[8px] right-[8px] h-[1px] bg-gray-300"></div>

              {/* Active Line */}
              <div
                className="absolute top-[7px] left-[8px] h-[1px] bg-[#f4b63d] transition-all duration-300"
                style={{
                  width: step === 1 ? "0%" : step === 2 ? "50%" : "100%",
                }}
              ></div>

              {/* Steps */}
              <div className="flex justify-between relative">
                {/* Step 1 */}
                <div className="flex flex-col items-start">
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      step >= 1
                        ? "bg-[#b08436] border-[#b08436]"
                        : "bg-white border-gray-300"
                    }`}
                  ></div>
                  <p className="mt-4  text-sm tracking-[3px] text-gray-700">
                    YOUR TRIP
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      step >= 2
                        ? "bg-[#b08436] border-[#b08436]"
                        : "bg-white border-gray-300"
                    }`}
                  ></div>
                  <p className="mt-4  text-sm tracking-[3px] text-gray-700">
                    YOUR DETAILS
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-end">
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      step === 3
                        ? "bg-[#b08436] border-[#b08436]"
                        : "bg-white border-gray-300"
                    }`}
                  ></div>
                  <p className="mt-4  text-sm tracking-[3px] text-gray-700">
                    SEND INQUIRY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {step === 1 && (
            <>
              {/* ================= 1. Trip Type ================= */}
              <div className=" grid md:grid-cols-2 gap-6 mb-8">
                <div className=" relative">
                  <p className=" text-sm capitalize mb-2">
                    What type of trip are you looking for?
                  </p>

                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === "trip" ? null : "trip");
                    }}
                    className={dropdownClass}
                  >
                    <span>{form.tripType || "Select trip type"}</span>
                    <span>
                      <MdKeyboardArrowDown />
                    </span>
                  </div>

                  {openDropdown === "trip" && (
                    <div className="absolute w-full bg-white mt-2 shadow z-10">
                      {[
                        "Bucket List Safari Experience",
                        "Family Vacation",
                        "Couple Experience",
                        "Honeymoon / Romantic",
                        "Friends Group Adventure",
                        "Solo Traveler",
                      ].map((opt) => (
                        <div
                          key={opt}
                          onClick={() => {
                            handleChange("tripType", opt);
                            setOpenDropdown(null);
                          }}
                          className={optionsClass}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ================= 2. Destinations (Multi) ================= */}
                <div className="relative">
                  <p className=" text-sm capitalize mb-2">
                    Destinations (multi select)
                  </p>

                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === "dest" ? null : "dest");
                    }}
                    className={dropdownClass}
                  >
                    <span className="truncate">
                      {form.destinations.length > 0
                        ? form.destinations.join(", ")
                        : "Select destinations"}
                    </span>
                    <MdKeyboardArrowDown className="text-lg" />
                  </div>

                  {openDropdown === "dest" && (
                    <div className="absolute w-full bg-white mt-2  shadow-lg rounded z-10 max-h-60 overflow-y-auto">
                      {[
                        "Botswana",
                        "Kenya & Tanzania",
                        "Mozambique",
                        "Multi Country",
                      ].map((opt) => (
                        <div
                          key={opt}
                          onClick={() => toggleDestination(opt)}
                          className={optionsClass}
                        >
                          <span>{opt}</span>
                          {form.destinations.includes(opt) && (
                            <span className="text-green-600 font-semibold">
                              ✓
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8 ">
                {/* ================= 3. Planning Stage ================= */}
                <div className=" relative">
                  <p className=" text-sm capitalize mb-3">Planning Stage</p>

                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === "plan" ? null : "plan");
                    }}
                    className={dropdownClass}
                  >
                    <span>{form.planningStage || "Select stage"}</span>
                    <span>
                      <MdKeyboardArrowDown />
                    </span>
                  </div>

                  {openDropdown === "plan" && (
                    <div className="absolute w-full bg-white mt-2 shadow z-10">
                      {["Exploring", "Ready to book"].map((opt) => (
                        <div
                          key={opt}
                          onClick={() => {
                            handleChange("planningStage", opt);
                            setOpenDropdown(null);
                          }}
                          className={optionsClass}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* ================= 5. Budget ================= */}
                <div className=" relative">
                  <p className=" text-sm capitalize mb-3">
                    Budget per person per day
                  </p>

                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(
                        openDropdown === "budget" ? null : "budget",
                      );
                    }}
                    className={dropdownClass}
                  >
                    <span>{form.budget || "Select budget"}</span>
                    <span>
                      <MdKeyboardArrowDown />
                    </span>
                  </div>

                  {openDropdown === "budget" && (
                    <div className="absolute w-full bg-white mt-2 shadow z-10">
                      {[
                        "Budget - $275",
                        "Luxury - $550",
                        "Premier - $750-$1200",
                      ].map((opt) => (
                        <div
                          key={opt}
                          onClick={() => {
                            handleChange("budget", opt);
                            setOpenDropdown(null);
                          }}
                          className={optionsClass}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* ================= 4. Travellers ================= */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* ================= 6. Travel Date ================= */}
                <div className="">
                  <label className=" text-sm capitalize mb-2 block">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent font-quicksand border border-[#aba186]/40 p-3 rounded outline-none placeholder:opacity-60"
                    value={form.travelDate}
                    onChange={(e) => handleChange("travelDate", e.target.value)}
                  />
                </div>
                <div>
                  <label className=" text-sm capitalize mb-2 block">
                    Adults
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={form.adults}
                    onChange={(e) => handleChange("adults", e.target.value)}
                    className="w-full bg-transparent font-quicksand border border-[#aba186]/40 p-3 rounded outline-none placeholder:opacity-60"
                  />
                </div>

                <div>
                  <label className=" text-sm capitalize mb-2 block">
                    Children
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={form.children}
                    onChange={(e) => handleChange("children", e.target.value)}
                    className="w-full bg-transparent font-quicksand border border-[#aba186]/40 p-3 rounded outline-none placeholder:opacity-60"
                  />
                </div>
              </div>

              {/* ================= 7. Interests ================= */}
              <div className="mb-10">
                <label className=" text-sm capitalize mb-2 block">
                  Do you have any specific areas of interest that you would like
                  us to cater for, i.e. Birding, Hiking or Fishing?
                </label>
                <textarea
                  rows="2"
                  className="w-full bg-transparent  font-quicksand border border-[#aba186]/40 p-4 rounded outline-none placeholder:opacity-60"
                  value={form.interests}
                  onChange={(e) => handleChange("interests", e.target.value)}
                />
              </div>

              {/* Next */}
              <div className="text-right">
                <button
                  onClick={() => setStep(2)}
                  className="font-quicksand cursor-pointer capitalize bg-[#aaa086] border border-[#aaa086] text-white rounded-md px-4 py-2 hover:bg-[#322913b0] transition-colors"
                >
                  NEXT STEP
                </button>
              </div>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {step === 2 && (
            <>
              {/* ================= 8. Your Details ================= */}
              <div className="mb-10">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* First Name */}
                  <div>
                    <label className=" text-sm capitalize mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full border border-[#aba186]/40 px-4 py-3 rounded outline-none"
                      value={form.firstName || ""}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className=" text-sm capitalize mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full border border-[#aba186]/40 px-4 py-3 rounded outline-none"
                      value={form.lastName || ""}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Email */}
                  <div>
                    <label className=" text-sm capitalize mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full border border-[#aba186]/40 px-4 py-3 rounded outline-none"
                      value={form.email || ""}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className=" text-sm capitalize mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full border border-[#aba186]/40 px-4 py-3 rounded outline-none"
                      value={form.phone || ""}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                {/* Residency Country */}
                {/* <div className="mb-6">
                <label className=" text-sm capitalize mb-2 block">
                  Residency Country
                </label>
                <input
                  type="text"
                  placeholder="Enter your country"
                  className="w-full border border-[#aba186]/40 px-4 py-3 rounded outline-none"
                  value={form.country || ""}
                  onChange={(e) => handleChange("country", e.target.value)}
                />
              </div> */}
                {/* Residency Country */}
                <div className="relative mb-6">
                  <label className="text-sm capitalize mb-2 block">
                    Residency Country
                  </label>

                  {/* Selected */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(
                        openDropdown === "country" ? null : "country",
                      );
                    }}
                    className={dropdownClass}
                  >
                    <span>{form.country || "Select country"}</span>
                    <MdKeyboardArrowDown />
                  </div>

                  {/* Dropdown */}
                  {openDropdown === "country" && (
                    <div className="absolute w-full bg-white mt-2 shadow-lg rounded z-10 max-h-60 overflow-y-auto ">
                      {[
                        "India",
                        "United States",
                        "United Kingdom",
                        "Australia",
                        "Canada",
                        "Germany",
                        "France",
                        "South Africa",
                        "UAE",
                      ].map((country) => (
                        <div
                          key={country}
                          onClick={() => {
                            handleChange("country", country);
                            setOpenDropdown(null);
                          }}
                          className={optionsClass}
                        >
                          {country}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={form.acceptPolicy || false}
                    onChange={(e) =>
                      handleChange("acceptPolicy", e.target.checked)
                    }
                  />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{" "}
                    <span className="underline cursor-pointer">
                      Privacy Policy
                    </span>{" "}
                    and consent to being contacted regarding my inquiry.
                  </p>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="border border-[#aaa086] cursor-pointer rounded-md capitalize px-6 py-2 hover:bg-[#322913b0] hover:text-white"
                >
                  BACK
                </button>

                <button
                  onClick={() => setStep(3)}
                  className=" font-quicksand cursor-pointer capitalize bg-[#aaa086] border border-[#aaa086] text-white rounded-md px-4 hover:bg-[#322913b0] transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="text-center py-20">
              <h2 className="text-xl font-semibold">Thank you!</h2>
              <p className="text-gray-500 mt-2">
                Your inquiry has been submitted.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
