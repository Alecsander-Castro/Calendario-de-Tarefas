const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//Rotas da API

const tasksRoutes = require("./routes/tasksRoutes");
app.use("/tasks", tasksRoutes);

//Inicialiação do Servidor
const DB_USER = process.env.DB_USER;
const DB_PWD = encodeURIComponent(process.env.DB_PWD);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.9pj1177.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Servidor Conectado");
    });
  })
  .catch((err) => {
    console.log(err);
  });
