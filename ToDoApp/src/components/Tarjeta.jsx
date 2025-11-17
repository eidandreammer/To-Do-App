import React, { useState } from "react";
import "./Tarjeta.css";

function Tarjeta({
  name,
  image = "/imgs/default.jpg",
  role,
  description,
  skills,
}) {
  let [visible, setVisible] = useState(false);
  return (
    <>
      <div className="container">
        <h1>{name}</h1>
        <div>
          <img src={image} alt="" className="image" />
        </div>
        <h2>{role}</h2>
        <div className="presentacion">
          {description} {visible && "So well, i'm gonna be one of the best"}
          {role}
          <button onClick={() => setVisible(!visible)}>
            {visible ? "Ver menos" : "Ver mas"}
          </button>
        </div>
        <div className="skills">
          <ul>
            {skills.map((skills, index) => (
              <li key={index}>{skills}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tarjeta;
