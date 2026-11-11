function Hero(){
    return(
     <section id="inicio" className="bg-gradient-to-br from-slate-900 via-blue-800 to-indigo-900 px-6 py-28 text-center text-white">
        <h1>Aprende tecnología, desarrollo web, móvil e IA desde cero</h1>

        <p className="pb-4">Domina Angular, React, Vue, Javascript y Diseño UX con los
            cursos de UTP Code.
        </p>

        <a href="#cursos">
            <button className="bg-blue-600 px-4 py-3 rounded-xl font-semibold shadow-lg transition duration-600 hover:bg-blue-500">Explorar cursos</button>
        </a>

     </section>
    );
}

export default Hero;