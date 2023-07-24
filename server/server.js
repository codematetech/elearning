const express = require("express");
const app = express()
const sequalize = require("./utils/db");
const ErrorHander = require("./Error/ErrorHander");
const User = require("./Models/User");
const dotEnv = require("dotenv")

sequalize.sync().then(() => console.log("db ready"));

// env config

dotEnv.config()
// express json middleware
app.use(express.json()) 
app.use(express.static(__dirname,"static"))
// user route

app.use("/api", require("./Routes/user"))

// article route

// app.use("/api", require("./Routes/article"))

// error handle function

app.use(ErrorHander)

app.listen(5000, () => {
    console.log("server running on port 5000!")
})