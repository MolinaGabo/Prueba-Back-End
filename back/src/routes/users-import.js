const router = require('express').Router();
const readline = require('readline');
const fs = require('fs');
var validator = require("email-validator");
 


router.route('/').post((req, res) => {
    msg = 'Guardando usuarios';
    console.log('Contenido del archivo...');
   
   
    var file = req.files;
    var rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });
    
    rl.on('line', function (line) {
        console.log(line) // print the content of the line on each linebreak
        //Condiciones a evaluar por columna

        if(line.length >=  50){
            //Nombre incorrecto
        } else {
            //Nombre correcto
        }

        if(validator.validate(line.sub()) &&  line.length <= 50){
            //email correcto   
        } else {

            //email incorrecto
        }
    });       

   
});

module.exports = router;


