const router = require("express").Router()
const {login, signup, details, viewdetails} = require("../controllers/userController")
router.post("/signup", signup)
router.post("/login", login)
router.post("/details",details)
router.post("/viewdetails",viewdetails)
module.exports = router