import React from "react";
import { Link } from "react-router-dom";

const NewsSports = () => {
  return (
    <>
      <div>News Sports...!!</div>
      <ul>
        <li>
          <Link to="/news">Go News Home</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsSports;
