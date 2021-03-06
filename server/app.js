const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const CommandRoutes = require("./router/commands");
const AuthRoutes = require("./router/authenticator");
const Perfils = require("./router/perfil");

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-requested-with"
  );
  next();
});

app.use("/api", CommandRoutes);
app.use("/auth", AuthRoutes);
app.use("/perfil", Perfils);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const { message } = error;
  const { data } = error;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    `mongodb://${process.env.MONGODB_ADDR}:${process.env.MONGODB_PORT}/${process.env.MONGODB_BASE}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then((result) => {
    if (result.connection.readyState === 1) {
      console.log(`Connected to Database at ${process.env.MONGODB_PORT}`);
    }
  })
  .catch((err) => console.error(err.message));

module.exports = app;
