import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login.jsx'; // Asegúrate de que el archivo existe en src
import Principal from './principal.jsx'; // Asegúrate de que el archivo existe en src
import Pagos from './pagos.jsx'; // Asegúrate de que el archivo Pago.jsx existe en src
import Multas from './multas.jsx'; // Asegúrate de que el archivo Multas.jsx existe en src
import Admin from './admin.jsx';
import Registro from './registro.jsx';
import Usuarios from './usuarios.jsx';
import Multasadm from './multasadm.jsx';
import Regismu from './regismu.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/pagos" element={<Pagos />} /> {/* Ruta para 'Pago' */}
        <Route path="/multas" element={<Multas />} /> {/* Ruta para 'Multas' */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/multasadm" element={<Multasadm />} />
        <Route path="/regismu" element={<Regismu />} />
      </Routes>
    </Router>
  );
}

export default App;


