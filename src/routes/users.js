var express = require("express");
var router = express.Router();
var userControllers = require("../controllers/userControllers");
/* GET users listing. */
router.get("/", userControllers.readUser);
router.get("/:id", userControllers.readSingleUser);
router.post("/", userControllers.createUser);
router.put("/", userControllers.updateUser);
router.delete("/", userControllers.deleteUser);

module.exports = router;
