import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar(props) {
  const pathName = props?.location?.pathname;

  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link
          to="/"
          className={pathName == "/" ? "header_link_active" : "header_link"}
          style={{ textDecoration: "none" }}
        >
          Dashboard
        </Link>
        <Link to="/cloth">Cloth</Link>
        <Link to="/food">Food</Link>
        <Link to="/stationery">Stationery</Link>
        <Link to="/medical">Medical</Link>
      </div>
    </div>
    // <div>ABC</div>
  );
}

export default Navbar;
