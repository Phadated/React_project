const express = require("express"); // this will import express module
const app = express(); // generate new application, inside single project we might have several different express application
//  going to use only one app , set up configuration that listen to incoming request
require("./services/passport");
//authRoutes is a function that takes app object and attaches two routes to it
//const authRoutes = require('./routes/authRoutes');

//authRoutes(app);
//(app) second parantheses immediately call the function we required in
require("./routes/authRoutes")(app);

//creating a route handler
//second argument is the arrow function
// app.get("/", (req, res) => {
// 	res.send({ bye: "Buddy" });
// });

// when ever heroku run our app , it has the ability to injectenviroment variable
//enviroment variable are the variable they are set in the under lying runtime that node is running on top of.
//we cant look on heroku hat will be our port ahead of time we need to wait until the very last second
//until our app is starting to be executed by heroku what the port is.
//look at the underlying envinroment variable and see if they have set the port for us
//developemnt enviroment 5000 and production enviroment process.env.port
const PORT = process.env.PORT || 5000; // this should be capitalise.
// this line will instruct express to tell m=node to listen on port 5000
app.listen(PORT); //localhost:5000
