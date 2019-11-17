import React from "react";

import Budget from "./components/Budget";
import Mileage from "./components/Mileage";
import Term from "./components/Term";
import Make from "./components/MakeModal";
import Fuel from "./components/FuelModal";
import Drive from "./components/DriveModal";
import Style from "./components/StyleModal";
import Engine from "./components/EngineModal";
import Spec from "./components/SpecModal";

import "../../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <form>
        <div className="type">
          <span>Type</span>
          <button className="btn btn-classic btn-rose"> Personal</button>
          <button className="btn btn-classic btn-grey"> Business</button>
        </div>
        <hr />
        <Budget />
        <hr />
        <Mileage />
        <hr />
        <Term />
        <hr />
        <Make />
        <hr />
        <Fuel />
        <hr />
        <Drive />
        <hr />
        <Style />
        <hr />
        <Engine />
        <hr />
        <Spec />
        <hr />
        <button className="btn btn-classic clearBtn  d-none d-lg-inline-block">
          Clear All
        </button>
        <button className="btn btn-classic searchBtn  d-block d-lg-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
