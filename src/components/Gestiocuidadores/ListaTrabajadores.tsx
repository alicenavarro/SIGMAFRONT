import { useState } from "react";

interface ListaTrabajadoresProps {
    trabajadores: Trabajador[];
  }
  
  function ListaTrabajadores({ trabajadores }: ListaTrabajadoresProps) {
    return (
      <ul>
        {trabajadores.map((trabajador, index) => (
          <li key={index}>
            <div>Nombre: {trabajador.nombre}</div>
            <div>Apellido 1: {trabajador.apellido1}</div>
            <div>Apellido 2: {trabajador.apellido2}</div>
            <div>Correo electrónico: {trabajador.correo}</div>
            <div>Teléfono: {trabajador.telefono}</div>
            <div>Dirección: {trabajador.direccion}</div>
            <div>Horas semana: {trabajador.horassemana}</div>
            <div>Horario: {trabajador.horario}</div>
            <div>Salario: {trabajador.salario}</div>
          </li>
        ))}
      </ul>
    );
  }
  export default ListaTrabajadores
