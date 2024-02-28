import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../componentes/navbar'; // Asegúrate de importar Navbar si es un componente externo
import Footer from '../componentes/Footer'; // Asegúrate de importar Footer si es un componente externo

function VerCitas() {
    // Supongamos que tienes un array de citas
    const [citas, setCitas] = useState([
        { id: 1, fecha: '2024-03-01', hora: '10:00', motivo: 'Consulta general' },
        { id: 2, fecha: '2024-03-05', hora: '15:30', motivo: 'Control de presión arterial' },
        { id: 3, fecha: '2024-03-10', hora: '09:15', motivo: 'Extracción de sangre' },
    ]);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">Mis citas</h1>
                {citas.length === 0 ? (
                    <p>No tienes citas programadas.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {citas.map(cita => (
                            <div key={cita.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                                <h2 className="text-xl font-bold mb-2">Cita {cita.id}</h2>
                                <p className="text-gray-700 mb-2">Fecha: {cita.fecha}</p>
                                <p className="text-gray-700 mb-2">Hora: {cita.hora}</p>
                                <p className="text-gray-700 mb-2">Motivo: {cita.motivo}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default VerCitas;