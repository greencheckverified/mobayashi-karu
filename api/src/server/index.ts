// fx
import express from "express";

// app
import clients from "../client";

const port = 8000;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET");

  next();
})

app.listen(port, () => {
  console.log("Listening on port: " + port);
});

clients(app);
