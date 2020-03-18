import React from "react";

import "./style.css";

// компонэнт болгон props аргумэнтаар эх компонэнтооссо өгөгдөл хүлээн авдаг.
export const CardList = props => (
  <div className="card-list">
    {props.robots.map(el => (
      <div key={el.id}>{el.email}</div>
      // давталт хийхэд анхаарах нэг зүйл бол заавалчгүй key - бичиж өгөх
    ))}
  </div>
);
