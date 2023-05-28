
import Tabla from "./Tabla";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function Form({ setBackend, setBaseDatos, setFrontend, backend, frontend, baseDatos }) {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false)
 

  function handleSubmit(event) {
    event.preventDefault();

    const carrera = event.target.querySelector(".materia").value;

    const nota = parseFloat(event.target.querySelector(".nota").value);

    switch (carrera) {
      case "backend":
      setBackend((prevState) => ({
        estudiantes: prevState.estudiantes + 1,
        notas: [...prevState.notas, nota],
      }));
      break;
        case "database":
      setBaseDatos((prevState) => ({
        estudiantes: prevState.estudiantes + 1,
        notas: [...prevState.notas, nota],
      }));
      break;
      case "frontend":
      setFrontend((prevState) => ({
        estudiantes: prevState.estudiantes + 1,
        notas: [...prevState.notas, nota],
      }));
      break;
    default:
    
      setShow(true)
      setError(true)
    }
    
  }




  return (
    <div style={{fontSize:'2em'}}>
    <div className="container" >
      <h1  style={{fontSize:'1.5em'}}>Promedio de estudiantes por carrera</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input" >
        {show && 
            <div style={{backgroundColor:'orange',borderRadius:'20px'}}>
         {error && 'Debe Seleccionar una Materia'}
        
            </div>
            
        }
     
          <select className="materia"  onClick={() => setError(false)} 
          style={{fontSize:'1em',width:'400px',height:'50px'}}>
            <option selected disabled>
              Selecione una carrera
            </option>
            <option value="database">Base de Datos</option>
            <option value="backend">Desarrollo Backend</option>
            <option value="frontend">Desarrollo Frontend</option>
            {/* <option value="devops">Devops</option> */}
          </select>
          <input type="number" className="nota" min="0" max="10" required 
          style={{fontSize:'1em',width:'500px',height:'50px'}} />
        </div>
      
        <input type="submit" value="Enviar" style={{width:'900px',height:'60px',fontSize:'1em',backgroundColor:'orange'}} />
      </form>
     
      </div>
        {/* {Condicion ? Resultado true : Resultado false} */}
        {/* {Condicion && Resultado true} */}
      <Tabla backend={backend} frontend={frontend} baseDatos={baseDatos} />
    </div>
  );
  

      }
      
export default Form;
