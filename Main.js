import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';

const routing = (
    <Router>
        <div>
            <h1>Projeto Rotas</h1>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(routing);