import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import { FaInstagramSquare } from "react-icons/fa";

function App() {
  let card = data.map((item) => <Card key={item.id} item={item} />);
  return (
    <div>
      <Navbar />
      {card}
      <footer className="footer">
        <p>Check out my Travel Photography on Insatgram</p>
        <a href="https://www.instagram.com/iamdarshangowda/">
          <FaInstagramSquare size="1.25em" /> darshan gowda
        </a>
      </footer>
    </div>
  );
}

export default App;
