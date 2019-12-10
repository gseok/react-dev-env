import React, { ElementType } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

const Home = () => {
  const links = (
    <li>
      <Link to="/news">News</Link>
    </li>
  );

  return (
    <>
      <PageLayout title="Home...!!" links={links}></PageLayout>
    </>
  );
};

export default Home;
