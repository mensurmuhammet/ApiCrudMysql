
const UserModel = require('../models/user.model');

// get all employee list
exports.getUserList = (req, res)=> {
    //console.log('here all employees list');
    UserModel.getAllUsers((err, users) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users)
    })
}
