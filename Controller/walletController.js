const userModel = require("../Model/userModel");
const walletModel = require("../Model/walletModel");

const handleError = (res, error) => {
  console.log(error);
  return res
    .status(500)
    .json({ Message: "An Error Occurred", error: error || error.Message });
};

const createUserWallets = async (req, res) => {
  try {
    const { userId, owner, balance, currency } = req.body;
    const getUser = await userModel.findById(userId);
    if (!getUser) {
      return res.status(404).json({ Message: "No user Found" });
    }
    const existingWallet = await walletModel.findOne({user: userId });
    if (existingWallet ) {
      return res.status(400).json({ message: "User already has a wallet" });
    }
    const createWallet = new walletModel({
      owner,
      balance,
      currency,
      user: getUser._id,
    });
    createUserWallets.user = getUser._id;
    createWallet.save();
    getUser.wallet = createWallet._id;
    await getUser.save();
    return res
      .status(200)
      .json({ Message: "Wallet Created SUCCESSFULLY!", data: createWallet });
  } catch (error) {
    handleError(res, error);
  }
};

const getUserWallet = async (req, res) => {
  try {
    const { userId } = req.params;
    const wallet = await walletModel
      .findOne({ userId })
      .populate("wallet");
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }
    return res.status(200).json({Message: "Wallet Gotten SUCCESSFULLY!",date: wallet});
    
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { createUserWallets, getUserWallet };
