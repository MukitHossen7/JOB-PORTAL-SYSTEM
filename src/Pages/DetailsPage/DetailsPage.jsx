import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const job = useLoaderData();
  console.log(job);
  return (
    <div className="pb-20 pt-10">
      <div className="p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
          <div className="flex items-center border-b border-gray-200 p-4">
            <img
              src={job?.company_logo}
              alt="Company Logo"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h1 className="text-2xl font-semibold">{job?.title}</h1>
              <p className="text-gray-600">{job?.company}</p>

              <span className="text-green-600 font-semibold">
                {job?.status && "active"}
              </span>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Location:</span> {job?.location}
              </p>
              <p>
                <span className="font-semibold">Job Type:</span> {job?.jobType}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {job?.category}
              </p>
              <p>
                <span className="font-semibold">Application Deadline:</span>{" "}
                {job?.applicationDeadline}
              </p>
              <p>
                <span className="font-semibold">Salary Range:</span>{" "}
                {job?.salaryRange?.min} - {job?.salaryRange?.max}{" "}
                {job?.salaryRange?.currency}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Job Description
              </h2>
              <p className="text-gray-700">{job?.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Requirements
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {job?.requirements?.map((requirement, idx) => (
                  <li key={idx}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Responsibilities
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {job?.responsibilities?.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Contact Information
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">HR Name:</span> {job?.hr_name}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {job?.hr_email}
              </p>
            </div>

            <div className="text-right mt-4">
              <button className="bg-indigo-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-600 transition duration-200">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
