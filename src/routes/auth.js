const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
router.get("/login",(req,res)=>{
    res.render("login")
})
router.post("/login", authController.login);
router.post("/signup",authController.signup);
router.post("/changepassword",authController.changepassword);
router.post("/logout", authController.logout);

module.exports = router;
