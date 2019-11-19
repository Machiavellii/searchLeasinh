import React, { Fragment, useState } from "react";

import { styleType } from "../../common/data.json";

const StyleModal = () => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(true);

  const activeClass = e => {
    setActive(!active);
    return active
      ? e.currentTarget.classList.add("activeBrand")
      : e.currentTarget.classList.remove("activeBrand");
  };
  return (
    <Fragment>
      <div className="styleModal">
        <div className="modals">
          <span>Style</span>
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
            <h6 className="modalTitle mb-3">Filter: Style</h6>
            <button className="backBtn" onClick={() => setModal(false)}>
              <i className="fas fa-chevron-left"></i> Back
            </button>
            <hr />
          </div>
          <div className="modalBody">
            <div className="row">
              {styleType.map((car, i) => (
                <div className="col-4 mb-2" key={i}>
                  <button
                    type="button"
                    className="manufacturers"
                    onClick={e => activeClass(e)}
                  >
                    <img
                      src={require(`../../../img/styletype/${car.img}`)}
                      alt=""
                      // onClick={e => smallImg(car.id)}
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
    </Fragment>
  );
};

export default StyleModal;
