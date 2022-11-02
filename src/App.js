import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Vuelve from './components/Vuelve';
import VuelveAtras from './components/VuelveAtras';
import Ultima from './components/Ultima';
import Jump from './components/Jump';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route path='/vuelve' element={<Vuelve />} />
        <Route path='/vuelve/atras' element={<VuelveAtras />} />
        <Route path='/vuelve/atras/ya' element={<Ultima />} />
        <Route path='/vuelve/atras/ya/jump' element={<Jump />} />
      </Routes>
    </div>
  );
}

export default App;
