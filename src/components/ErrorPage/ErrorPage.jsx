import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Ops !</h2>
      <h3>404 not found</h3>
      <Link className="btn btn-secondary" to={"/"}>
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
