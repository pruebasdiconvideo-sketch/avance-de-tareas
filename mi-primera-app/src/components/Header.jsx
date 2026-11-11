function Header(){
    return(
    <header className="bg-slate-900 text-white sticky top-0 shadow-lg mx-auto flex items-center justify-between px-4">

        <h2 className="text-4x1 font-bold text-blue-600">UTP Code</h2>

        <nav className="flex gap-8 px-6 py-6">
            <a href="#inicio">Inicio</a>
            <a href="#cursos">Cursos</a>
            <a href="#contacto">Contacto</a>
        </nav>

    </header>
    );
}

export default Header;