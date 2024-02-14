import React from "react";
import tarea from "./tarea";

function Lista(){
    const tareas = require("../assets.terea.json");
    return (
        <div>
            <h1>
                Citas
            </h1>
            <ul>
                <Tarea hora={tareas[0].hora} completada={tareas[0].terminada}>
                {tareas[0].tarea}
                </Tarea>
            </ul>
        </div>
    )
}