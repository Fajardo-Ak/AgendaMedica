import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// Foto de perfil (reemplaza con tu URL o importa una imagen)
const profileImage = "https://i.imgur.com/3Kk8QyT.jpg";

const CrearUsu = () => {
    const [formData, setFormData] = useState({
        NombreUsuario: "",
        Correo: "",
        Clave: "",
        FotoPerfil: profileImage
    });

    const [previewImage, setPreviewImage] = useState(profileImage);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreviewImage(event.target.result);
                setFormData(prev => ({...prev, FotoPerfil: event.target.result}));
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.Clave.length < 1) {
            toast.error("La clave debe tener al menos 1 carácter");
            return;
        }
        
        // Simulación de registro exitoso
        toast.success("✅ Usuario registrado (simulación)");
        console.log("Datos simulados enviados:", formData);
        
        // Resetear formulario (excepto la imagen)
        setFormData({
            NombreUsuario: "",
            Correo: "",
            Clave: "",
            FotoPerfil: profileImage
        });
        setPreviewImage(profileImage);
    };

    return (
        <div style={{
            backgroundColor: "#ffffff",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
        }}>
            <div style={{
                backgroundColor: "#ffffff",
                border: "2px solid #1e7a8c",
                borderRadius: "15px",
                padding: "30px",
                width: "100%",
                maxWidth: "500px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
            }}>
                <div style={{ textAlign: "center", marginBottom: "25px" }}>
                    <h2 style={{ 
                        color: "#72160D",
                        fontWeight: "600",
                        marginBottom: "20px"
                    }}>
                        Registrar Nuevo Usuario
                    </h2>
                    
                    <div style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        border: "3px solid #1e7a8c",
                        margin: "0 auto 20px",
                        overflow: "hidden",
                        position: "relative"
                    }}>
                        <img 
                            src={previewImage} 
                            alt="Preview" 
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                        <label style={{
                            position: "absolute",
                            bottom: "0",
                            right: "0",
                            backgroundColor: "#1e7a8c",
                            color: "white",
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer"
                        }}>
                            ✏️
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: "none" }}
                            />
                        </label>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "20px" }}>
                        <label style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "#72160D",
                            fontWeight: "500"
                        }}>
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            name="NombreUsuario"
                            placeholder="Ej: Juan Pérez"
                            value={formData.NombreUsuario}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "12px 15px",
                                border: "1px solid #1e7a8c",
                                borderRadius: "8px",
                                fontSize: "16px",
                                outline: "none",
                                transition: "border 0.3s"
                            }}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "#72160D",
                            fontWeight: "500"
                        }}>
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            name="Correo"
                            placeholder="Ej: usuario@empresa.com"
                            value={formData.Correo}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "12px 15px",
                                border: "1px solid #1e7a8c",
                                borderRadius: "8px",
                                fontSize: "16px",
                                outline: "none"
                            }}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: "25px" }}>
                        <label style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "#72160D",
                            fontWeight: "500"
                        }}>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            name="Clave"
                            placeholder="••••••••"
                            value={formData.Clave}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "12px 15px",
                                border: "1px solid #1e7a8c",
                                borderRadius: "8px",
                                fontSize: "16px",
                                outline: "none"
                            }}
                            required
                        />
                    </div>

                    <button 
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "14px",
                            backgroundColor: "#1e7a8c",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "16px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                            marginBottom: "15px"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#72160D"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#1e7a8c"}
                    >
                        Registrar Usuario
                    </button>

                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <p style={{ color: "#555", marginBottom: "10px" }}>
                            ¿Ya tienes una cuenta?{' '}
                            <Link 
                                to="/login" 
                                style={{
                                    color: "#1e7a8c",
                                    fontWeight: "600",
                                    textDecoration: "none",
                                    transition: "color 0.3s"
                                }}
                                onMouseOver={(e) => e.target.style.color = "#72160D"}
                                onMouseOut={(e) => e.target.style.color = "#1e7a8c"}
                            >
                                Inicia sesión aquí
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CrearUsu;