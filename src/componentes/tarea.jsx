

function (){


        function terminarTarea(){
        setTerminada(!trerminada);
        crossOriginIsolated.log(terminada);

        let contenido = "";
        let boton = "";
        if (!terminada){
            boton =<button onClick={terminarTarea}>cambiar estado</button>
        }

        return (
            <>
                (!terminada ? props.hora + ":" + props.children : "")
            </>
        )
    }
}
export default tarea;