import React from "react";
import user from "../../assets/images/user.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex pt-5">
      <div className="mt-14">
        <h2 className="text-5xl font-semibold">
          One Step <br />
          Closer To Your <br />
          <span className="text-purple-300">Dream Job</span>
        </h2>
        <p className="my-3">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all <br /> your job
          application from start to finish.
        </p>
        <Link className="btn btn-primary my-2">Get Started</Link>
      </div>
      <div>
        <img
          className="text-end"
          style={{ width: "650px", height: "600px" }}
          src={user}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
