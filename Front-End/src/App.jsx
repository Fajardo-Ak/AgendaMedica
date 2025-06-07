import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import AgregarUsuario from "./Components/AgregarUsuario";
import Usuario from "./Components/Usuario";
import FormularioProducto from "./Components/FormularioProducto";
import ListaProductos from "./Components/ListaProductos";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CrearUsu from "./Components/CrearUsu";
import Personas from "./Components/Personas";
import MetodoPago from "./Components/pavo";
function App() {
    const [vista, setVista] = useState("/Graficas"); // Cambiado a "/Graficas" como ruta inicial

    // Componente para rutas que requieren autenticación (con Navbar)
    const LayoutWithNavbar = ({ children }) => (
        <>
            <Navbar setVista={setVista} />
            <div className="container mt-4">
                {children}
            </div>
            <ToastContainer />
        </>
    );

    return (
        <Router>
            <Routes>
                {/* Ruta pública (sin Navbar) */}
                <Route path="/login" element={<Login />} />
                
                <Route path="/Crearusu" element={<CrearUsu />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/" element={<LayoutWithNavbar><Home /></LayoutWithNavbar>} />
                <Route path="/home" element={<LayoutWithNavbar><Home /></LayoutWithNavbar>} />
                <Route path="." element={<LayoutWithNavbar><Home /></LayoutWithNavbar>} />
                <Route path="/index" element={<inexd />} />
                
                {/* Rutas protegidas (con Navbar) */}
                <Route path="/Admins" element={<LayoutWithNavbar><Usuario /></LayoutWithNavbar>} />
                
                {/* <Route path="/targetazo" element={<LayoutWithNavbar><MetodoPago /></LayoutWithNavbar>} /> */}
                <Route path="/Usuarios" element={<LayoutWithNavbar><Personas /></LayoutWithNavbar>} />
                <Route path="/Graficas" element={<LayoutWithNavbar><AgregarUsuario /></LayoutWithNavbar>} />
                <Route path="/Planes" element={<LayoutWithNavbar><ListaProductos /></LayoutWithNavbar>} />
                <Route path="/ventas" element={<LayoutWithNavbar><FormularioProducto /></LayoutWithNavbar>} />
                
                {/* Redirección para rutas no encontradas */}
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
// esto es para -configuración de Laravel. javier