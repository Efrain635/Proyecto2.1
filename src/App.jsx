import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./database/authcontext";
import ProtectedRoute from "./Components/ProtectedRoute"; 
import Login from "./views/Login";
import Encabezado from "./components/Encabezado";
import Inicio from "./views/Inicio";
import Categorias from "./views/Categorias";

import './App.css'
import TarjetaProducto from "./components/catalogo/TarjetaProducto";
import Catalogo from "./views/Catalogo";
import Productos from "./views/Productos";

function App() {
  return (
    <AuthProvider>
      <Router>
          <Encabezado />
          <main className="margen-superior-main">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/inicio" element={<ProtectedRoute element={<Inicio />} />} />
              <Route path="/Categorias" element={<ProtectedRoute element={<Categorias />} />} />
              <Route path="/Catalogo" element={<ProtectedRoute element={<Catalogo />} />} />
              <Route path="/Productos" element={<ProtectedRoute element={<Productos />} />} />
            </Routes>
          </main>
      </Router>
    </AuthProvider>
  )
}

export default App;