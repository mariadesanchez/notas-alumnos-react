import "./styles.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [backend, setBackend] = useState({
    estudiantes: 0,
    notas: [],
  });
  const [baseDatos, setBaseDatos] = useState({
    estudiantes: 0,
    notas: [],
  });
  const [frontend, setFrontend] = useState({
    estudiantes: 0,
    notas: [],
  });

  return (
    <Form backend = {backend} baseDatos = {baseDatos} frontend = {frontend} setBackend = {setBackend} setBaseDatos = {setBaseDatos} setFrontend = {setFrontend}/>
  );
}

export default App;
