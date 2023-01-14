const express = require('express');
const cors = require('cors');

class Server{
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Middlewares
        this.middlewares();
        // Rutas App
        this.routes();
    }


    middlewares() {
        
        // CORS
        this.app.use(cors());
        // Lectura y paseo del Body
        this.app.use(express.json());
        // Directorio Publico
        this.app.use(express.static('public'));
    }

    routes () {
        
        this.app.use(this.usersPath, require('../routes/user.route'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;