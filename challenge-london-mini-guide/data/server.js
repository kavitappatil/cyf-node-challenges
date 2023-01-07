const express = require("express");
const app = express();
const port = 3000;
const data = require("./Stratford.json");
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    "/pharmcies": "retruns an array of pharmacies in a specific area",
  });
});

app.get("/pharmcies", (req, res) => {
  res.send(data.pharmacies);
});
app.get("/colleges", (req, res) => {
  res.send(data.colleges);
});
app.listen(port, () => {
  console.log("port");
});
