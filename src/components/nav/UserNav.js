import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link
          to="/user/history"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-4 text-light"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          History
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/password"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          Password
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/wishlist"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light mb-4"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          Wishlist
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
