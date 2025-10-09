import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Link, Routes, Route, NavLink} from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';
import Notfound from "./notfound";

const routing = (
    <Router>
        <div>
            <h1>Projeto Rotas</h1>
            <h1 style={{color: "Green"}}>Verde</h1>
            <p style={{backgroundColor: "lightgreen"}}>Cor de Bundo</p>
            <ul>
                <li>
                    <NavLink to="/" exact activeStyle={{color: 'red'}}>
                        Painel
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" exact activeStyle={{color: 'red'}}>
                        Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact activeStyle={{color: 'red'}}>
                        Contato
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route component={Notfound} />
            </Routes>
        </div>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(routing);