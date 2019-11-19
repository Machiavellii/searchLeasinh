import React, { Fragment, useState } from "react";

import {
  comfort,
  convenience,
  parkingSensors,
  heatedData,
  leatherData,
  styleData
} from "../../common/data.json";

import parkSens from "../../../img/specification/parking-sensors.svg";
import heatedSeats from "../../../img/specification/heated-seats.svg";
import leatherSeats from "../../../img/specification/leather-seats.svg";
import alloysImg from "../../../img/specification/alloys.svg";

const SpecModal = () => {
  const [modal, setModal] = useState(false);
  const [parkingModal, setParkingModal] = useState(false);
  const [alloysModal, setAlloys] = useState(false);
  const [heatedModal, setHeated] = useState(false);
  const [leatherModal, setLeather] = useState(false);
  const [active, setActive] = useState(true);

  const activeClass = e => {
    setActive(!active);
    return active
      ? e.currentTarget.classList.add("activeBrand")
      : e.currentTarget.classList.remove("activeBrand");
  };

  const parking = parkingModal ? (
    <Fragment>
      <div className="row smallModals  d-lg-none d-xl-none">
        <div className="modalSmallHeader  mb-3  ">
          <h6 className="modalTitle">Filter: Spec</h6>
          <h6 className="modalTitle mb-3">Sub Filter: Parking Sensos</h6>
          <button
            className="backBtn"
            onClick={() => setParkingModal(!parkingModal)}
          >
            <i className="fas fa-chevron-left"></i> Back
          </button>
          <hr />
          <div className="row">
            {parkingSensors.map((car, i) => (
              <div className="col-3 " key={i}>
                <button
                  type="button"
                  className="manufacturers"
                  onClick={e => activeClass(e)}
                >
                  <img
                    src={require(`../../../img/specification/${car.img}`)}
                    alt=""
                    // onClick={e => smallImg(car.id)}
                  />
                  <span>{car.title}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row smallModals d-none d-lg-flex">
        <i
          className="fas fa-plus"
          onClick={() => setParkingModal(!parkingModal)}
        />
        {parkingSensors.map((car, i) => (
          <div className="col-3 " key={i}>
            <button
              type="button"
              className="manufacturers"
              onClick={e => activeClass(e)}
            >
              <img
                src={require(`../../../img/specification/${car.img}`)}
                alt=""
                // onClick={e => smallImg(car.id)}
              />
              <span>{car.title}</span>
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  ) : (
    ""
  );

  const heated = heatedModal ? (
    <Fragment>
      <div className="row smallModals d-lg-none d-xl-none">
        <div className="modalSmallHeader  mb-3">
          <h6 className="modalTitle">Filter: Spec</h6>
          <h6 className="modalTitle mb-3">Sub Filter: Heated Seads</h6>
          <button className="backBtn" onClick={() => setHeated(!heatedModal)}>
            <i className="fas fa-chevron-left"></i> Back
          </button>
          <hr />
          <div className="row">
            {heatedData.map((car, i) => (
              <div className="col-3 " key={i}>
                <button
                  type="button"
                  className="manufacturers"
                  onClick={e => activeClass(e)}
                >
                  <img
                    src={require(`../../../img/specification/${car.img}`)}
                    alt=""
                    // onClick={e => smallImg(car.id)}
                  />
                  <span>{car.title}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row smallModals d-none d-lg-flex">
        <i className="fas fa-plus " onClick={() => setHeated(!heatedModal)} />

        {heatedData.map((car, i) => (
          <div className="col-3 " key={i}>
            <button
              type="button"
              className="manufacturers"
              onClick={e => activeClass(e)}
            >
              <img
                src={require(`../../../img/specification/${car.img}`)}
                alt=""
                // onClick={e => smallImg(car.id)}
              />
              <span>{car.title}</span>
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  ) : (
    ""
  );

  const leather = leatherModal ? (
    <Fragment>
      <div className="row smallModals d-lg-none d-xl-none">
        <div className="modalSmallHeader  mb-3 ">
          <h6 className="modalTitle">Filter: Spec</h6>
          <h6 className="modalTitle mb-3">Sub Filter: Leather Seats</h6>
          <button className="backBtn" onClick={() => setLeather(!leatherModal)}>
            <i className="fas fa-chevron-left"></i> Back
          </button>
          <hr />
          <div className="row">
            {heatedData.map((car, i) => (
              <div className="col-3 " key={i}>
                <button
                  type="button"
                  className="manufacturers"
                  onClick={e => activeClass(e)}
                >
                  <img
                    src={require(`../../../img/specification/${car.img}`)}
                    alt=""
                    // onClick={e => smallImg(car.id)}
                  />
                  <span>{car.title}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row smallModals d-none d-lg-flex">
        <i className="fas fa-plus " onClick={() => setLeather(!leatherModal)} />

        {leatherData.map((car, i) => (
          <div className="col-3 " key={i}>
            <button
              type="button"
              className="manufacturers"
              onClick={e => activeClass(e)}
            >
              <img
                src={require(`../../../img/specification/${car.img}`)}
                alt=""
                // onClick={e => smallImg(car.id)}
              />
              <span>{car.title}</span>
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  ) : (
    ""
  );

  const styleAlloys = alloysModal ? (
    <Fragment>
      <div className="row smallModals styleAlloys d-lg-none d-xl-none">
        <div className="modalSmallHeader">
          <h6 className="modalTitle mb-3">Filter: Spec</h6>
          <h6 className="modalTitle mb-3">Sub Filter: Alloys</h6>
          <button className="backBtn" onClick={() => setAlloys(!alloysModal)}>
            <i className="fas fa-chevron-left"></i> Back
          </button>
          <hr />
          <h6 className="modalTitle">Select a minimum size</h6>

          <div className="row">
            <div className="col-12">
              <button
                className="manufacturers"
                type="button"
                onClick={e => activeClass(e)}
              >
                <img src={alloysImg} alt="" />
                <span>All Alloys</span>
              </button>
              <hr />
            </div>
            {styleData.map((car, i) => (
              <div className="col-4 " key={i}>
                <button
                  type="button"
                  className="manufacturers"
                  onClick={e => activeClass(e)}
                >
                  <img
                    src={require(`../../../img/specification/${car.img}`)}
                    alt=""
                    // onClick={e => smallImg(car.id)}
                  />
                  <span>{car.title}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row smallModals styleAlloys d-none d-lg-flex">
        <div className="modalHeader col-12 ">
          <h6 className="modalTitle">Select a minimum size</h6>
          <button className="close" onClick={() => setAlloys(!alloysModal)}>
            <span>&times;</span>
          </button>
        </div>

        <div className="row">
          <div className="col-12">
            <button
              className="manufacturers"
              type="button"
              onClick={e => activeClass(e)}
            >
              <img src={alloysImg} alt="" />
              <span>All Alloys</span>
            </button>
            <hr />
          </div>

          {styleData.map((car, i) => (
            <div className="col-3 " key={i}>
              <button
                type="button"
                className="manufacturers"
                onClick={e => activeClass(e)}
              >
                <img
                  src={require(`../../../img/specification/${car.img}`)}
                  alt=""
                  // onClick={e => smallImg(car.id)}
                />
                <span>{car.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  ) : (
    ""
  );

  return (
    <Fragment>
      <div className="specModal">
        <div className="modals">
          <span> Spec</span>
          <i className="fas fa-plus" onClick={() => setModal(!modal)} />
        </div>
      </div>

      {modal && (
        <div className="myModal modalSpec">
          <div className="modalHeader d-none d-lg-flex">
            <h6 className="modalTitle">Convenience</h6>
            <button className="close" onClick={() => setModal(false)}>
              <span>&times;</span>
            </button>
          </div>

          <div className="modalSmallHeader  mb-3 d-lg-none d-xl-none">
            <h6 className="modalTitle mb-3">Filter: Spec</h6>
            <button className="backBtn" onClick={() => setModal(false)}>
              <i className="fas fa-chevron-left"></i> Back
            </button>
            <hr />
            <h6 className="modalTitle">Convenience</h6>
          </div>

          <div className="modalBody">
            <div className="row">
              {convenience.map((car, i) => (
                <div className="col-4 col-lg-3 mb-2" key={i}>
                  <button
                    type="button"
                    className="manufacturers"
                    onClick={e => activeClass(e)}
                  >
                    <img
                      src={require(`../../../img/specification/${car.img}`)}
                      alt=""
                      // onClick={e => smallImg(car.id)}
                    />
                    <span>{car.title}</span>
                  </button>
                </div>
              ))}

              <div className="col-3 mb-2 icons-holder">
                <i
                  className="fas fa-plus"
                  onClick={() => setParkingModal(!parkingModal)}
                />
                <button
                  type="button"
                  className="manufacturers"
                  onClick={() => setParkingModal(!parkingModal)}
                >
                  <img
                    src={parkSens}
                    alt=""
                    // onClick={e => smallImg(car.id)}
                  />
                  <span>Parking Sensors</span>
                </button>
                <div className="d-none d-lg-block"> {parking}</div>
              </div>

              <div className="col-12">
                <h6 className="modalTitle">Style</h6>
              </div>

              <div className="col-3 icons-holder">
                <i
                  className="fas fa-plus"
                  onClick={() => setAlloys(!alloysModal)}
                />
                <button
                  type="button"
                  className="manufacturers"
                  onClick={() => setAlloys(!alloysModal)}
                >
                  <img
                    src={alloysImg}
                    alt=""
                    // onClick={e => smallImg(car.id)}
                  />
                  <span>Alloys</span>
                </button>
                <div className="d-none d-lg-flex">{styleAlloys}</div>
              </div>

              <div className="col-12">
                <h6 className="modalTitle">Comfort & Safety</h6>
              </div>
              {comfort.map((car, i) => (
                <div className="col-3" key={i}>
                  <button
                    type="button"
                    className="manufacturers"
                    onClick={e => activeClass(e)}
                  >
                    <img
                      src={require(`../../../img/specification/${car.img}`)}
                      alt=""
                      // onClick={e => smallImg(car.id)}
                    />
                    <span>{car.title}</span>
                  </button>
                </div>
              ))}

              <div className="col-3 mb-2 icons-holder">
                <i
                  className="fas fa-plus"
                  onClick={() => setHeated(!heatedModal)}
                />
                <button
                  type="button"
                  className="manufacturers"
                  onClick={() => setHeated(!heatedModal)}
                >
                  <img
                    src={heatedSeats}
                    alt=""
                    // onClick={e => smallImg(car.id)}
                  />
                  <span>Heated Seats</span>
                </button>
                <div className="d-none d-lg-flex"> {heated}</div>
              </div>

              <div className="col-3 mb-2 icons-holder">
                <i
                  className="fas fa-plus"
                  onClick={() => setLeather(!leatherModal)}
                />
                <button
                  type="button"
                  className="manufacturers"
                  onClick={() => setLeather(!leatherModal)}
                >
                  <img
                    src={leatherSeats}
                    alt=""
                    // onClick={e => smallImg(car.id)}
                  />
                  <span>Leather Seats</span>
                </button>
                <div className="d-none d-lg-flex">{leather}</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="modalFooter">
            <button className="btn btn-classic clearBtn">Clear All</button>
          </div>

          <div className="popup-arrow"></div>
          <div className="d-lg-none d-xl-none">{parking}</div>
          <div className="d-lg-none d-xl-none">{heated}</div>
          <div className="d-lg-none d-xl-none">{leather}</div>
          <div className="d-lg-none d-xl-none">{styleAlloys}</div>
        </div>
      )}
    </Fragment>
  );
};

export default SpecModal;
