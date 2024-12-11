/* eslint-disable react/prop-types */
import { IoLocation } from "react-icons/io5";

const JobCard = ({ job }) => {
  const {
    company_logo,
    location,
    company,
    title,
    jobType,
    description,
    salaryRange,
  } = job;
  return (
    <div>
      <div className=" p-6 bg-gradient-to-r from-white to-gray-100 shadow-xl rounded-xl overflow-hidden border border-gray-300">
        <div className="text-start">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={company_logo}
              alt="Company Logo"
              className="h-20 w-20 object-contain"
            />
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold text-gray-900  text-center">
                {company}
              </h2>
              <div className="flex items-center gap-1">
                <IoLocation />
                <span className="font-medium">{location}</span>
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-between">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <span className="bg-slate-200 px-3 rounded-full font-medium">
              {jobType}
            </span>
          </div>
          <div>
            <p className="pt-5">{description}</p>
          </div>{" "}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 pt-3">
              Requirements:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className=" mb-5 flex items-center justify-between">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Salary : </span>
              <span className="text-gray-500">
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
              </span>
            </p>
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-indigo-600 text-white font-bold text-sm uppercase tracking-wide rounded-full hover:bg-indigo-600 focus:ring-4 focus:ring-blue-300">
                Apply Now
              </button>
            </div>
          </div>
          {/* Apply Now Button */}
        </div>
      </div>
    </div>
  );
};

export default JobCard;