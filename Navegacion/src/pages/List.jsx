import React, { useState } from "react";
import "./List.css";

const RegistroEstudiantes = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [carnet, setCarnet] = useState("");

    const agregarEstudiante = () => {
        if (nombre.trim() === "" || edad.trim() === "" || carnet.trim() === "") return;
        setEstudiantes([...estudiantes, { id: Date.now(), nombre, edad, carnet }]);
        setNombre("");
        setEdad("");
        setCarnet("");
    };

    return (
        <div className="registro-container">
            <h1>Registro de Estudiantes</h1>
            <div className="registro-inputs">
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} placeholder="Edad" />
                <input type="text" value={carnet} onChange={(e) => setCarnet(e.target.value)} placeholder="Carnet" />
                <button onClick={agregarEstudiante}>Agregar</button>
            </div>
            <h2>Listado:</h2>
            <ul className="lista-estudiantes">
                {estudiantes.map((est) => (
                    <li key={est.id} className="estudiante-item">
                        <span><strong>Nombre:</strong> {est.nombre}</span> |
                        <span><strong> Edad:</strong> {est.edad}</span> |
                        <span><strong> Carnet:</strong> {est.carnet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegistroEstudiantes;


