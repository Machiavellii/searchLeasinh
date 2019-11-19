import React from "react";

import Mokka from "../../img/cars/mokka.png";
import Suzuki from "../../img/cars/Suzuki.png";
import Filter from "../filter/Filter";

import "../../styles/content.css";

const Content = () => {
  return (
    <div className="container">
      <div className="d-none d-lg-block">
        <Filter />
      </div>
      <a href="!#" className="content-link">
        <div className="row mb-2 content my-2">
          <div className="tag">
            <p>Stock Avialable</p>
          </div>
          <div className="col-12 d-md-none d-lg-none d-xl-none d-sm-flex d-flex content-text ">
            <div className="text-up">
              <p className="main-text ">Vauxhall Mokka X</p>
              <p className="text-small">147 ecoTEC Elite Nav 5or</p>
            </div>
          </div>

          <div className="col-6 col-md-3 content-image">
            <span>
              <img src={Mokka} alt="" className="img-fluid" />
            </span>
            <span className="image-text">Images for illustration only</span>
          </div>

          <div className="col-6 smallDealContent mb-2  d-md-none d-lg-none d-xl-none d-sm-flex d-flex">
            <div className="content-deal">
              <div className="deal-rating">
                <p>100</p>
              </div>
            </div>
            <div className=" content-price">
              <p className="main-text">£139.99</p>
              <div className="per-month">
                <p className="text-small">Per month inc. VAT</p>
              </div>
            </div>
          </div>

          <div className="col-6 content-price price-small d-md-none d-lg-none d-xl-none d-sm-flex d-flex">
            <p className="text-small mb-2">
              <span>£1,454.93 Total Upfront</span>
            </p>
            <div>
              <p>
                Payment Profile <span className="rose">9 + 23</span>
              </p>
              <p>
                Miles per Annum <span className="rose">8k</span>
              </p>
            </div>
          </div>

          <div className="col-6  d-md-none d-lg-none d-xl-none d-sm-flex d-flex">
            <button className="btn btn-success btn-block">Review Deal</button>
          </div>

          <div className="col-md-5  content-text mt-2 d-none d-md-flex">
            <div className="text-up">
              <p className="main-text ">Vauxhall Mokka X</p>
              <p className="text-small">147 ecoTEC Elite Nav 5or</p>
            </div>
            <div className="text-down">
              <div>
                <p> Petrol | Manual | FWD</p>
                <p>
                  Lease Type <span className="rose">Personal</span>
                </p>
              </div>
              <div>
                <p>
                  Payment Profile <span className="rose">9 + 23</span>
                </p>
                <p>
                  Miles per Annum <span className="rose">8k</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 content-deal  d-none d-md-flex">
            <div className="deal-rating">
              <p>100</p>
            </div>
          </div>
          <div className="col-md-2 content-price  d-none d-md-block ">
            <p className="main-text mt-1">£139.99</p>
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
        <div className="d-md-none d-lg-none d-xl-none d-sm-block d-block">
          <hr />
        </div>
      </a>

      <a href="!#" className="content-link">
        <div className="row mb-2 content my-2">
          <div className="tag">
            <p>Stock Avialable</p>
          </div>
          <div className="col-12 d-md-none d-lg-none d-xl-none d-sm-flex d-flex content-text ">
            <div className="text-up">
              <p className="main-text ">Suzuki Swift</p>
              <p className="text-small">1.2 Dualjet Attitude 5dr</p>
            </div>
          </div>

          <div className="col-6 col-md-3 content-image">
            <span>
              <img src={Suzuki} alt="" className="img-fluid" />
            </span>
            <span className="image-text">Images for illustration only</span>
          </div>

          <div className="col-6 smallDealContent mb-2  d-md-none d-lg-none d-xl-none d-sm-flex d-flex">
            <div className="content-deal">
              <div className="deal-rating">
                <p>100</p>
              </div>
            </div>
            <div className=" content-price">
              <p className="main-text">£155.99</p>
              <div className="per-month">
                <p className="text-small">Per month inc. VAT</p>
              </div>
            </div>
          </div>

          <div className="col-6 content-price price-small d-md-none d-lg-none d-xl-none d-sm-flex d-flex">
            <p className="text-small mb-2">
              <span>£1,870.93 Total Upfront</span>
            </p>
            <div>
              <p>
                Payment Profile <span className="rose">12 + 47</span>
              </p>
              <p>
                Miles per Annum <span className="rose">35k</span>
              </p>
            </div>
          </div>

          <div className="col-6  d-md-none d-lg-none d-xl-none d-sm-flex d-flex">
            <button className="btn btn-success btn-block">Review Deal</button>
          </div>

          <div className="col-md-5  content-text mt-2 d-none d-md-flex">
            <div className="text-up">
              <p className="main-text ">Suzuki Swift</p>
              <p className="text-small">1.2 Dualjet Attitude 5dr</p>
            </div>
            <div className="text-down">
              <div>
                <p> Petrol | Manual | FWD</p>
                <p>
                  Lease Type <span className="rose">Personal</span>
                </p>
              </div>
              <div>
                <p>
                  Payment Profile <span className="rose">12 + 47</span>
                </p>
                <p>
                  Miles per Annum <span className="rose">35k</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 content-deal  d-none d-md-flex">
            <div className="deal-rating">
              <p>100</p>
            </div>
          </div>
          <div className="col-md-2 content-price  d-none d-md-block ">
            <p className="main-text mt-1">£155.99</p>
            <div className="per-month">
              <p className="text-small">Per month inc. VAT</p>
            </div>
            <p className="text-small mb-2">
              <span>£1,870.93</span> <br />
              Total Upfront
            </p>
            <button className="btn btn-success">Review Deal</button>
          </div>
        </div>
        <div className="d-md-none d-lg-none d-xl-none d-sm-block d-block">
          <hr />
        </div>
      </a>
    </div>
  );
};

export default Content;
