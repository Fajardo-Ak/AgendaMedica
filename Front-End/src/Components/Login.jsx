import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [Correo, setCorreo] = useState("");
    const [Clave, setClave] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulamos inicio de sesión exitoso sin verificar credenciales
        localStorage.setItem("fakeAuth", "true");
        toast.success("✅ Redirigiendo...");
        setTimeout(() => navigate("/Graficas"), 1000);
    };

    return (
        <div 
            className="container d-flex justify-content-center align-items-center vh-100" 
            style={{ 
                backgroundColor: "#ffffff",
                backgroundImage: "linear-gradient(to bottom, #ffffff, #f0f8ff)",
                position: "relative" // Añadido para posicionar el botón
            }}
        >
            {/* Botón de regreso al Home */}
            <Link 
                to="/home"
                className="btn"
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    backgroundColor: "#1e7a8c",
                    color: "white",
                    borderRadius: "50px",
                    padding: "8px 16px",
                    fontWeight: "500",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#72160D"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#1e7a8c"}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Volver al Home
            </Link>

            <div 
                className="card p-4 shadow-lg rounded" 
                style={{ 
                    width: "24rem", 
                    border: "none",
                    backgroundColor: "#ffffff"
                }}
            >
                <div className="text-center mb-4">
                    <h3 
                        className="mb-2" 
                        style={{ 
                            color: "#72160D",
                            fontWeight: "600",
                            fontSize: "1.8rem"
                        }}
                    >
                        Iniciar Sesión
                    </h3>
                    <p 
                        style={{ 
                            color: "#1e7a8c",
                            fontSize: "0.9rem"
                        }}
                    >
                        (Modo demostración - sin autenticación real)
                    </p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label 
                            className="form-label fw-medium" 
                            style={{ 
                                color: "#72160D",
                                fontSize: "0.95rem"
                            }}
                        >
                            Correo Electrónicoo
                        </label>
                        <input 
                            type="email" 
                            className="form-control p-2" 
                            style={{ 
                                border: "1px solid #1e7a8c",
                                borderRadius: "6px"
                            }}
                            placeholder="usuario@empresa.com"
                            value={Correo} 
                            onChange={(e) => setCorreo(e.target.value)} 
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            className="form-label fw-medium" 
                            style={{ 
                                color: "#72160D",
                                fontSize: "0.95rem"
                            }}
                        >
                            Contraseña
                        </label>
                        <input 
                            type="password" 
                            className="form-control p-2" 
                            style={{ 
                                border: "1px solid #1e7a8c",
                                borderRadius: "6px"
                            }}
                            placeholder="********" 
                            value={Clave} 
                            onChange={(e) => setClave(e.target.value)} 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn w-100 py-2 fw-medium" 
                        style={{ 
                            backgroundColor: "#1e7a8c",
                            color: "#ffffff",
                            borderRadius: "6px",
                            border: "none",
                            transition: "all 0.3s ease"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#72160D"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#1e7a8c"}
                    >
                        Ingresar
                    </button>
                </form>
            </div>
            <ToastContainer 
                position="top-right"
                toastStyle={{ 
                    backgroundColor: "#ffffff",
                    color: "#72160D",
                    borderLeft: "4px solid #1e7a8c"
                }}
            />
        </div>
    );
};

export default Login;