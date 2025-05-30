import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListaPersonas = () => {
  // Datos iniciales
  const [personas, setPersonas] = useState([]);

  const [editandoId, setEditandoId] = useState(null);
  const [datosEdicion, setDatosEdicion] = useState({});
  const [busqueda, setBusqueda] = useState("");

  // Función para iniciar la edición
  const iniciarEdicion = (persona) => {
    setEditandoId(persona.id);
    setDatosEdicion({...persona});
  };

  // Función para guardar cambios (simulado)
  const guardarEdicion = (id) => {
    setPersonas(personas.map(p => p.id === id ? datosEdicion : p));
    setEditandoId(null);
    toast.success("Cambios guardados (simulación)");
  };

  // Función para cancelar edición
  const cancelarEdicion = () => {
    setEditandoId(null);
  };

  // Manejar cambios en los inputs de edición
  const handleCambioEdicion = (e) => {
    const { name, value } = e.target;
    setDatosEdicion(prev => ({...prev, [name]: value}));
  };

  // Función para eliminar persona (simulado)
  const eliminarPersona = (id) => {
    if (!window.confirm("¿Estás seguro de eliminar esta persona? (simulación)")) return;
    setPersonas(personas.filter(p => p.id !== id));
    toast.success("Persona eliminada (simulación)");
  };

  // Filtrar personas según búsqueda
  const personasFiltradas = personas.filter(persona =>
    persona.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    persona.telefono.includes(busqueda) ||
    persona.correo.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Planes de servicio
  const planes = [
    {
      nombre: "Plan Gratuito",
      precio: "$0",
      caracteristicas: [
        "Notificaciones básicas a 1 familiar",
        "Recordatorio de 1 medicamento",
        "Soporte por correo electrónico",
        "Límite de 3 notificaciones por semana"
      ],
      destacado: false,
      colorBorde: "#1e7a8c"
    },
    {
      nombre: "Plan Premier",
      precio: "$9.99/mes",
      caracteristicas: [
        "Notificaciones a hasta 5 familiares",
        "Recordatorio de medicamentos ilimitados",
        "Soporte prioritario 24/7",
        "Historial completo de tomas",
        "Notificaciones ilimitadas",
        "Integración con dispositivos médicos",
        "Reportes mensuales de salud"
      ],
      destacado: true,
      colorBorde: "#72160D"
    }
  ];

  return (
    <div style={{
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {/* Header */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "30px",
          borderBottom: "2px solid #1e7a8c",
          paddingBottom: "15px"
        }}>
          <h1 style={{ 
            color: "#72160D",
            margin: "0 0 15px 0",
            fontSize: "28px",
            textAlign: "center"
          }}>
            Planes registrados
          </h1>
          
          {/* Barra de búsqueda */}
          
        </div>

        {/* Sección de Planes */}
        <div style={{ 
          marginBottom: "40px",
          padding: "25px",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ 
            color: "#1e7a8c",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "24px"
          }}>
            Elige el Plan que mejor se adapte a tus necesidades
          </h2>
          
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap"
          }}>
            {planes.map((plan, index) => (
              <div key={index} style={{
                border: `3px solid ${plan.colorBorde}`,
                borderRadius: "10px",
                padding: "25px",
                width: "100%",
                maxWidth: "350px",
                backgroundColor: "white",
                position: "relative",
                transform: plan.destacado ? "scale(1.05)" : "none",
                boxShadow: plan.destacado ? "0 5px 15px rgba(0,0,0,0.2)" : "none",
                transition: "transform 0.3s ease"
              }}>
                {plan.destacado && (
                  <div style={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: plan.colorBorde,
                    color: "white",
                    padding: "5px 20px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    fontSize: "14px"
                  }}>
                    RECOMENDADO
                  </div>
                )}
                
                <h3 style={{
                  color: plan.colorBorde,
                  textAlign: "center",
                  fontSize: "22px",
                  marginBottom: "15px"
                }}>
                  {plan.nombre}
                </h3>
                
                <p style={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "25px"
                }}>
                  {plan.precio}
                </p>
                
                <ul style={{
                  listStyleType: "none",
                  padding: 0,
                  marginBottom: "30px"
                }}>
                  {plan.caracteristicas.map((caracteristica, i) => (
                    <li key={i} style={{
                      padding: "10px 0",
                      borderBottom: "1px solid #eee",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <span style={{
                        color: plan.colorBorde,
                        marginRight: "10px",
                        fontSize: "18px"
                      }}>✓</span>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
                
                <button style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: plan.colorBorde,
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                  transition: "all 0.3s",
                  ":hover": {
                    opacity: 0.9,
                    transform: "translateY(-2px)"
                  }
                }}>
                  {plan.nombre === "Plan Gratuito" ? "Usar Gratis" : "Contratar Ahora"}
                </button>
              </div>
            ))}
          </div>
          
          <div style={{
            marginTop: "30px",
            textAlign: "center",
            color: "#666",
            fontSize: "14px"
          }}>
            * Todos los planes incluyen notificaciones cuando el adulto mayor no toma sus medicamentos a tiempo.
          </div>
        </div>

        {/* Lista de personas */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{
            color: "#1e7a8c",
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "24px"
          }}>
            Personas Registradas
          </h2>
          
          {personasFiltradas.length > 0 ? (
            personasFiltradas.map((persona) => (
              <div key={persona.id} style={{
                backgroundColor: "#ffffff",
                border: "1px solid #1e7a8c",
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease",
                ":hover": {
                  transform: "translateY(-3px)"
                }
              }}>
                {/* Foto */}
                <div style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginRight: "25px",
                  border: "3px solid #1e7a8c",
                  flexShrink: 0
                }}>
                  <img 
                    src={persona.foto || "https://via.placeholder.com/90"} 
                    alt={persona.nombre}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>

                {/* Información */}
                <div style={{ 
                  flex: 1,
                  marginRight: "20px"
                }}>
                  {editandoId === persona.id ? (
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px"
                    }}>
                      <input
                        name="nombre"
                        value={datosEdicion.nombre || ""}
                        onChange={handleCambioEdicion}
                        placeholder="Nombre"
                        style={{
                          gridColumn: "span 2",
                          padding: "10px",
                          border: "1px solid #1e7a8c",
                          borderRadius: "5px",
                          fontSize: "16px"
                        }}
                      />
                      <input
                        name="telefono"
                        value={datosEdicion.telefono || ""}
                        onChange={handleCambioEdicion}
                        placeholder="Teléfono"
                        style={{
                          padding: "10px",
                          border: "1px solid #1e7a8c",
                          borderRadius: "5px",
                          fontSize: "16px"
                        }}
                      />
                      <input
                        name="correo"
                        value={datosEdicion.correo || ""}
                        onChange={handleCambioEdicion}
                        placeholder="Correo"
                        style={{
                          padding: "10px",
                          border: "1px solid #1e7a8c",
                          borderRadius: "5px",
                          fontSize: "16px"
                        }}
                      />
                      <input
                        name="direccion"
                        value={datosEdicion.direccion || ""}
                        onChange={handleCambioEdicion}
                        placeholder="Dirección"
                        style={{
                          gridColumn: "span 2",
                          padding: "10px",
                          border: "1px solid #1e7a8c",
                          borderRadius: "5px",
                          fontSize: "16px"
                        }}
                      />
                    </div>
                  ) : (
                    <>
                      <h3 style={{ 
                        color: "#1e7a8c",
                        margin: "0 0 8px 0",
                        fontSize: "20px"
                      }}>
                        {persona.nombre}
                      </h3>
                      <p style={{ margin: "6px 0", color: "#555", fontSize: "16px" }}>
                        <span style={{ color: "#72160D", fontWeight: "bold" }}>Teléfono: </span>
                        {persona.telefono}
                      </p>
                      <p style={{ margin: "6px 0", color: "#555", fontSize: "16px" }}>
                        <span style={{ color: "#72160D", fontWeight: "bold" }}>Correo: </span>
                        {persona.correo}
                      </p>
                      <p style={{ margin: "6px 0", color: "#555", fontSize: "16px" }}>
                        <span style={{ color: "#72160D", fontWeight: "bold" }}>Dirección: </span>
                        {persona.direccion}
                      </p>
                      {persona.ultimaVisita && (
                        <p style={{ margin: "6px 0", color: "#555", fontSize: "16px" }}>
                          <span style={{ color: "#72160D", fontWeight: "bold" }}>Última visita: </span>
                          {persona.ultimaVisita}
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Acciones */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  minWidth: "100px"
                }}>
                  {editandoId === persona.id ? (
                    <>
                      <button
                        onClick={() => guardarEdicion(persona.id)}
                        style={{
                          padding: "10px 15px",
                          backgroundColor: "#1e7a8c",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: "bold",
                          transition: "all 0.2s",
                          ":hover": {
                            opacity: 0.9
                          }
                        }}
                      >
                        Guardar
                      </button>
                      <button
                        onClick={cancelarEdicion}
                        style={{
                          padding: "10px 15px",
                          backgroundColor: "#72160D",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: "bold",
                          transition: "all 0.2s",
                          ":hover": {
                            opacity: 0.9
                          }
                        }}
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => iniciarEdicion(persona)}
                        style={{
                          padding: "10px 15px",
                          backgroundColor: "#1e7a8c",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: "bold",
                          transition: "all 0.2s",
                          ":hover": {
                            opacity: 0.9
                          }
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminarPersona(persona.id)}
                        style={{
                          padding: "10px 15px",
                          backgroundColor: "#72160D",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: "bold",
                          transition: "all 0.2s",
                          ":hover": {
                            opacity: 0.9
                          }
                        }}
                      >
                        Eliminar
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div style={{
              textAlign: "center",
              padding: "30px",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              border: "1px dashed #1e7a8c"
            }}>
              <p style={{ 
                color: "#72160D", 
                fontSize: "18px",
                margin: 0
              }}>
                No hay personas registradas. Agrega algunas para comenzar.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ToastContainer */}
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: "#72160D",
          color: "#ffffff",
          fontSize: "16px"
        }}
      />
    </div>
  );
};

export default ListaPersonas;