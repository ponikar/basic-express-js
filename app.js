const express = require("express");
const bodyParser = require("body-parser");
const commonRoutes = require("./src/routes/common.routes");
const mongo = require("mongoose");
const usersRoute = require("./src/routes/user.routes");
const app = express();
const PORT =  process.env.PORT || 7002;

app.use(bodyParser.json());

// prefix and add diffrent routes

app.use("/api", commonRoutes);
app.use("/api", usersRoute);

mongo.connect("mongodb://localhost:27017/common", {  useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true })
        .then(res => console.log("DB connect succesfully"))
        .catch(err => console.log("Can't connect to DB", err));
app.listen(PORT, () => { 
    console.log("Server connected");
});
