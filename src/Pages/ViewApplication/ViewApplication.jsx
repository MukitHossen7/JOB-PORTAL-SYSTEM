import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
  const jobApplications = useLoaderData();
  console.log(jobApplications);
  return (
    <div className="pt-12 pb-20">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Candidate Email</th>
              <th>Job_Id</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {jobApplications.map((jobApplication, idx) => (
              <tr key={jobApplication._id}>
                <th>{idx + 1}</th>
                <td>{jobApplication?.candidate_email}</td>
                <td>{jobApplication?.job_id}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
