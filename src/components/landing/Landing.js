import React from "react";

import Filter from "../filter/Filter";
import Sidebar from "../sidebar/Sidebar";
import Content from "../content/Content";

const Landing = () => {
  return (
    <div className="container">
      <div className="d-lg-none">
        <Filter />
      </div>
      <div className="row pt-4">
        <div className="d-none d-lg-flex col-lg-3">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-lg-9">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Landing;
