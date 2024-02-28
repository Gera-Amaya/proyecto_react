



import Navbar from '../componentes/navbar';
import Footer from '../componentes/Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import calendarioIcono from '../assets/icons/calendario.png';



function AppointmentPage() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className="App text-center bg-slate-700">
    <Navbar />
    <div className="flex justify-center items-center">
      <form className="bg-gray-200 shadow-md rounded mt-16 px-6 pt-6 pb-8 mb-8 w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Fecha:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            placeholder="Fecha"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
        <button className="bg-slate-200 hover:text-slate-400 text-gray-800 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" type="submit">
  <span className="mr-2">
    <img src={calendarioIcono} alt="Calendario" className="w-6 h-6" />
  </span>
  Agendar cita
</button>

        </div>
      </form>
    </div>
    <Footer />
    </div>
);
}
  
  export default AppointmentPage;