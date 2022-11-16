require("dotenv").config();
const path = require("path");
const routes = require("./routes");
const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => app.emit("ready"))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(routes);

app.on("ready",() => {
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000");
    });
});