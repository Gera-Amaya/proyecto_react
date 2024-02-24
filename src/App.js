import "./App.css";
import Navbar from "./componentes/navbar";
import AgendarCita from "./componentes/AgendarCita";
import VerCita from "./componentes/VerCita";
import Localizacion from "./componentes/localizacion";
import Footer from "./componentes/Footer";
import Ofertas from "./componentes/Ofertas";
import Conocenos from "./componentes/Conocenos";

function App() {
  return (
    <div className="App text-center bg-slate-700">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-8">
        {" "}
        {/* Agregar margen superior a los componentes */}
        <div className="w-full m-0">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="h-32 rounded-lg"><AgendarCita/></div>
            <div className="h-32 rounded-lg"><VerCita/></div>
            <div className="h-32 rounded-lg"><Ofertas/></div>
            <div className="h-32 rounded-lg"><Conocenos/></div>
          </div>
        </div>
        <div className="flex items-center">
          <Localizacion />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
