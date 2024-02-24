import React from "react";
import videoIcono from '../assets/icons/video.png';

function Conocenos() {
    return (
        <div className="flex justify-center items-center mb-2">
        <form className="bg-slate-400 shadow-md rounded px-11 pt-6 pb-8">
            <div className="mb-4">
            {/* Aquí puedes agregar otros elementos del AgendarCita si es necesario */}
            </div>
            <div className="flex items-center justify-center">
            <button
                className=" flex items-center hover:bg-slate-400 hover:text-slate-300 transition-color duration-600 text-black font-bold rounded focus:outline-none focus:shadow-outline transition-all bg-slate-500"
                type="button"
            >
                <img
                    src={videoIcono}
                    alt="Calendario"
                    className="w-10 h-12 mr-1"
                />
    
                Conocenos
            </button>
            </div>
        </form>
        </div>
    );
    }

    export default Conocenos;