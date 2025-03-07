const express = require("express");
const { createUser } = require("../Controller/userController");

const routers = express.Router();

routers.post("/create", createUser)


module.exports = routers;