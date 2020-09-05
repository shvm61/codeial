const express = require("express");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/user_controller");

router.get("/sign-up", userController.signUp);
router.post("/create-acc", userController.createAccount);
router.get("/log-in", userController.signIn);
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/log-in" }),
  userController.createSession
);
// router.get("/profile", passport.checkAuthentication, userController.profile);
module.exports = router;
