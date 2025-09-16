// prueba.js
const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// Middleware para logs
app.use(morgan("dev"));

// Función para simular IP real del cliente
function generarIpCliente() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

// Servidor final
app.get("/servidor", (req, res) => {
  res.send("📡 Respuesta del Servidor Final");
});

// Proxy
app.get("/proxy", (req, res) => {
  const ipCliente = generarIpCliente();     // Simulamos la IP real
  const ipProxy = "192.168.100.1";          // IP fija del proxy

  console.log(`🌐 Cliente con IP real ${ipCliente} fue redirigido por Proxy con IP ${ipProxy}`);

  // Redirigir al servidor final
  res.redirect("/servidor");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Proxy corriendo en http://localhost:${PORT}`);
});

