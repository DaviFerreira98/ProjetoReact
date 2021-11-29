import React from 'react';
import NavBar from './componentes/Estaticos/navbar/NavBar';
import Footer from './componentes/Estaticos/footer/Footer';
import './App.css';
import Home from './paginas/home/Home'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
