import React, { useState } from "react";
import "./Tarjeta.css";

function Tarjeta({ name, role, description, skills }) {
  let [visible, setVisible] = useState(true);
  return (
    <>
      <div className="container">
        <h1>{name}</h1>
        <h2>{role}</h2>
        <div className="presentacion">
          {description}{" "}
          {visible &&
            "So well, i'm gonna be one of the best software developers."}
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
