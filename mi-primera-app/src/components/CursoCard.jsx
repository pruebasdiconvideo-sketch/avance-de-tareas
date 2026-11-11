function CursoCard({nombre, descripcion, precio, onInscribir}){

    return(
        <div className="shadow-lg p-4">
            <h3 className="mt-4 font-bold text-slate-900"> {nombre} </h3>
            <p className="mt-3 text-slate-600"> {descripcion} </p>
            <h2 className="font-bold text-blue-600 pb-4"> S/ {precio} </h2>

            <button className="bg-blue-800 py-2 px-2 text-center rounded-xl text-white" onClick={() => onInscribir(nombre) }>
            Inscribirme
            </button>

        </div>
    );
}

export default CursoCard;