import React from "react";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import print from "./printer.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  // function clickMe() {
  //   alert("you clicked me");
  // }
  return (
    <>
      <h4
        className="text-center p-3 mt-5 mb-5 display-4 jumbotron bg-dark text-light"
        style={{ fontFamily: "Arial Black" }}
      >
        CATEGORIES
      </h4>
      <CategoryList />

      <Link to="/printingComposing">
        <div class="row justify-content-center">
          <button
            // onClick={clickMe}
            className="col-md-4 btn btn-outlined-primary btn-lg btn-raised m-3 text-info "
          >
            <img
              src={print}
              style={{ flex: 1, height: 200, width: 300, objectFit: "cover" }}
            />
            <br></br>
            <div> Printing & Composing </div>
          </button>
        </div>
      </Link>

      <h4
        className="text-center p-3 mt-5 mb-5 display-4 jumbotron bg-dark text-light"
        style={{ fontFamily: "Arial Black" }}
      >
        SUB CATEGORIES
      </h4>
      <SubList />
      <br />
      <br />
    </>
  );
};

export default Home;
