import React from 'react';

function Navbar() {
return (
    <div>
        <nav className="bg-gray-800 p-4">
            <ul className="flex flex-wrap justify-start">
                <li className="mr-4">
                <a href="/" className="text-white hover:text-gray-300">Inicio</a>
                </li>
                <li className="mr-4">
                <a href="/conocenos" className="text-white hover:text-gray-300">Acerca de</a>
                </li>
                <li className="mr-4">
                <a href="/servicios" className="text-white hover:text-gray-300">Servicios</a>
                </li>
                <li>
                <a href="/nosotros" className="text-white hover:text-gray-300">Contacto</a>
                </li>
            </ul>
        </nav>
    </div>
);
}

export default Navbar;
