const express= require('express');
const cors = require('cors');
class Server {

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath='/api/usuarios';

        // Middlewares
        this.middleware();

        //Rutas de mi aplicación

        this.routes();
    }

    middleware(){

        //CORS
        this.app.use(cors());

        //Directorio publico
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }
 
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }
}

module.exports= Server;