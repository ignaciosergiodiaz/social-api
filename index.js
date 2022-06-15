'use strict'

const mongoose  = require('mongoose'),
           app  = require('./app'),
          port  = 3800 ; 


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/curso_mean_social', {useNewUrlParser:true, useUnifiedTopology: true} )
    .then(()=>{
        console.log("La conexión se ha realizado correctamente")

        //Crear servidor 
        
        app.listen(port, () => {  
            console.log("Servidor corriendo en http://localhost:3800");
        });

    })

    .catch(err => console.log(err));