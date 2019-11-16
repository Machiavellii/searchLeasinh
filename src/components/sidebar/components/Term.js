import React from "react";

const Term = () => {
  return (
    <div className="term">
      <div className="row no-gutters">
        <div className="col-sm-3">
          <span>Term</span>
        </div>
        <div className="col sm-9">
          <div className="row no-gutters">
            <div className="col ml-2">
              <button className="btn btn-classic btns">12m</button>
            </div>
            <div className="col ml-1">
              <button className="btn btn-classic btns">18m</button>
            </div>
            <div className="col ml-1">
              <button className="btn btn-classic btns">2y</button>
            </div>
            <div className="col ml-2 mt-1">
              <button className="btn btn-classic btns">3y</button>
            </div>
            <div className="col ml-1 mt-1">
              <button className="btn btn-classic btns">4y</button>
            </div>
            <div className="col ml-1 mt-1">
              <button className="btn btn-classic btns">5y</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
