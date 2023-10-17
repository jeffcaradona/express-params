const express = require("express");
const app = express();
const port = 3000;

const paramList = ["param1", "param2", "param3"];

paramList.forEach((current, index) => {
  app.param(current, function (req, res, next, value) {    
    console.info(`${current}:`, value);
    next();
  });
});

app.get("/:param1", (req, res, next) => {
  console.dir(app.mountpath + ":param1 " + req.params.param1);
  next();
});

app.get("/", (req, res) => {
  console.dir(app.mountpath);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
