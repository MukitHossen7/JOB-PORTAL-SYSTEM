import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://job-portal-server-self.vercel.app/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  console.log(jobs);
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
              <th>Action</th>
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
                <th className="">
                  <Link to={`/viewApplication/${job._id}`}>
                    <button className="btn mr-1 bg-blue-500 hover:bg-blue-500 text-white btn-xs ml-4">
                      View Application
                    </button>
                  </Link>
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
