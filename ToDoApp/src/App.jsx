import { useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <>
      <Tarjeta
        name="Eidan Jimenez"
        role="Web Developer"
        image="/public/imgs/circuloNegro.png"
        description="I'm a web development junior, i enjoy learning about the develop because i really want to be a web development."
        skills={["PostgreSQL", "React", "JavaScript"]}
      />
    </>
  );
}

export default App;
