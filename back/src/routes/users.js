const mysql = require('mysql')

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'usuarios',
    user: 'root',
    password: 'gabriel_16'
});
user = {id: '', name: '',  email: '', role: {id: 1, name: '', code: ''}};
arreglo = [];
const router = require('express').Router();
conexion.connect();
 



router.route('/').get((req,res) =>{
    msg = 'Obteniendo todos los usuarios..';     
    conexion.query('SELECT t1.id AS `idUser`, t1.name AS `nameUser`, t1.email AS `emailUser`, t2.id, t2.name AS `nameRol`, t2.code  FROM users t1, roles t2 WHERE  t1.code = t2.id ORDER BY t1.id',
    function(error,results,fields){
        if(error)
            throw error;
        console.log(results);
                  
        results.forEach(element => {            
            user.id = element.idUser;
            user.name = element.nameUser;
            user.email = element.emailUser;
            user.role.id = element.id;
            user.role.name = element.nameRol;
            user.role.code = element.code;
            arreglo.push(user);
            
        });
        res.json(arreglo);
        
    })    
});

router.route('/:id').get((req,res) =>{   
   
    conexion.query('SELECT t1.id as `idUser`, t1.name as `nameUser`, t1.email as `emailUser`, t2.id, t2.name as `nameRol`, t2.code  FROM users t1, roles t2 WHERE  t1.id = ? and t1.code = t2.id', [req.params.id],
    function(error,results,fields){
        if(error) 
            throw error;
        

        results.forEach(element => {
            user.id = element.idUser;
            user.name = element.nameUser;
            user.email = element.emailUser;
            user.role.id = element.id;
            user.role.name = element.nameRol;
            user.role.code = element.code;

            console.log(user);
            
        });
           
         res.json(user);

        
    });
   
});

module.exports = router;