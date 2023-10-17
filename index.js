const express = require("express");
const app = express();
const port = 3000;


const paramList = ["param1", "param2", "param3"];
paramList.forEach((current, index) => {
  console.log(`\tCreating ${current}`);
  app.param(current, function (req, res, next, value) {    
    console.info(`\t:${current}:`, value);
    next();
  });
});

app.get("/:param1", (req, res) => {
  console.dir(":param1 " + req.params.param1);
    res.send(`${req.params.param1}`);
});

app.get("/", (req, res) => {

  res.send("Hello World!");

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
