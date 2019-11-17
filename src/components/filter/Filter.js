import React, { useState, Fragment } from "react";
import filterImg from "../../img/icons/filter.svg";
import Sidebar from "../sidebar/Sidebar";

import Rodal from "rodal";
import "rodal/lib/rodal.css";

import "../../styles/filter.css";

const Filter = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const bg = {
    overlay: {
      background: "#333"
    }
  };

  return (
    <Fragment>
      <div className="filter-holder pt-3">
        <div className="row">
          <div className="col-sm-4 d-lg-none">
            <button className="filter-btn" onClick={() => openModal()}>
              <img src={filterImg} alt="" />
              Filter
            </button>
          </div>
          <div className="col-sm-8 col-lg-12">
            {/* Only for small device */}
            <div className="stock-holder d-lg-none">
              <span className="stock-text">in Stock:</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="row d-none d-lg-flex align-items-center">
              <div className="results-holder col-lg-4 no-gutters">
                <div className="result">
                  <span className="result-heading">Results:</span>
                  <span className="ml-1">8,978 cars |</span>{" "}
                  <span>3,675,483 deals</span>
                </div>
              </div>
              <div className="pagination-holder col-lg-4 no-gutters d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination mb-0">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&#8249;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&#8250;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className=" holder-stock no-gutters col-lg-4">
                <div className="stock-holder mr-2">
                  <span className="stock-text">in Stock:</span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="stock-holder">
                  <span className="stock-text">Include VAT:</span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row holder-search">
          <div className="search-input my-3 col-sm-12 col-lg-9">
            <input
              type="text"
              className="input"
              placeholder="Have a specific car in mind? Type it here"
            />
          </div>
          <div className="sort d-none d-lg-flex col-lg-3 no-gutters">
            <span>Sort By:</span>
            <select className="select-sortBy">
              <option value="1">Value</option>
              <option value="2">Price</option>
            </select>
          </div>
        </div>
        <div className="result-deals d-lg-none">
          <div className="row">
            <div className="col-sm-5">
              <div className="result">
                <span>8,978 cars</span>
                <span>3,675,483 deals</span>
              </div>
            </div>
            <div className="col-sm-7 d-lg-none ">
              <div className="sort ">
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
      <Rodal
        visible={visible}
        onClose={() => closeModal()}
        animation={"slideLeft"}
      >
        <div className="col-sm-12 d-lg-none pt-3 small-btnfilter">
          <button className="filter-btn" onClick={() => closeModal()}>
            <img src={filterImg} alt="" />
            Filter
          </button>
          <buutton className="btn btn-classic clearBtn">Clear All</buutton>
        </div>
        <hr />
        <Sidebar />
      </Rodal>
    </Fragment>
  );
};

export default Filter;
