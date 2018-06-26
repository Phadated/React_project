const express = require("express"); // this will import express module
const app = express(); // generate new application, inside single project we might have several different express application
//  going to use only one app , set up configuration that listen to incoming request

//creating a route handler
app.get("/", (req, res) => {
	res.send({ hi: "there" });
});

app.listen(5000);
