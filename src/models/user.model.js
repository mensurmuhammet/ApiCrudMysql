  
var dbConn  = require('../../config/db.config');

var User = function(user){
    this.id             =   user.id;
    this.firstName      =   user.firstName;
    this.lastName       =   user.lastName;
    this.birthday       =   user.birthday;
    this.balance        =   user.balance;
    this.email          =   user.email;

}

// get all employees
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM users ', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}

module.exports =User;



