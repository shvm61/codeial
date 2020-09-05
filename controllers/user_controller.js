const Users = require("../models/user");
const print = require("./error_controller");

module.exports.signUp = function (req, res) {
  res.render("sign_up", { title: "Sign-UP" });
};
module.exports.createAccount = async function (req, res) {
  try {
    await Users.create(req.body);
    return res.redirect("/");
  } catch (error) {
    return print("Error in signup", "error", error);
  }
};

module.exports.signIn = function (req, res) {
  return res.render("sign_in");
};

module.exports.createSession = function (req, res) {
  return res.redirect("/users/profile");
};
