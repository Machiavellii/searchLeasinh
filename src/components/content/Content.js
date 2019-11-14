import React from "react";

import Mokka from "../../img/cars/mokka.png";

import "../../styles/content.css";

const Content = () => {
  return (
    <div className="container">
      <a href="!#" className="content-link">
        <div className="row mb-2 content my-2">
          <div className="tag">
            <p>Stock Avialable</p>
          </div>
          <div className="col-sm-3 content-image">
            <span>
              <img src={Mokka} alt="" className="img-fluid" />
            </span>
            <span className="image-text">Images for illustration only</span>
          </div>
          <div className="col-sm-5 content-text ">
            <div className="text-up">
              <p className="main-text">Vauxhall Mokka X</p>
              <p className="text-small">147 ecoTEC Elite Nav 5or</p>
            </div>
            <div className="text-down">
              <div className="text-left">
                <p> Petrol | Manual | FWD</p>
                <p>
                  Lease Type <span className="rose">Personal</span>
                </p>
              </div>
              <div className="text-left">
                <p>
                  Payment Profile <span className="rose">9 + 23</span>
                </p>
                <p>
                  Miles per Annum <span className="rose">8k</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-2 content-deal">
            <div className="deal-rating">
              <p>100</p>
            </div>
          </div>
          <div className="col-sm-2 content-price">
            <p className="main-text">£139.99</p>
            <div className="per-month">
              <p className="text-small">Per month inc. VAT</p>
            </div>
            <p className="text-small mb-2">
              <span>£1,454.93</span> <br />
              Total Upfront
            </p>
            <button className="btn btn-success">Review Deal</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Content;
