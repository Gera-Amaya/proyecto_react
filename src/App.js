import './App.css';
import Navbar from './componentes/navbar';
import AgendarCita from './componentes/AgendarCita';
import VerCita from './componentes/VerCita';

function App() {
  return (
    <div className="App text-center">
      <Navbar />
      <div className="flex items-start"> {/* Agregar margen superior a los componentes */}
        <div className=" w-1/2"> {/* Establecer ancho del 50% y margen derecho */}
          <AgendarCita />
        </div>
        <div className="w-1/2"> {/* Establecer ancho del 50% y margen izquierdo */}
          <VerCita />
        </div>
      </div>
    </div>
  );
}

export default App;
