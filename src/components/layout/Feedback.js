import React from "react";

import "../../styles/modal.css";

const Feedback = () => {
  return (
    <div className="d-none d-lg-block">
      <button
        type="button"
        className="btn btn-primary btn-modal"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Feedback
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Feedback & Support
              </h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                We'd love your feedback on our product! Got a new feature
                suggestion? Found a bug (hope not!)? Or maybe you just need help
                with something?*
              </p>
              <p>Let us know</p>
              <p>We'd love to hear from you!</p>
              <p>
                *Please don't enquire for a vehicle through this form. Use our
                search to find the deal for you and contact the relevant broker.
              </p>
              <textarea
                name=""
                id=""
                className="form-control"
                rows="5"
                placeholder='"Your Feedback..."'
              ></textarea>
              <p>
                If you want us to reply to your message, please leave your email
                address:
              </p>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
