const router = require("express").Router()
const {login, signup, details} = require("../controllers/userController")
router.post("/signup", signup)
router.post("/login", login)
router.post("/details",details)
module.exports = router