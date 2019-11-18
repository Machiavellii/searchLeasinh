import React, { Fragment, useState } from "react";

import { drive, gear } from "../../common/data.json";

const DriveModal = () => {
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
      <div className="driveModal">
        <div className="modals">
          <span>Drive</span>
          <i className="fas fa-plus" onClick={() => setModal(!modal)}></i>
        </div>
      </div>

      {modal && (
        <div className="myModal modalDrive">
          <div className="modalHeader ">
            <h6 className="modalTitle">Drive</h6>
            <button className="close" onClick={() => setModal(false)}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modalBody">
            <div className="row">
              {drive.map((car, i) => (
                <div className="col-4 mb-2" key={i}>
                  <button
                    type="button"
                    className="manufacturers"
                    onClick={e => activeClass(e)}
                  >
                    <img
                      src={require(`../../../img/drive/${car.img}`)}
                      alt=""
                      // onClick={e => smallImg(car.id)}
                    />
                    <span>{car.title}</span>
                  </button>
                </div>
              ))}

              <div className="col-12">
                <h6 className="modalTitle">Gearbox</h6>
              </div>
              {gear.map((car, i) => (
                <div className="col-4" key={i}>
                  <button
                    type="button"
                    className="manufacturers"
                    onClick={e => activeClass(e)}
                  >
                    <img
                      src={require(`../../../img/drive/${car.img}`)}
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

export default DriveModal;
