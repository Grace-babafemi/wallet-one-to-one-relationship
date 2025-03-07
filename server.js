const express = require("express");
const connected = require("./Config/dataBase");
const walletRouter = require("./Router/walletRouter");
const routers = require("./Router/userRouter");
const app = express();
app.use(express.json())

require("dotenv/config")

const {PORT} = process.env;
const port = PORT
connected()
app.use("/api", routers);
app.use("/api", walletRouter);

app.listen(port, () => {
    console.log(new Date().toLocaleDateString())
})  