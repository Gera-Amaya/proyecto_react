import React from 'react';
import calendarioIcono from '../assets/icons/calendario.png';

// En tu componente:



function AgendarCita() {
return (
    <div className="flex justify-center items-center ">
    <form className="bg-slate-400 shadow-md rounded px-6 pt-6 pb-8 mb-2">
        <div className="mb-4">
        {/* Aquí puedes agregar otros elementos del AgendarCita si es necesario */}
        </div>
        <div className="flex items-center justify-center">
        <button
            className=" flex items-center  hover:bg-slate-400 hover:text-slate-300 transition-color duration-600 text-black font-bold  rounded focus:outline-none focus:shadow-outline transition-all bg-slate-500"
            type="button"
        >
            <img
                src={calendarioIcono}
                alt="Calendario"
                className="w-12 h-12 mr-1"
            />

            Agendar cita
        </button>
        </div>
    </form>
    </div>
);
}

export default AgendarCita;
