import React, { useState } from "react";
import filterImg from "../../img/icons/filter.svg";

import "../../styles/filter.css";

const FilterSmall = () => {
  let [activeFilter, setActiveFilter] = useState(false);

  const toggleFilter = e => {
    setActiveFilter({ activeFilter: !activeFilter });
  };

  return (
    <div className="filter-holder d-lg-none pt-3">
      <div className="row">
        <div className="col-sm-4">
          <button className="filter-btn">
            <img src={filterImg} alt="" />
            Filter
          </button>
        </div>
        <div className="col-sm-8 stock-holder">
          <span className="stock-text">in Stock:</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="search-input my-3">
        <input
          type="text"
          className="input"
          placeholder="Have a specific car in mind? Type it here"
        />
      </div>
      <div className="result-deals">
        <div className="row">
          <div className="col-sm-5">
            <div className="result">
              <span>8,978 cars</span>
              <span>3,675,483 deals</span>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="sort">
              <span>Sort By:</span>
              <select className="select-sortBy">
                <option value="1">Value</option>
                <option value="2">Value</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSmall;
