import React from "react";

function Localizacion() {
  return (
    <div>
      <iframe
        style={{ width: 600, height: 450, border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=&q=Space+Needle,Seattle+WA"
      ></iframe>
    </div>
  );
}

export default Localizacion;
