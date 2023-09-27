const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar JSON en solicitudes POST
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
   host: 'localhost',
   user: 'tu_usuario_mysql',
   password: 'tu_contraseña_mysql',
   database: 'tu_base_de_datos_mysql',
});

// Conectar a MySQL
db.connect((err) => {
   if (err) {
      console.error('Error al conectar a MySQL: ' + err.message);
   } else {
      console.log('Conexión exitosa a MySQL');
   }
});

// Operaciones CRUD para usuarios
app.post('/usuarios', (req, res) => {
   const { nombre, correo, contraseña } = req.body;
   const query = 'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)';
   db.query(query, [nombre, correo, contraseña], (err, result) => {
      if (err) {
         console.error(err);
         res.status(500).json({ error: 'Error al crear el usuario' });
      } else {
         res.json({ mensaje: 'Usuario creado exitosamente' });
      }
   });
});

app.get('/usuarios', (req, res) => {
   const query = 'SELECT * FROM usuarios';
   db.query(query, (err, rows) => {
      if (err) {
         console.error(err);
         res.status(500).json({ error: 'Error al obtener los usuarios' });
      } else {
         res.json(rows);
      }
   });
});

// Implementa aquí las rutas para leer, actualizar y eliminar usuarios

// Iniciar el servidor
app.listen(port, () => {
   console.log(`Servidor escuchando en el puerto ${port}`);
});
