import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const LatestJob = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="pt-12 space-y-2 text-center">
      <h2 className="font-semibold text-2xl lg:text-4xl">Jobs of the day</h2>
      <p className="text-lg">
        Search and connect with the right candidates faster
      </p>
      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
