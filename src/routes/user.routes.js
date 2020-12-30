const { createUser } = require("../controllers/User/user.controller");

const usersRoute = require("express").Router();


usersRoute.post("/create-user", createUser)


module.exports = usersRoute;