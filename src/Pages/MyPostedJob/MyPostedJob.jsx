import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyPostedJob = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div className="pt-12 pb-20">
      <h3 className=" text-3xl text-center pb-8 font-semibold">
        My Posted Job
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job Title</th>
              <th>HR Name</th>
              <th>HR Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={idx}>
                <th> {idx + 1} </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job?.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job?.company}</div>
                      <div className="text-sm opacity-50">{job?.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job?.title}</td>
                <td>{job?.hr_name}</td>
                <td>{job?.hr_email}</td>
                <th>
                  <button className="btn bg-red-500 hover:bg-red-500 text-white btn-xs">
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
