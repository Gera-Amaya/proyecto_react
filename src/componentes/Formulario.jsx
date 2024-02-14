import React from 'react';

function Formulario() {
return (
    <div className="flex justify-center items-center h-screen bg-slate-700">
    <form className="bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Nombre de usuario
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Ingrese su nombre de usuario"
        />
        </div>
        <div className="flex items-center justify-center">
        <button
            className=" hover:bg-slate-800 hover:text-slate-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all bg-slate-500"
            type="button"
        >
            Enviar
        </button>
        </div>
    </form>
    </div>
);
}

export default Formulario;
