import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../functions/category";
import Books from "./books.jpeg";
import stationer from "./stationery.jpeg";
import paper from "./paper.jpeg";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategories(c.data);
      setLoading(false);
    });
  }, []);

  const showCategories = () =>
    categories.map((c) => {
      console.warn(c.slug);
      function clickMe() {
        alert("you clicked me");
      }

      return (
        <div
          key={c._id}
          className="col btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
        >
          {handleImages(c.name)}
          <Link to={`/category/${c.slug}`}>{c.name}</Link>
        </div>
      );
    });
  const handleImages = (item) => {
    if (item === "Books") {
      return (
        <div style={{ height: 200, flex: 1 }}>
          <img
            src={Books}
            style={{ flex: 1, height: 200, width: 200, objectFit: "cover" }}
          />
        </div>
      );
    } else if (item === "Paper Products") {
      return (
        <div style={{ height: 200, flex: 1 }}>
          <img
            src={paper}
            style={{ flex: 1, height: 200, width: 200, objectFit: "cover" }}
          />
        </div>
      );
    } else if (item === "Stationery") {
      return (
        <div style={{ height: 200, flex: 1 }}>
          <img
            src={stationer}
            style={{ flex: 1, height: 200, width: 200, objectFit: "cover" }}
          />
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
          showCategories()
        )}
      </div>
    </div>
  );
};

export default CategoryList;
