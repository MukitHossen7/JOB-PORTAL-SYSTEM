import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const jobApplications = useLoaderData();
  const handleUpdate = (e, id) => {
    const status = e.target.value;
    fetch(`http://localhost:5000/apply_jobs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully status updated",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="pt-12 pb-20">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Candidate Email</th>
              <th>Job_Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobApplications.map((jobApplication, idx) => (
              <tr key={jobApplication._id}>
                <th>{idx + 1}</th>
                <td>{jobApplication?.candidate_email}</td>
                <td>{jobApplication?.job_id}</td>
                <td>
                  <select
                    onChange={(e) => handleUpdate(e, jobApplication._id)}
                    defaultValue={jobApplication.status || "Change Status"}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set InterView</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
