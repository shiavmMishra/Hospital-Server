// using express as the framework
const express=require('express'); 
const app = express();
const port = 8000;
const db = require('./config/mongoose');

// using passport to authentication 
const passport = require('passport');

// using passport-jwt for api authentication
const passportJwt = require('./config/passport-jwt-strategy');

// middleware parser to get the form values as the body object in request 
app.use(express.urlencoded());

// using express router
app.use('/',require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});