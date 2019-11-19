import React, { Fragment, useState } from "react";

import engine from "../../../img/icons/engine.svg";

const EngineModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <Fragment>
      <div className="engineModal">
        <div className="modals ">
          <span>Engine</span>
          <i className="fas fa-plus" onClick={() => setModal(!modal)}></i>
        </div>
      </div>

      {modal && (
        <div className="myModal modalStyle">
          <div className="modalHeader headerFuel d-none d-lg-flex">
            <button className="close" onClick={() => setModal(false)}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modalSmallHeader  mb-3 d-xs-flex d-sm-flex d-md-flex d-lg-none">
            <h6 className="modalTitle mb-3">Filter: Engine</h6>
            <button className="backBtn" onClick={() => setModal(false)}>
              <i className="fas fa-chevron-left"></i> Back
            </button>
            <hr />
          </div>
          <div className="modalBody">
            <div className="row align-items-center">
              <div className="col-12 col-lg-2 mb-2">
                <p>
                  CO <sub>2</sub>
                </p>
              </div>
              <div className="col-12 col-lg-5 mb-2">
                <select>
                  <option value>Any</option>
                  <option value="1">10</option>
                  <option value="2">20</option>
                  <option value="3">30</option>
                  <option value="4">40</option>
                </select>
              </div>
              <div className="d-none d-lg-flex col-12 col-lg-5 mb-2">
                <small>
                  g/CO <sub>2</sub> - Max
                </small>
              </div>

              <div className="col-12 col-lg-2 mb-2">
                <p>MPG</p>
              </div>
              <div className="col-12 col-lg-5 mb-2">
                <select>
                  <option value>Any</option>
                  <option value="1">10</option>
                  <option value="2">20</option>
                  <option value="3">30</option>
                  <option value="4">40</option>
                </select>
              </div>
              <div className="d-none d-lg-flex col-12 col-lg-5 mb-2">
                <small>mog - Min</small>
              </div>

              <div className="col-12 col-lg-2 mb-2">
                <p>0 - 62</p>
              </div>
              <div className="col-12 col-lg-5 mb-2">
                <select>
                  <option value>Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="d-none d-lg-flex col-12 col-lg-5 mb-2">
                <small>seconds - Max</small>
              </div>

              <div className="col-12 col-lg-2 mb-2">
                <p>
                  <img src={engine} alt="" />
                </p>
              </div>
              <div className="col-12 col-lg-5 mb-2">
                <select>
                  <option value>Any</option>
                  <option value="1">1.0</option>
                  <option value="2">2.0</option>
                  <option value="3">3.0</option>
                  <option value="4">4.0</option>
                </select>
              </div>
              <div className="d-none d-lg-flex col-12 col-lg-5 mb-2">
                <small>itres - Min</small>
              </div>

              <div className="col-12 col-lg-2 mb-2">
                <p>Engine</p>
              </div>
              <div className="col-12 col-lg-5 mb-2">
                <select>
                  <option value>Any</option>
                  <option value="1">1.0</option>
                  <option value="2">2.0</option>
                  <option value="3">3.0</option>
                  <option value="4">4.0</option>
                </select>
              </div>
              <div className="d-none d-lg-flex col-12 col-lg-5 mb-2">
                <small>itres - Max</small>
              </div>
            </div>
          </div>
          <hr />
          <div className="modalFooter">
            <button className="btn btn-classic clearBtn">Clear All</button>
          </div>
          <div className="popup-arrow"></div>
        </div>
      )}
    </Fragment>
  );
};

export default EngineModal;
