import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Silksong para GOTY");
});

app.listen(8080);
