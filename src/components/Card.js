import React from "react";
import "../index.css";

export default function Card(props) {
  return (
    <section className="card">
      <div className="image-box">
        <img
          src={process.env.PUBLIC_URL + "/images/" + props.item.image}
          alt="places"
          className="card-image"
        />
      </div>
      <div className="details">
        <img
          src={process.env.PUBLIC_URL + "/images/location.png"}
          alt="location"
          className="loc-pin"
        />
        <p className="location">{props.item.location}</p>
        <a href={props.item.maps} className="maps">
          View on google maps
        </a>
        <h3 className="place">{props.item.place}</h3>
        <p className="date">{props.item.dateVisited}</p>
        <p className="about">{props.item.about}</p>
      </div>
    </section>
  );
}
