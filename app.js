const express = require("express"); //MVC framework express
const app = express(); //this will creatre server or get a refrences of express and assign to app variable
const port = process.env.PORT || 8080; //if you are deploying to heroku

app.listen(port, () => {
  console.log("app running on port %s", port);
});

//routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
  //res.json("This is my first app, Welcome");
});
app.post("/login", (req, res) => {
  res.end("Login Sucess");
});
