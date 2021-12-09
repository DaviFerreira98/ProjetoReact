import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './componentes/Estaticos/navbar/NavBar';
import Footer from './componentes/Estaticos/footer/Footer';
import Home from './paginas/home/Home'
import Login from './paginas/login/Login';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './componentes/temas/listatemas/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastroPost from './componentes/postagens/cadastroPostagem/CadastroPost';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';


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

            <Route path ='/temas'>
              <ListaTema />
            </Route>

            <Route path ='/post'>
              <ListaPostagem />
            </Route>

            <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>


          </div>
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
