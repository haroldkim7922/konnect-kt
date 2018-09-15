const express = require("express");
const routes = require("./app/routes");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const port = process.env.PORT || 8080; // DO NOT REMOVE THIS LINE!!!

app.use(routes);

app.use((req, res) => {
  res.status(404).send("<h2>The path is not valid</h2>");
});

app.listen(port, function() {
  console.log("Server is running on port:" + port);
});
