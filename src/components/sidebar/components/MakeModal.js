import React, { useState, Fragment } from "react";

import { brand } from "../../common/data.json";

const MakeModal = () => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(true);
  const [modalSmall, setmodalSmall] = useState(false);
  let [data, setData] = useState("");

  const activeClass = e => {
    setActive(!active);
    return active
      ? e.currentTarget.classList.add("activeBrand")
      : e.currentTarget.classList.remove("activeBrand");
  };

  const smallImg = id => {
    const filter = brand.filter(car => car.id === id);

    setData(filter);
    setmodalSmall(!modalSmall);
    // modalSmall ? setData(filter) : setData("");
  };

  return (
    <Fragment>
      <div className="makeModal">
        <div className="modals">
          <span> Make</span>
          <i className="fas fa-plus" onClick={() => setModal(!modal)}></i>
        </div>
      </div>

      {modal && (
        <div className="myModal modalBrand">
          <div className="modalHeader mb-3 d-none d-lg-flex">
            <h6 className="modalTitle">Selected manufacturers</h6>
            <button className="close" onClick={() => setModal(false)}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modalSmallHeader  mb-3 d-xs-flex d-sm-flex d-md-flex d-lg-none">
            <h6 className="modalTitle mb-3">Filter: Make</h6>
            <button className="backBtn" onClick={() => setModal(false)}>
              <i className="fas fa-chevron-left"></i> Back
            </button>
            <hr />
          </div>
          <div className="modalBody">
            <div className="row">
              {brand.map((car, i) => (
                <div className="col-4 col-lg-2" key={i}>
                  <button
                    type="button"
                    className="manufacturers"
                    onClick={e => activeClass(e)}
                  >
                    <img
                      src={require(`../../../img/brand/${car.img}`)}
                      alt=""
                      onClick={e => smallImg(car.id)}
                    />
                    <span>{car.title}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="modalFooter">
            <button className="btn btn-classic clearBtn">Clear All</button>
          </div>
          <div className="popup-arrow"></div>
        </div>
      )}
      <div className="row">
        {modalSmall &&
          data.map((car, i) => (
            <div className="col-2 smallCarDiv" key={i}>
              <button
                type="button"
                className="manufacturers"
                // onClick={() => setmodalSmall(!modalSmall)}
              >
                <img
                  src={require(`../../../img/brand/${car.img}`)}
                  alt=""
                  onClick={e => setmodalSmall(!modalSmall)}
                />
                <span>{car.title}</span>
              </button>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default MakeModal;
