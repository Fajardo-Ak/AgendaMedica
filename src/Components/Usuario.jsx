import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Usuario = () => {
    // Datos falsos iniciales
    const usuariosFalsos = [
        { Id: 1, NombreUsuario: "Admin1", Correo: "admin1@gmail.com", Rol: "Administrador", Contrasena: "admin123" },
        { Id: 2, NombreUsuario: "Admin2", Correo: "admin2@gmail.com", Rol: "Programador", Contrasena: "admin123" },
        { Id: 3, NombreUsuario: "Admin3", Correo: "admin3@gmail.com", Rol: "Supervisor", Contrasena: "admin123" },
        { Id: 4, NombreUsuario: "Admin4", Correo: "admin4@gmail.com", Rol: "Administrador", Contrasena: "admin123" },
        { Id: 5, NombreUsuario: "Admin5", Correo: "admin5@gmail.com", Rol: "Programador", Contrasena: "admin123" }
    ];

    const [usuarios, setUsuarios] = useState(usuariosFalsos);
    const [editando, setEditando] = useState(null);
    const [usuarioEditado, setUsuarioEditado] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [contrasenaActual, setContrasenaActual] = useState("");
    const [nuevaContrasena, setNuevaContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const [errorContrasena, setErrorContrasena] = useState("");

    useEffect(() => {
        // Simular carga de datos
        const timer = setTimeout(() => {
            toast.info("Datos de demostración cargados");
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const eliminarUsuario = (Id) => {
        if (!window.confirm("¿Estás seguro de eliminar este usuario? (Acción simulada)")) return;
        
        setUsuarios(usuarios.filter(usuario => usuario.Id !== Id));
        toast.success("Usuario eliminado (simulado)");
    };

    const abrirModalEdicion = (usuario) => {
        setEditando(usuario.Id);
        setUsuarioEditado({...usuario});
        setContrasenaActual("");
        setNuevaContrasena("");
        setConfirmarContrasena("");
        setErrorContrasena("");
        setShowModal(true);
    };

    const guardarEdicion = () => {
        // Verificar contraseña actual si se está cambiando la contraseña
        if (nuevaContrasena && contrasenaActual !== usuarioEditado.Contrasena) {
            setErrorContrasena("La contraseña actual no coincide");
            return;
        }
        
        // Verificar que las nuevas contraseñas coincidan
        if (nuevaContrasena && nuevaContrasena !== confirmarContrasena) {
            setErrorContrasena("Las nuevas contraseñas no coinciden");
            return;
        }
        
        // Actualizar contraseña si se proporcionó una nueva
        const usuarioActualizado = {
            ...usuarioEditado,
            Contrasena: nuevaContrasena || usuarioEditado.Contrasena
        };
        
        setUsuarios(usuarios.map(u => u.Id === editando ? usuarioActualizado : u));
        setShowModal(false);
        setEditando(null);
        toast.success("Cambios guardados (simulados)");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuarioEditado(prev => ({...prev, [name]: value }));
    };

    const cerrarModal = () => {
        setShowModal(false);
        setEditando(null);
    };

    return (
        <div className="container-fluid py-3 px-2 px-md-4" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            <div className="card shadow-lg p-3 p-md-4" style={{ borderColor: "#1e7a8c" }}>
                <h2 className="text-center mb-4" style={{ color: "#72160D" }}>Administradores</h2>
                
                {/* Versión móvil - Cards */}
                <div className="d-block d-md-none">
                    {usuarios.map(usuario => (
                        <div key={usuario.Id} className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <div>
                                        <h5 className="card-title mb-0">{usuario.NombreUsuario}</h5>
                                        <small className="text-muted">ID: {usuario.Id}</small>
                                    </div>
                                    <span className={`badge bg-primary`}>
                                        {usuario.Rol}
                                    </span>
                                </div>
                                
                                <p className="card-text mb-1">
                                    <strong>Email:</strong> {usuario.Correo}
                                </p>
                                
                                <div className="d-flex justify-content-end gap-2">
                                    <button
                                        className="btn btn-sm"
                                        style={{ backgroundColor: "#1e7a8c", color: "white" }}
                                        onClick={() => abrirModalEdicion(usuario)}
                                    >
                                        ✏️ Editar
                                    </button>
                                    <button
                                        className="btn btn-sm"
                                        style={{ backgroundColor: "#72160D", color: "white" }}
                                        onClick={() => eliminarUsuario(usuario.Id)}
                                    >
                                        🗑️ Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Versión desktop - Tabla */}
                <div className="d-none d-md-block">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead style={{ backgroundColor: "#1e7a8c", color: "white" }}>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                    <th className="text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map(usuario => (
                                    <tr key={usuario.Id}>
                                        <td>{usuario.Id}</td>
                                        <td>
                                            <div>
                                                <strong>{usuario.NombreUsuario}</strong>
                                            </div>
                                        </td>
                                        <td>{usuario.Correo}</td>
                                        <td>{usuario.Rol}</td>
                                        <td className="text-center">
                                            <div className="d-flex justify-content-center gap-2">
                                                <button
                                                    className="btn btn-sm"
                                                    style={{ backgroundColor: "#1e7a8c", color: "white" }}
                                                    onClick={() => abrirModalEdicion(usuario)}
                                                >
                                                    ✏️ Editar
                                                </button>
                                                <button
                                                    className="btn btn-sm"
                                                    style={{ backgroundColor: "#72160D", color: "white" }}
                                                    onClick={() => eliminarUsuario(usuario.Id)}
                                                >
                                                    🗑️ Eliminar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal de edición */}
            <Modal show={showModal} onHide={cerrarModal} size="lg">
                <Modal.Header closeButton style={{ backgroundColor: "#1e7a8c", color: "white" }}>
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre de Usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="NombreUsuario"
                                        value={usuarioEditado.NombreUsuario || ''}
                                        onChange={handleChange}
                                        style={{ borderColor: "#1e7a8c" }}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="Correo"
                                        value={usuarioEditado.Correo || ''}
                                        onChange={handleChange}
                                        style={{ borderColor: "#1e7a8c" }}
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Rol</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="Rol"
                                        value={usuarioEditado.Rol || ''}
                                        onChange={handleChange}
                                        style={{ borderColor: "#1e7a8c" }}
                                    >
                                        <option value="Administrador">Administrador</option>
                                        <option value="Verificador">Verificador</option>
                                        <option value="Programador">Programador</option>     
                                        <option value="Supervisor">Supervisor</option>                             
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </div>

                        <hr />

                        <h5>Cambio de Contraseña</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Contraseña Actual</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={contrasenaActual}
                                        onChange={(e) => setContrasenaActual(e.target.value)}
                                        style={{ borderColor: "#1e7a8c" }}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Nueva Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={nuevaContrasena}
                                        onChange={(e) => setNuevaContrasena(e.target.value)}
                                        style={{ borderColor: "#1e7a8c" }}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Confirmar Nueva Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={confirmarContrasena}
                                        onChange={(e) => setConfirmarContrasena(e.target.value)}
                                        style={{ borderColor: "#1e7a8c" }}
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        {errorContrasena && (
                            <div className="alert alert-danger">{errorContrasena}</div>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarModal}>
                        Cancelar
                    </Button>
                    <Button 
                        variant="primary" 
                        style={{ backgroundColor: "#1e7a8c", borderColor: "#1e7a8c" }}
                        onClick={guardarEdicion}
                    >
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Usuario;