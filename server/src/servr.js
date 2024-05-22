require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const { pageNotFound, errorHandler } = require("./middlewares/errorHandler");
const userRouter = require("./routes/customers.routes");
const paymentRouter = require("./routes/payment.routes");
const app = express();

// connect to DB
require("./config");

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(
  cors({
    origin: process.env.NODE_ENV === "production" ? process.env.HOST : "*",
  })
);
app.use(morgan("tiny"));

// routes
app.use("/api/v1/", userRouter);
app.use("/api/v1/", paymentRouter);

// route/page not found handler
app.use(pageNotFound);

// error handler
app.use(errorHandler);

module.exports = app;
