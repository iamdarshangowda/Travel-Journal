import React from "react";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <img
        src={process.env.PUBLIC_URL + "/images/world.png"}
        alt="world-icon"
        className="world-icon"
      />
      <h3>My Travel Journal</h3>
    </nav>
  );
}
