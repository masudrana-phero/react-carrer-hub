import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  console.log(job);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="flex flex-col border border-gray-400 mb-5 p-5 rounded">
      <img className="w-28" src={logo} alt="" />
      <h2>{job_title}</h2>
      <p>{company_name}</p>
      <div>
        <button className="btn btn-outline btn-sm mr-2">
          {remote_or_onsite}
        </button>
        <button className="btn btn-outline btn-sm">{job_type}</button>
      </div>
      <div className="flex flex-grow font-semibold my-2">
        <div className="flex justify-center items-center text-1xl">
          <IoLocationOutline className="mr-2" />
          <p className="mr-3">{location}</p>
        </div>
        <div className="flex justify-center items-center">
          <AiOutlineDollar className="mr-2"></AiOutlineDollar>
          <p>{salary}</p>
        </div>
      </div>
      <Link className="btn bg-[#848AFE] btn-sm w-36 text-[#fff] mt-5">
        View Details
      </Link>
    </div>
  );
};

export default Job;
