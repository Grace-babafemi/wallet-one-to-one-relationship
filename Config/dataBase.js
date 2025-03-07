const { connect } = require("mongoose");

require("dotenv/config")

const {MONGODB_URL} = process.env;

const connected = async () => {
    console.log("Connected SUCCESSFULLY!")
    try {
        await
        connect(MONGODB_URL)
    } catch (error) {
        console.log("Connection Failed!")
    }
}


module.exports = connected;