const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  owner: { type: String, required: true },
  balance: {type: Number, required: true },
  currency: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = walletModel = mongoose.model("wallet", walletSchema);
