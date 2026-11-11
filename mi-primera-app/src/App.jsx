import { useState } from "react";
import Hero from "./components/Hero";
import Cursos from "./components/Cursos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App(){

  return(
    <>
    <Header/>
    <main>
      <Hero/>
      <Cursos/>
      <Contacto/>
    </main>
     <Footer/>
    </>
  );
}
export default App;