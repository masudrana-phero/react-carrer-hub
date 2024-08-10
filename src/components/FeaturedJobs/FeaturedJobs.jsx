import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showJobs, setShowJobs] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center my-8">
        <h2 className="text-3xl">Featured Jobs :{jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="job_container">
        {jobs.slice.map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary btn-sm ">See More Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
