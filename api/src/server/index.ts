// fx
import express from "express";

// app
import clients from "../client";

const port = 8000;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log("Listening on port: " + port);
});

clients(app);
