const express= require('express');

class Server {

    constructor(){
        this.app=express();
        this.port=process.env.PORT;

        // Middlewares
        this.middleware();

        //Rutas de mi aplicación

        this.routes();
    }

    middleware(){
        //Directorio publico
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.get('/',(req,res)=>{
            res.send('Hola mundo')
        })
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }
}

module.exports= Server;