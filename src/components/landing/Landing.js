import React from "react";

import FilterSmall from "../filter/FilterSmall";
import Sidebar from "../sidebar/Sidebar";
import Content from "../content/Content";

const Landing = () => {
  return (
    <div className="container">
      <FilterSmall />
      <div className="row">
        <div className="d-none d-lg-flex col-lg-3">
          <Sidebar />
        </div>
        <div className="col-12 col-lg-9">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Landing;
