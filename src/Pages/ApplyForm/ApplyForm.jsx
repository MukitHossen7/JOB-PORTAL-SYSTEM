import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ApplyForm = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleApplyJobForm = (e) => {
    e.preventDefault();
    const github = e.target.github.value;
    const linkedin = e.target.linkedin.value;
    const resume = e.target.resume.value;
    const applyForm = {
      job_id: id,
      github,
      linkedin,
      resume,
      candidate_email: user?.email,
    };
    console.log(applyForm);
    fetch("http://localhost:5000/apply_jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applyForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Succesfully Appley",
            text: "You clicked the button!",
            icon: "success",
          });
          navigate("/myApplications");
        }
      });
  };
  return (
    <div className="py-20">
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Job Application Form
          </h2>

          <form onSubmit={handleApplyJobForm}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                GitHub Profile
              </label>
              <input
                type="url"
                name="github"
                placeholder="https://github.com/username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="linkedin"
              >
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="resume"
              >
                Resume Link
              </label>
              <input
                type="url"
                name="resume"
                placeholder="https://resume.com/in/username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Apply for Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
