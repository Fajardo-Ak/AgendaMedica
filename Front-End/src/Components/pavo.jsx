import { useState } from 'react';
import { FaCreditCard, FaLock, FaCheck } from 'react-icons/fa';

const MetodoPago = () => {
  const [datosPago, setDatosPago] = useState({
    nombre: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: '',
    tipoTarjeta: 'visa'
  });

  const [paso, setPaso] = useState(1);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosPago(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!datosPago.nombre || !datosPago.numeroTarjeta || !datosPago.fechaExpiracion || !datosPago.cvv) {
      setError('Por favor complete todos los campos');
      return;
    }
    setPaso(2);
    setTimeout(() => setPaso(3), 1500);
  };

  const renderIconoTarjeta = () => {
    const firstDigit = datosPago.numeroTarjeta.charAt(0);
    if (firstDigit === '4') {
      return <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5" />;
    } else if (firstDigit === '5') {
      return <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />;
    }
    return <FaCreditCard className="text-gray-400 text-lg" />;
  };

  if (paso === 2) {
    return (
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow max-w-xs mx-auto">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-3"></div>
        <p className="text-sm text-gray-600">Procesando pago...</p>
      </div>
    );
  }

  if (paso === 3) {
    return (
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow max-w-xs mx-auto">
        <div className="bg-green-100 rounded-full p-3 mb-3">
          <FaCheck className="text-green-500 text-xl" />
        </div>
        <h3 className="font-medium text-gray-800 mb-1">¡Pago exitoso!</h3>
        <p className="text-xs text-gray-500 text-center">Se ha procesado tu pago de $9.99 USD</p>
      </div>
    );
  }

  return (
    <div className="max-w-xs mx-auto p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Pago</h3>
        <div className="flex items-center">
          <FaLock className="text-green-500 text-xs mr-1" />
          <span className="text-xs text-gray-500">Seguro</span>
        </div>
      </div>

      {error && <p className="text-red-500 text-xs mb-2">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-xs text-gray-600 mb-1">Nombre en tarjeta</label>
          <input
            type="text"
            name="nombre"
            value={datosPago.nombre}
            onChange={handleChange}
            className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
          />
        </div>

        <div className="mb-3">
          <label className="block text-xs text-gray-600 mb-1">Número de tarjeta</label>
          <div className="flex items-center border border-gray-300 rounded px-2">
            {renderIconoTarjeta()}
            <input
              type="text"
              name="numeroTarjeta"
              value={datosPago.numeroTarjeta}
              onChange={handleChange}
              className="w-full py-1 text-sm ml-2 border-none focus:ring-0"
              placeholder="1234 5678 9012 3456"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Expiración</label>
            <input
              type="month"
              name="fechaExpiracion"
              value={datosPago.fechaExpiracion}
              onChange={handleChange}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">CVV</label>
            <input
              type="text"
              name="cvv"
              value={datosPago.cvv}
              onChange={handleChange}
              maxLength="3"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
              placeholder="123"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm flex items-center justify-center"
        >
          <FaLock className="mr-1 text-xs" />
          Pagar $9.99
        </button>
      </form>
    </div>
  );
};

export default MetodoPago;