import { useState } from "react";
import CursoCard from "./CursoCard";

function Cursos(){

    const [seleccionado, setSeleccionado] = useState("");

    function inscribir(nombre){
        setSeleccionado(nombre)
    }

    return(
        <section id="cursos">
            <h2 className="text-3x1 text-center font-bold pt-4">Nuestros cursos</h2>

            <div className="grid grid-cols-3 gap-8">

            <CursoCard
            nombre="React"
            descripcion="Desarrollo de aplicaciones web frontend"
            precio={150}
            onInscribir={inscribir}
            />

            <CursoCard
            nombre="React"
            descripcion="Desarrollo de aplicaciones web frontend"
            precio={150}
            onInscribir={inscribir}
            />

            <CursoCard
            nombre="React"
            descripcion="Desarrollo de aplicaciones web frontend"
            precio={150}
            onInscribir={inscribir}
            />

            <CursoCard
            nombre="React"
            descripcion="Desarrollo de aplicaciones web frontend"
            precio={150}
            onInscribir={inscribir}
            />

            <CursoCard
            nombre="React"
            descripcion="Desarrollo de aplicaciones web frontend"
            precio={150}
            onInscribir={inscribir}
            />

            <CursoCard
            nombre="React"
            descripcion="Desarrollo de aplicaciones web frontend"
            precio={150}
            onInscribir={inscribir}
            />

            </div>

            {seleccionado && (
                <p>Seleccionaste el curso: {seleccionado} </p>
            )}

        </section>
    );
}

export default Cursos;