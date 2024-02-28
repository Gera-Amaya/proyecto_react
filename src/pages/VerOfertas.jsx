import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../componentes/navbar'; // Asegúrate de importar Navbar si es un componente externo
import Footer from '../componentes/Footer'; // Asegúrate de importar Footer si es un componente externo

function VerOfertas() {
    const ofertas = [
        { id: 1, title: 'Oferta 1', description: 'Descripción', discount: '10%' },
        { id: 2, title: 'Oferta 2', description: 'Descripción', discount: '20%' },
        { id: 3, title: 'Oferta 3', description: 'Descripción', discount: '30%' },
        // Agrega más ofertas si es necesario
    ];

    return (
        <div className="App text-center bg-slate-700">
            <Navbar /> {/* Navbar debe estar dentro del div principal */}
            <div className="container mx-auto mt-8">
                <h1 className="text-gray-200 text-3xl font-bold mb-4">Ofertas</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ofertas.map(oferta => (
                        <div key={oferta.id} className="bg-gray-200 p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-bold mb-2">{oferta.title}</h2>
                            <p className="text-gray-700 mb-2">{oferta.description}</p>
                            <p className="text-green-600 font-bold">{oferta.discount} de descuento</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer /> {/* Footer debe estar dentro del div principal */}
        </div>
    );
}

export default VerOfertas;
