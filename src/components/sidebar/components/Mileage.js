import React from "react";

const Mileage = () => {
  return (
    <div className="mileage">
      <div className="row no-gutters">
        <div className="col-sm-3">
          <span>Mileage</span>
        </div>
        <div className="col sm-9">
          <div className="row no-gutters">
            <div className="col ml-2">
              <button className="btn btn-classic btns">5k</button>
            </div>
            <div className="col ml-1">
              <button className="btn btn-classic btns">8k</button>
            </div>
            <div className="col ml-1">
              <button className="btn btn-classic btns">10k</button>
            </div>
            <div className="col ml-2 mt-1">
              <button className="btn btn-classic btns">12k</button>
            </div>
            <div className="col ml-1 mt-1">
              <button className="btn btn-classic btns">15k</button>
            </div>
            <div className="col ml-1 mt-1">
              <button className="btn btn-classic btns">20k</button>
            </div>
            <div className="col ml-2 mt-1">
              <button className="btn btn-classic btns">25k</button>
            </div>
            <div className="col ml-1 mt-1">
              <button className="btn btn-classic btns">30k</button>
            </div>
            <div className="col ml-1 mt-1">
              <button className="btn btn-classic btns">35k</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mileage;
