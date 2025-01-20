"use client";

export default function Sweden() {
  const keyDates = [
    { date: "15 October 2024", event: "Application round opens" },
    { date: "15 January", event: "Application deadline + last day to rank your courses*" },
    { date: "3 February", event: "Application fee deadline" },
    { date: "3 February", event: "Deadline to document fee exempt status (EU/EEA)" },
    { date: "3 February", event: "Supporting documentation deadline" },
    { date: "27 March", event: "Admissions results published for Master's" },
    { date: "3 April", event: "Admissions results published for Bachelor's" },
    { date: "Your university will contact you", event: "Last day to reply to your offer" },
    { date: "August/September", event: "Autumn semester starts" },
  ];

  return (
    <div className=" py-10 px-5 lg:px-20 max-w-[1000px] mx-auto flex flex-col justify-center">
      <h1 className="text-xl font-extrabold text-white text-center mb-4 px-10">
        Important Dates for Studying in Sweden
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400 border border-gray-700">
          <thead className="text-xl  uppercase bg-[#2A2A2A] text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3 border-r border-gray-600 font-extrabold">
                Date
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Event
              </th>
            </tr>
          </thead>
          <tbody>
            {keyDates.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#373737] " : "bg-[#2A2A2A]"
                } hover:bg-gray-600`}
              >
                <td className="px-6 py-4 border-r border-gray-600 text-gray-200">
                  {item.date}
                </td>
                <td className="px-6 py-4 text-gray-300">{item.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
