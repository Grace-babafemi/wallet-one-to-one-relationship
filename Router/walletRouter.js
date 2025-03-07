const express = require("express");
const { createUserWallets } = require("../Controller/walletController");

const walletRouter = express.Router();

walletRouter.post("/", createUserWallets)
walletRouter.get("/:id/wallet/:id", createUserWallets)


module.exports = walletRouter