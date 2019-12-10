import React from "react";
import { Link } from "react-router-dom";

const NewsHome = () => {
  return (
    <>
      <div>News Home...!!</div>
      <ul>
        <li>
          <Link to="/">Go Main Home</Link>
        </li>
        <li>
          <Link to="/news/sports">Sports</Link>
        </li>
        <li>
          <Link to="/news/economy">Economy</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsHome;
