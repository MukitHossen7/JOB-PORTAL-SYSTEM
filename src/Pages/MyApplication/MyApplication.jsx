import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(
      `https://job-portal-server-self.vercel.app/apply_jobs?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  console.log(jobs);
  return (
    <div className="pt-10 pb-20">
      <h2 className="font-semibold text-3xl text-center">
        My Applications : {jobs.length}
      </h2>

      <div className="overflow-x-auto pt-8">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Company</th>
              <th>Job Name</th>
              <th>Candidate Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={job._id}>
                <td>{idx + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.title}</td>
                <td>{job.candidate_email}</td>
                <th>
                  <button className="btn  btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
