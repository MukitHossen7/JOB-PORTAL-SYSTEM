import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import LazyLoad from "react-lazyload";

const LatestJob = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://job-portal-server-self.vercel.app/jobs")
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
          <LazyLoad
            key={job._id}
            height="100px"
            throttle={800}
            once={true}
            offset={[-200, 0]}
          >
            <JobCard job={job}></JobCard>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
