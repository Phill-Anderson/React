import React from "react";

import { Card } from "../card";

import "./style.css";

export const CardList = props => (
  <div className="card-list">
    {props.courses.map(course => (
      <Card key={course.id} course={course} />
    ))}
  </div>
);
