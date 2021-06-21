import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav className="mt-3">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link
          to="/admin/dashboard"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/chats"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          Chats
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/product"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          Product
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/products"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          All Products
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/category"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          Category
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/sub"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          Sub Category
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/password"
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light mb-4"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          Password
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
