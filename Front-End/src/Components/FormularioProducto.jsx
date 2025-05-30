import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FormularioProducto = () => {
    // Datos de Usuarios con sus planes comprados
    const ventasIniciales = [
        { Id: 1, NombreUsuario: "Admin Principal", Correo: "admin@familia.com", Producto: "Plan Gratuito", Precio: "$0" },
        { Id: 2, NombreUsuario: "Juan Pérez", Correo: "juan@familia.com", Producto: "Plan Premier", Precio: "$9.99/mes" },
        { Id: 3, NombreUsuario: "María García", Correo: "maria@familia.com", Producto: "Plan Gratuito", Precio: "$0" },
        { Id: 4, NombreUsuario: "Carlos López", Correo: "carlos@familia.com", Producto: "Plan Premier", Precio: "$9.99/mes" },
        { Id: 5, NombreUsuario: "Ana Martínez", Correo: "ana@familia.com", Producto: "Plan Gratuito", Precio: "$0" },
        { Id: 6, NombreUsuario: "Luis Rodríguez", Correo: "luis@familia.com", Producto: "Plan Gratuito", Precio: "$0" },
        { Id: 7, NombreUsuario: "Sofía Hernández", Correo: "sofia@familia.com", Producto: "Plan Premier", Precio: "$9.99/mes" },
        { Id: 8, NombreUsuario: "Pedro Gómez", Correo: "pedro@familia.com", Producto: "Plan Gratuito", Precio: "$0" },
        { Id: 9, NombreUsuario: "Laura Díaz", Correo: "laura@familia.com", Producto: "Plan Premier", Precio: "$9.99/mes" },
        { Id: 10, NombreUsuario: "Miguel Ruiz", Correo: "miguel@familia.com", Producto: "Plan Gratuito", Precio: "$0" }
    ];

    const [ventas, setVentas] = useState(ventasIniciales);
    const [filtro, setFiltro] = useState("todos");

    useEffect(() => {
        // Simular carga de datos
        const timer = setTimeout(() => {
            toast.info("Datos de ventas cargados");
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Filtrar ventas según selección
    const ventasFiltradas = ventas.filter(venta => {
        if (filtro === "todos") return true;
        if (filtro === "gratuito") return venta.Producto === "Plan Gratuito";
        if (filtro === "premier") return venta.Producto === "Plan Premier";
        return true;
    });

    // Calcular estadísticas
    const totalVentas = ventas.length;
    const ventasGratuitas = ventas.filter(v => v.Producto === "Plan Gratuito").length;
    const ventasPremier = ventas.filter(v => v.Producto === "Plan Premier").length;
    const ingresosMensuales = ventasPremier * 9.99;

    return (
        <div className="container-fluid py-3" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            <div className="card shadow-lg p-3 p-md-4 mx-1 mx-md-3" style={{ borderColor: "#1e7a8c" }}>
                <h2 className="text-center mb-4" style={{ color: "#72160D" }}>Ventas de Planes</h2>
                
                {/* Estadísticas */}
                <div className="row g-3 mb-4">
                    <div className="col-12 col-sm-4">
                        <div className="card text-white bg-info h-100">
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                                <h5 className="card-title">Total Ventas</h5>
                                <p className="card-text display-6 mb-1">{totalVentas}</p>
                                <small>(100%)</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card text-white bg-success h-100">
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                                <h5 className="card-title">Plan Gratuito</h5>
                                <p className="card-text display-6 mb-1">{ventasGratuitas}</p>
                                <small>({(ventasGratuitas/totalVentas*100).toFixed(1)}%)</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card text-white bg-danger h-100">
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                                <h5 className="card-title">Plan Premier</h5>
                                <p className="card-text display-6 mb-1">{ventasPremier}</p>
                                <small>({(ventasPremier/totalVentas*100).toFixed(1)}%)</small>
                                <small className="mt-1">Ingresos: ${ingresosMensuales.toFixed(2)}</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filtros - Versión responsive */}
                <div className="mb-4">
                    <label className="form-label d-block mb-2">Filtrar por plan:</label>
                    <div className="d-flex flex-wrap gap-2">
                        <button 
                            type="button" 
                            className={`btn flex-grow-1 ${filtro === "todos" ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => setFiltro("todos")}
                        >
                            Todos
                        </button>
                        <button 
                            type="button" 
                            className={`btn flex-grow-1 ${filtro === "gratuito" ? "btn-success" : "btn-outline-success"}`}
                            onClick={() => setFiltro("gratuito")}
                        >
                            Gratuitos
                        </button>
                        <button 
                            type="button" 
                            className={`btn flex-grow-1 ${filtro === "premier" ? "btn-danger" : "btn-outline-danger"}`}
                            onClick={() => setFiltro("premier")}
                        >
                            Premier
                        </button>
                    </div>
                </div>
                
                {/* Tabla de ventas - Versión responsive */}
                <div className="table-responsive">
                    <table className="table table-hover table-striped table-bordered">
                        <thead style={{ backgroundColor: "#1e7a8c", color: "white" }}>
                            <tr>
                                <th className="text-nowrap">ID</th>
                                <th className="text-nowrap">Nombre</th>
                                <th className="d-none d-md-table-cell">Email</th>
                                <th className="text-nowrap">Producto</th>
                                <th className="text-nowrap">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventasFiltradas.map(venta => (
                                <tr key={venta.Id}>
                                    <td>{venta.Id}</td>
                                    <td className="text-nowrap">{venta.NombreUsuario}</td>
                                    <td className="d-none d-md-table-cell">{venta.Correo}</td>
                                    <td>
                                        <span className={`badge ${venta.Producto === "Plan Premier" ? "bg-danger" : "bg-success"}`}>
                                            {venta.Producto}
                                        </span>
                                    </td>
                                    <td className="text-nowrap">
                                        <strong>{venta.Precio}</strong>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Mostrar mensaje si no hay resultados */}
                {ventasFiltradas.length === 0 && (
                    <div className="alert alert-warning text-center my-4">
                        No hay ventas que coincidan con el filtro seleccionado
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormularioProducto;