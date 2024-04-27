const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controllers/main");
const authMiddleware = require("../middlewares/auth");

router.route("/login").post(login);
router.route("/dashboard").get(authMiddleware, dashboard);

module.exports = router;
