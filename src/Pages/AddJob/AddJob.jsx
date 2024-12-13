const AddJob = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add Job Form
        </h2>
        <form className="space-y-6">
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              className="w-full border border-gray-300 p-2 rounded-md"
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
              name="jobType"
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
              />
              <input
                type="number"
                name="max"
                placeholder="Max"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              <div>
                <select
                  name="jobType"
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
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              className="w-full border border-gray-300 p-2 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              name="company"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">HR Email</label>
            <input
              type="email"
              name="hr_email"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">HR Name</label>
            <input
              type="text"
              name="hr_name"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
