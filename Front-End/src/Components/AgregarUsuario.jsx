import { useState } from 'react';
import { 
  Chart as ChartJS, 
  ArcElement, 
  BarElement, 
  CategoryScale, 
  LinearScale, 
  Tooltip, 
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { Pie, Bar, Line, Doughnut } from 'react-chartjs-2';

// Registrar componentes de ChartJS
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const AgregarUsuario = () => {
  // Datos de ventas
  const ventas = [
    { Id: 1, NombreUsuario: "Admin Principal", Correo: "admin@familia.com", Producto: "Plan Gratuito", Precio: 0 },
    { Id: 2, NombreUsuario: "Juan Pérez", Correo: "juan@familia.com", Producto: "Plan Premier", Precio: 9.99 },
    { Id: 3, NombreUsuario: "María García", Correo: "maria@familia.com", Producto: "Plan Gratuito", Precio: 0 },
    { Id: 4, NombreUsuario: "Carlos López", Correo: "carlos@familia.com", Producto: "Plan Premier", Precio: 9.99 },
    { Id: 5, NombreUsuario: "Ana Martínez", Correo: "ana@familia.com", Producto: "Plan Gratuito", Precio: 0 },
    { Id: 6, NombreUsuario: "Luis Rodríguez", Correo: "luis@familia.com", Producto: "Plan Gratuito", Precio: 0 },
    { Id: 7, NombreUsuario: "Sofía Hernández", Correo: "sofia@familia.com", Producto: "Plan Premier", Precio: 9.99 },
    { Id: 8, NombreUsuario: "Pedro Gómez", Correo: "pedro@familia.com", Producto: "Plan Gratuito", Precio: 0 },
    { Id: 9, NombreUsuario: "Laura Díaz", Correo: "laura@familia.com", Producto: "Plan Premier", Precio: 9.99 },
    { Id: 10, NombreUsuario: "Miguel Ruiz", Correo: "miguel@familia.com", Producto: "Plan Gratuito", Precio: 0 }
  ];

  const [filtro, setFiltro] = useState("todos");

  // Filtrar ventas
  const ventasFiltradas = ventas.filter(venta => {
    if (filtro === "todos") return true;
    return venta.Producto === `Plan ${filtro === "gratuito" ? "Gratuito" : "Premier"}`;
  });

  // Calcular estadísticas
  const totalVentas = ventas.length;
  const ventasGratuitas = ventas.filter(v => v.Producto === "Plan Gratuito").length;
  const ventasPremier = ventas.filter(v => v.Producto === "Plan Premier").length;
  const ingresosMensuales = ventasPremier * 9.99;

  // Datos para gráficas
  const dataPie = {
    labels: ['Plan Gratuito', 'Plan Premier'],
    datasets: [{
      data: [ventasGratuitas, ventasPremier],
      backgroundColor: ['#4BC0C0', '#FF6384'],
      hoverBackgroundColor: ['#36A2EB', '#FFCE56']
    }]
  };

  const dataBar = {
    labels: ventas.map(v => v.NombreUsuario.split(' ')[0]),
    datasets: [
      {
        label: 'Monto ($)',
        data: ventas.map(v => v.Precio),
        backgroundColor: ventas.map(v => v.Precio > 0 ? '#FF6384' : '#4BC0C0'),
        borderColor: ventas.map(v => v.Precio > 0 ? '#FF6384' : '#4BC0C0'),
        borderWidth: 1
      }
    ]
  };

  const dataLine = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Plan Gratuito',
        data: [3, 2, 4, 2, 1],
        borderColor: '#4BC0C0',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3
      },
      {
        label: 'Plan Premier',
        data: [1, 3, 2, 4, 2],
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permite que los gráficos se ajusten al contenedor
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) label += ': ';
            if (context.parsed.y !== null) {
              label += context.parsed.y > 0 ? `$${context.parsed.y}` : context.parsed.y;
            }
            return label;
          }
        }
      }
    }
  };

  return (
    <div className="container-fluid py-3 px-2 px-md-4" style={{ minHeight: '100vh' }}>
      <h2 className="text-center mb-4">Dashboard de Ventas</h2>
      
      {/* Resumen Estadístico */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="card text-white bg-info h-100">
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <h5 className="card-title">Total Ventas</h5>
              <p className="card-text display-6 mb-1">{totalVentas}</p>
              <small>(100%)</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card text-white bg-success h-100">
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <h5 className="card-title">Plan Gratuito</h5>
              <p className="card-text display-6 mb-1">{ventasGratuitas}</p>
              <small>({(ventasGratuitas/totalVentas*100).toFixed(1)}%)</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
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

      {/* Gráficas */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Distribución de Planes</h5>
            </div>
            <div className="card-body" style={{ height: '300px' }}>
              <Doughnut data={dataPie} options={options} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Ventas por Usuario</h5>
            </div>
            <div className="card-body" style={{ height: '300px' }}>
              <Bar data={dataBar} options={options} />
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Tendencia de Ventas (Últimos 5 meses)</h5>
            </div>
            <div className="card-body" style={{ height: '300px' }}>
              <Line data={dataLine} options={options} />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AgregarUsuario;