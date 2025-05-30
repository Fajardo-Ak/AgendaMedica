import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Eliminar el token de sesión
        navigate("/login"); // Redirigir a la pantalla de login
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1e7a8c" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/Home" style={{ color: "#ffffff" }}>Gestión Familiar</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button 
                                className="nav-link btn btn-link text-start" 
                                onClick={() => navigate("/Admins")}
                                style={{ color: "#ffffff", whiteSpace: "nowrap" }}
                            >
                                👨‍👩‍👧‍👦 Administradores
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link btn btn-link text-start" 
                                onClick={() => navigate("/Usuarios")}
                                style={{ color: "#ffffff", whiteSpace: "nowrap" }}
                            >
                                👨‍👩‍👧‍👦 Usuarios
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link btn btn-link text-start" 
                                onClick={() => navigate("/Graficas")}
                                style={{ color: "#ffffff", whiteSpace: "nowrap" }}
                            >
                                📊 Gráficas
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link btn btn-link text-start" 
                                onClick={() => navigate("/Planes")}
                                style={{ color: "#ffffff", whiteSpace: "nowrap" }}
                            >
                                🛒 Planes
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link btn btn-link text-start" 
                                onClick={() => navigate("/ventas")}
                                style={{ color: "#ffffff", whiteSpace: "nowrap" }}
                            >
                                💰 Ventas
                            </button>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button 
                            className="btn my-2 my-lg-0" 
                            onClick={handleLogout}
                            style={{ 
                                backgroundColor: "#72160D", 
                                color: "white",
                                whiteSpace: "nowrap"
                            }}
                        >
                            🚪 Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;