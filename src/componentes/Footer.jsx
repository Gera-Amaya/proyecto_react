// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {/* Información de contacto */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Contacto</h3>
            <p>Correo electrónico: ejemplo@example.com</p>
            <p>Teléfono: +1234567890</p>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
          </div>
          {/* Enlaces de navegación */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Navegación</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca de nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          {/* Información legal */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Información legal</h3>
            <ul>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Política de cookies</a></li>
            </ul>
          </div>
        </div>
        {/* Derechos de autor */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
