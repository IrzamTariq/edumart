import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const printingComposing = ({ history }) => {
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);

  const details = () => (
    <>
      <ReactQuill theme="snow" value={address} onChange={setAddress} />
      <br></br>
      <button
        onClick={""}
        className="col btn btn-outline-light btn-lg btn-block btn-raised text-light"
        style={{
          color: "rgb(255,255,255)",
          height: 40,
          background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
        }}
      >
        {/* save to db */}
        Save
      </button>
    </>
  );
  const print = () => function clickMe() {};
  const compose = () => function clickMe() {};
  const fileUpload = () => function clickMe() {};
  const payment = () => function clickMe() {};

  return (
    <div>
      <h4
        className="text-center p-3 mt-5 mb-5 display-4 jumbotron bg-dark text-light"
        style={{ fontFamily: "Arial Black" }}
      >
        Printing and Composing
      </h4>

      <div className="row mb-4">
        <div className="col-md-7">
          <h4>Provide any required specifications here!</h4>
          <br />
          <br />

          {details()}
          <br />
          <br />
          <hr />
        </div>
        <div className="col-md-5">
          <h4>Upload File</h4>
          <button
            onClick={fileUpload}
            className="col btn btn-outline-light btn-lg btn-block btn-raised text-light"
            style={{
              color: "rgb(255,255,255)",
              height: 40,
              background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
            }}
          >
            Upload File
          </button>
          <br />
          <h6>Enter Page numbers</h6>

          <form>
            <div className="form-group">
              <label>From Page number</label>
              <input
                type="number"
                className="form-control"
                autoFocus
                required
              />
              <label className="mt-4">To Page number</label>
              <input
                type="number"
                className="form-control"
                autoFocus
                required
              />
            </div>
          </form>
          <hr />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-7">
          <h4>Choose the required one!</h4>
          <br />
          <br />
          <button
            onClick={print}
            className="col btn btn-outline-light btn-lg btn-block btn-raised text-light"
            style={{
              color: "rgb(255,255,255)",
              height: 40,
              background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
            }}
          >
            Print
          </button>
          <button
            onClick={compose}
            className="col btn btn-outline-light btn-lg btn-block btn-raised text-light mt-4"
            style={{
              color: "rgb(255,255,255)",
              height: 40,
              background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
            }}
          >
            Compose
          </button>
          <hr />
        </div>

        <div className="col-md-5">
          <h4>Order Summary</h4>
          {/* show order summary and total bill here on the basis of selected
          option(print or Compose) and total number of pages 
          cost for printing = Rs. 5 per pages 
          Cost for composing = Rs. 50 per page */}
        </div>
      </div>
      <button
        onClick={payment}
        className="col btn btn-outline-light btn-lg btn-block btn-raised text-light mb-4"
        style={{
          color: "rgb(255,255,255)",
          height: 40,
          background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default printingComposing;
