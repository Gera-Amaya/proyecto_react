import React from "react";
import calendarioIcono from '../assets/icons/testigo.png';

function VerCita() {
    return (
        <div className="flex justify-center items-center h-screen bg-slate-700">
        <form className="bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            {/* Aquí puedes agregar otros elementos del AgendarCita si es necesario */}
            </div>
            <div className="flex items-center justify-center">
            <button
                className=" flex items-center hover:bg-slate-800 hover:text-slate-200 transition-color duration-500 text-black font-bold rounded focus:outline-none focus:shadow-outline transition-all bg-slate-500"
                type="button"
            >
                <img
                    src={calendarioIcono}
                    alt="Calendario"
                    className="w-12 h-12 mr-1"
                />
    
                Ver mi cita
            </button>
            </div>
        </form>
        </div>
    );
    }

    export default VerCita;