//librerias utilizadas 
const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
//puerto local 
const PORT = 3000;

// Middleware de logs
app.use(morgan('dev'));

// Middleware para mostrar IP y ruta
app.use((req, res, next) => {
  console.log(`Petición desde IP: ${req.ip} - Ruta: ${req.originalUrl}`);
  next();
});

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('Servidor Proxy funcionando. Usa /api/posts para probar.');
});

// Proxy hacia la API externa
app.use('/api', createProxyMiddleware({
  target: 'https://jsonplaceholder.typicode.com',
  changeOrigin: true,
  pathRewrite: { '^/api': '' } // Quita /api antes de enviar
}));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(` Servidor Proxy corriendo en http://localhost:${PORT}`);
});

