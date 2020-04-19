import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export const Card = props => (
  <Link to={"/course/" + props.course.id}>
    <div className="card-container">
      <img src={props.course.zurag} alt="" />
      <h2> {props.course.ner} </h2>
      <p> {props.course.price} </p>
      <p> {props.course.create_date} </p>
    </div>
  </Link>
);
