import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './componentes/Estaticos/navbar/NavBar';
import Footer from './componentes/Estaticos/footer/Footer';
import Home from './paginas/home/Home'
import Login from './paginas/login/Login';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <switch>
          <div style ={{minHeight: '100vh'}}>
          <Route exact path ='/'>
              <Login />
            </Route>
            
          <Route path ='/login'>
              <Login />
            </Route>

            <Route path ='/home'>
              <Home />
            </Route>

            <Route path ='/cadastrousuario'>
              <CadastroUsuario />
            </Route>
          </div>
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
