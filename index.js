const express = require ('express');


//Create Express
const app = express();

const port = process.env.PORT ||5000;



const userRoutes=require('./src/routes/user.route');

app.use('/api/v1/user', userRoutes);

app.get('/',(req,res)=>{

    res.send('Hello World');

});



app.listen(port, ()=>{

    console.log('Server running port');
})
