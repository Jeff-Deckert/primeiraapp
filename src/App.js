import './App.css';
import React from 'react';
import Home from './components/pages/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contato from './components/pages/contato/contato';
import Fotos from './components/pages/fotos/fotos';
import Comentarios from './components/pages/comentarios/comentarios'; // Use a primeira letra maiúscula

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/> {/* Use a primeira letra maiúscula */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
