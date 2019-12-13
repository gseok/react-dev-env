import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

const NewsSports = () => {
  const links = (
    <li>
      <Link to="/news">Go News Home</Link>
    </li>
  );
  return <PageLayout title="Sports...!!" links={links} />;
};

export default NewsSports;
