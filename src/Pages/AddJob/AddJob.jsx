import { useState } from "react";
import Select from "react-select";

const AddJob = () => {
  const [requirement, setRequirement] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);
  const responsibilitie = [
    {
      value: "Develop and maintain software",
      label: "Develop and maintain software",
    },
    { value: "Collaborate with the team", label: "Collaborate with the team" },
    {
      value: "Participate in code reviews",
      label: "Participate in code reviews",
    },
    {
      value: "Develop marketing strategies",
      label: "Develop marketing strategies",
    },
    { value: "Manage ad campaigns", label: "Manage ad campaigns" },
    {
      value: "Analyze campaign performance",
      label: "Analyze campaign performance",
    },
    { value: "Manage budgets", label: "Manage budgets" },
    { value: "Prepare financial reports", label: "Prepare financial reports" },
    {
      value: "Ensure regulatory compliance",
      label: "Ensure regulatory compliance",
    },
    { value: "Develop email campaigns", label: "Develop email campaigns" },
    { value: "Assist in lesson planning", label: "Assist in lesson planning" },
    {
      value: "Support classroom management",
      label: "Support classroom management",
    },
    { value: "Conduct tutoring sessions", label: "Conduct tutoring sessions" },
    { value: "Oversee project execution", label: "Oversee project execution" },
    { value: "Manage team workflows", label: "Manage team workflows" },
    {
      value: "Ensure timely project delivery",
      label: "Ensure timely project delivery",
    },
    { value: "Develop predictive models", label: "Develop predictive models" },
  ];
  const requirements = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "QuickBooks", label: "QuickBooks" },
    { value: "SAP", label: "SAP" },
    { value: "Excel", label: "Excel" },
    { value: "SQL", label: "SQL" },
    { value: "WordPress", label: "WordPress" },
    { value: "SEO", label: "SEO" },
    { value: "JIRA", label: "JIRA" },
    { value: "Grammarly", label: "Grammarly" },
    { value: "Python", label: "Python" },
    { value: "Figma", label: "Figma" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Figma", label: "Figma" },
  ];
  const handleRequirements = (event) => {
    setRequirement(event.map((item) => item.value));
  };
  const handleResponsibilities = (event) => {
    setResponsibilities(event.map((item) => item.value));
  };
  const handleAddJobForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const location = e.target.location.value;
    const jobType = e.target.jobType.value;
    const category = e.target.jobCategory.value;
    const applicationDeadline = e.target.applicationDeadline.value;
    const salaryRange = {
      min: parseInt(e.target.min.value),
      max: parseInt(e.target.max.value),
      currency: e.target.currency.value,
    };
    const description = e.target.description.value;
    const company = e.target.company.value;
    const company_logo = e.target.company_logo.value;
    const hr_email = e.target.hr_email.value;
    const hr_name = e.target.hr_name.value;
    const AddFormData = {
      title,
      location,
      jobType,
      category,
      applicationDeadline,
      salaryRange,
      description,
      company,
      company_logo,
      requirement,
      responsibilities,
      hr_email,
      hr_name,
    };
    console.log(AddFormData);
  };
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add Job Form
        </h2>
        <form className="space-y-6" onSubmit={handleAddJobForm}>
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <select
              name="jobType"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            >
              <option value="" disabled selected>
                Select Job Type
              </option>
              <option value="Hybrid">Hybrid</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Contractual">Contractual</option>
              <option value="Intern">Intern</option>
            </select>
          </div>
          {/* Job Category */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Job Category
            </label>
            <select
              name="jobCategory"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            >
              <option value="" disabled selected>
                Select Job Category
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Teaching">Teaching</option>
              <option value="Management">Management</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
            </select>
          </div>
          {/* Application Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Salary Range */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Salary Range (Min & Max)
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <input
                type="number"
                name="min"
                placeholder="Min"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
              <input
                type="number"
                name="max"
                placeholder="Max"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
              <div>
                <select
                  name="currency"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                >
                  <option value="" disabled selected>
                    currency
                  </option>
                  <option value="bdt">BDT</option>
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </div>
          </div>
          {/* Description*/}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Give description"
              className="w-full border border-gray-300 p-2 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Company Logo */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Logo
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="https://www.freepik.com/free-photos-vectors/free-logo-design"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Requirements */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Requirements
            </label>
            <Select
              isMulti
              onChange={handleRequirements}
              name="requirements"
              options={requirements}
              className="basic-multi-select"
              classNamePrefix="select"
              required
            />
          </div>
          {/* Responsibility */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Responsibility
            </label>
            <Select
              isMulti
              onChange={handleResponsibilities}
              name="responsibility"
              options={responsibilitie}
              className="basic-multi-select"
              classNamePrefix="select"
              required
            />
          </div>
          {/* HR Email */}
          <div>
            <label className="block text-sm font-medium mb-1">HR Email</label>
            <input
              type="email"
              name="hr_email"
              placeholder="HR Email"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* HR Name */}
          <div>
            <label className="block text-sm font-medium mb-1">HR Name</label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
