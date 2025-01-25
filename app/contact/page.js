"use client";
import { useState } from "react";
import ImageSlider from "../component/imageSlider";
import { BASE_API_URL } from "../lib/utils";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateofbirth: "",
    message: "",
    phoneNumber: "",
    date: "",
    time: "",
    ielts: "",
  });

  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.dateofbirth) {
      formErrors.dateofbirth = "Date of Birth is required";
    } else if (!/^\d{6}$|^\d{8}$/.test(formData.dateofbirth)) {
      formErrors.dateofbirth =
        "Date of Birth must be in the format YYMMDD or YYYYMMDD";
    }
    if (!formData.phoneNumber)
      formErrors.phoneNumber = "phoneNumber is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.time) formErrors.time = "Time is required";
    if (!formData.date) formErrors.date = "Date is required";
    if (!formData.ielts) formErrors.ielts = "Score is required";
    return formErrors;
  };
  const teamMembers = [
    {
      name: "Md Abdul Muhit",
      email: "rasel@iqrainternational.online",
      phone: "+8801571311765",
      address: "Shah Mustofa Road, Moulovibazar",
      rank: "CEO & Education Consultant",
    },
    {
      name: "Shahab Rasel",
      email: "rasel@iqrainternational.online",
      phone: "+46738752087",
      address: "Norrköping, Sweden",
      rank: "IT Executive & Education Consultant",
    },
    {
      name: "Taj Uddin",
      email: "taj@iqrainternational.online",
      phone: "+8801886978496",
      address: "Munsibazar, Moulvibazar",
      rank: "Finance & Marketing Manager",
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        // Send form data to the backend
        const response = await fetch(`${BASE_API_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setShowConfirmation(true);
          setTimeout(() => {
            setShowConfirmation(false);
          }, 30000);

          // Clear the form data
          setFormData({
            name: "",
            email: "",
            message: "",
            phoneNumber: "",
            date: "",
            time: "",
            ielts: "",
            dateofbirth: "",
          });
        } else {
          console.log("Failed to submit form");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      setErrors(formErrors);
    }
  };
  if (!BASE_API_URL) {
    return null;
  }

  function generateTimeOptions() {
    const options = [];
    const start = 10; // 10 am
    const end = 16; // 5 PM

    // Generate time options with 15-minute intervals
    for (let hour = start; hour <= end; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${padZero(hour)}:${padZero(minute)}`;
        options.push(time);
      }
    }

    return options;
  }

  // Function to pad single digits with zero (e.g., 3 -> 03)
  function padZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }
  const slides = [
    { url: "swe.webp" },
    { url: "australiaCity.jpg" },
    { url: "canadaCity.webp" },
    { url: "usa.jpg" },
    { url: "uk.jpeg" },
    { url: "mal.jpg" },
    { url: "singapur.jpg" },
    { url: "india.jpg" },
    { url: "thai.jpeg" },
  ];

  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto my-6 max-w-screen-lg px-2 py-8 text-sm shadow-2xl">
          <ImageSlider slides={slides} />
          <div className="mx-auto mb-6 max-w-screen-lg bg-[#2A2A2A] p-8 text-sm uppercase  shadow-2xl rounded-md">
            <h1 className="text-white m-5 text-xl font-semibold text-center">
              Book A Schedule
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 mx-2">
              <>
                {/* Full Name and Phone Number in one row for larger screens */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-sm h-8 border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-bold text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email and Subject in one row for larger screens */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="dateofbirth"
                      className="block text-sm font-bold text-white"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      name="dateofbirth"
                      id="dateofbirth"
                      value={formData.dateofbirth || ""}
                      onChange={handleChange}
                      maxLength={8} // Maximum length for the full format (YYYYMMDDXXXX)
                      pattern="\d{6}|\d{8}" // Ensures input is 10 or 12 digits
                      placeholder="YYYYMMDD"
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.dateofbirth && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.dateofbirth}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date, Time, and Number of People in one row for larger screens */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-bold text-white"
                    >
                      Date of Booking
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.date && (
                      <p className="mt-1 text-xs text-red-500">{errors.date}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-bold text-white"
                    >
                      Time
                    </label>
                    <select
                      name="time"
                      id="time"
                      value={formData.time || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                      <option value="">View time</option>
                      {generateTimeOptions().map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-xs text-red-500">{errors.time}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="ielts"
                      className="block text-sm font-bold text-white"
                    >
                      IELTS Score
                    </label>
                    <input
                      type="number"
                      name="ielts"
                      id="ielts"
                      value={formData.ielts || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      min="0"
                      placeholder="Don't have: Enter 0"
                    />
                    {formData.ielts > 8 && (
                      <p className="mt-1 text-xs text-red-500">
                        Something Wrong
                      </p>
                    )}
                  </div>
                </div>

                {/* Message in a separate row */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-white"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message || ""}
                    onChange={handleChange}
                    placeholder="*Education *Visit *or any..."
                    className="mt-1 block w-full rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
              </>
              <div>
                <button
                  type="submit"
                  className={`w-full px-4 py-2 ${
                    showConfirmation ? "bg-black" : "bg-black"
                  } text-white rounded-sm shadow-sm font-extrabold uppercase hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                >
                  Confirm
                </button>
              </div>
            </form>
            {showConfirmation && (
              <div className="mx-auto my-6 max-w-screen-lg bg-white p-8 text-center text-sm uppercase text-black shadow-2xl">
                <p className="my-6 mb-6 text-center text-sm uppercase text-black">
                  Thank You for your Booking! {formData.name}
                  <br /> <br /> One of our representative will contact you as
                  soon as possible.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-white m-5 text-xl font-semibold">
            Meet Our Specialists
          </h1>
          <hr className="border-t-2 border-gray-300 mx-auto w-1/2" />
        </div>
        <div className="flex flex-wrap justify-center gap-1 p-2 lg:px-56 px-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1 bg-[#2A2A2A] rounded-lg"
            >
              <div
                className="bg-cover bg-center p-4 rounded-md shadow-lg"
                style={{ backgroundImage: `url(${member.backgroundImage})` }}
              >
                <h3 className="text-xl font-semibold text-center text-white">
                  {member.name}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <i className={`text-white ${member.iconClass}`}></i>
                  <p className="text-center text-white">{member.rank}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-white">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-400 underline"
                    >
                      {member.email}
                    </a>
                  </p>
                  <p className="text-sm text-white">
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${member.phone}`}
                      className="text-blue-400 underline"
                    >
                      {member.phone}
                    </a>
                  </p>

                  <p className="text-sm text-white">
                    <strong>Address:</strong> {member.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
