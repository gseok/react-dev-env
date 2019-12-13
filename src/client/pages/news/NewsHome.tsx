import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

const NewsHome = () => {
  const links = (
    <>
      <li>
        <Link to="/">Go Main Home</Link>
      </li>
      <li>
        <Link to="/news/sports">Sports</Link>
      </li>
      <li>
        <Link to="/news/economy">Economy</Link>
      </li>
    </>
  );
  return <PageLayout title="News Home...!!" links={links} />;
};

export default NewsHome;
