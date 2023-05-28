/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";



const Tabla = ({baseDatos,frontend,backend}) => {
  const promedio = (notas) => {
   
      let suma = notas.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      let promedio = suma / notas.length;
      return promedio;

  };

  return (
    <div className="container">
      <table border="1" className="tabla" >
        <thead  style={{backgroundColor:'orange'}}>
          <tr >
            <th>Carrera</th>
            <th>Cantidad de Estudiantes</th>
            <th>Promedio de Calificaciones de los Estudiantes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base de Datos</td>
            <td>{ baseDatos.estudiantes}</td>
            <td>{baseDatos.estudiantes  > 0 ? promedio(baseDatos.notas).toFixed(2):'0'}</td>
          </tr>

          <tr>
            <td>Desarrollo Frontend</td>
            <td>{frontend.estudiantes}</td>
            <td>{frontend.estudiantes > 0 ? promedio(frontend.notas).toFixed(2):'0'}</td>
          </tr>

          <tr>
            <td>Desarrollo Backend</td>
            <td>{backend.estudiantes}</td>
            <td>{backend.estudiantes > 0 ? promedio(backend.notas).toFixed(2):'0'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;