var express = require("express");
var router = express.Router();
var userControllers = require("../controllers/userController");
var adminCheck=require("../middlewares/adminCheck")

router.use(adminCheck)
/* GET users listing. */
router.post("/", userControllers.createUser);
router.get("/", userControllers.readUser);
router.get("/:id", userControllers.readUserById);
router.put("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);
router.post("/:email", userControllers.readUserByEmail);

module.exports = router;
