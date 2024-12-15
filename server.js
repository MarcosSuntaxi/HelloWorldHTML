const http = require('http');
const fs = require('fs');
const path = require('path');

// Crear el servidor
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Lee el archivo HTML y lo envía como respuesta
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error al cargar la página');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
});

// Configura el servidor para escuchar en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor corriendo en http://localhost:8080');
});
