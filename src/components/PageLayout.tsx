import React from "react";
import Helmet from "react-helmet";

type PageLayoutProps = {
  title: string;
  links?: any;
};

const PageLayout = ({ title, links = null }: PageLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>{title}</div>
      <ul>{links}</ul>
    </>
  );
};

export default PageLayout;
