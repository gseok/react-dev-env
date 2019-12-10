import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

const NewsEconomy = () => {
  const links = (
    <li>
      <Link to="/news">Go News Home</Link>
    </li>
  );

  return <PageLayout title="Economy...!!" links={links} />;
};

export default NewsEconomy;
