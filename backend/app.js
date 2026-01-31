require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const port = 3001;
const app = express();

app.use(express.static("../blog/dist"));

app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

mongoose
  .connect("mongodb://user:mongopass@localhost:27017/blog_db?authSource=admin")
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  });
