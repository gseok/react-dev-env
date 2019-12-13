import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

const Home = () => {
  const links = (
    <li>
      <Link to="/news">News</Link>
    </li>
  );

  return <PageLayout title="Home...!!" links={links} />;
};

export default Home;
