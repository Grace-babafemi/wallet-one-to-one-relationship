const express = require("express");
const userModel = require("../Model/userModel");

const handleError = (res, error) => {
  console.log(error);
  return res
    .status(500)
    .json({ Message: "An Error Occurred", error: error || error.Message });
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkIfUserExist = await userModel.findOne({ email });
    if (checkIfUserExist) {
      return res.status(400).json({ Message: "User Already Exist" });
    }

    const newUser = await userModel.create({
      name,
      email,
      password,
    });
    return res.status(200).json({ newUser });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { createUser };
