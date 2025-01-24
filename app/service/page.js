"use client";

import ServiceCard from "../component/ServiceCard.js";

export default function Services() {
  const services = [
    {
      heading: "Career Counseling",
      details:
        "Psychometric testing to find your Field of Interest and Skill Set to help you decide on the right Career Path.",
      image: "/serv/1.png",
    },
    {
      heading: "Education Counseling",
      details:
        "Our Counselors receive extensive training to provide proper guidance in choosing the right field and level of study based on your Future Aspirations. Most of our counselors have been international students themselves and all have been trained abroad.",
      image: "/serv/3.jpg",
    },
    {
      heading: "University & Course Selection",
      details:
        "Guidance in picking the right University based on academic qualification, budget, family circumstances, immigration plans, etc.",
      image: "/serv/2.jpg",
    },
    {
      heading: "Application Placement",
      details:
        "Our dedicated Applications Team makes sure applications meet entry requirements, are placed properly, and that offers are received in a timely manner. We are a registered UCAS center and provide support with OUAC and Common App.",
      image: "/serv/7.jpg",
    },
    {
      heading: "Guidance on SOP/Personal Statement/Scholarship Essay Writing",
      details:
        "Take advantage of our Specialized Essay Support Team to help you come up with the best version for your essay with correct guidelines and constant feedback.",
      image: "/serv/6.jpg",
    },
    {
      heading: "English Proficiency Tests",
      details:
        "We are a certified center of Registration for IELTS, PTE, Duo Lingo, SELT, and OIETC.",
      image: "/serv/3.jpg",
    },
    {
      heading: "Scholarships",
      details:
        "We try our best to connect you with available scholarships to make study abroad more affordable. Many of our students receive scholarships for higher studies.",
      image: "/serv/4.jpg",
    },
    {
      heading: "Pre-Visa Assistance",
      details:
        "We conduct sessions and mocks to prepare students for Credibility and Pre-CAS interviews.",
      image: "/serv/2.png",
    },
    {
      heading: "Expert Visa Services",
      details:
        "Our visa success is noteworthy as we have a dedicated Visa Team with vast experience and expertise.",
      image: "/serv/5.jpg",
    },
    {
      heading: "Pre & Post Departure Support",
      details:
        "We conduct regular briefings to cover all areas in preparing students for a smooth transition to a new country.",
      image: "/serv/10.png",
    },
    {
      heading: "English Test Prep",
      details:
        "Let us help you cross the hurdle to get the required score on your English Test.",
      image: "/serv/8.webp",
    },
    {
      heading: "Live Support",
      details:
        "Have a question? Reach out to our Team on Social Media, Instant Messaging, and more.",
      image: "/serv/12.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black mt-8 mb-24">
      

      <div className="md:w-[60%] mx-auto h-auto mt-[100px] px-6">
      <h1 className="text-center text-2xl md:text-3xl font-extrabold text-transparent text-white">
        "Your future is in trusted hands—with full transparency, complete
        access, and unwavering support, we make your dreams into a
        reality."
      </h1>
        {/* Using grid layout to create a two-column design on larger screens */}
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-center ">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              heading={service.heading}
              details={service.details}
              image={service.image} // Passing the image path for each service
            />
          ))}
        </div>
      </div>
    </div>
  );
}
