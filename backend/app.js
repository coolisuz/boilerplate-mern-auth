const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/users", userRoutes);

module.exports = app;
