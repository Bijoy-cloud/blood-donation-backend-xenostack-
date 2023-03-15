const express = require('express')
const router = express.Router();
const donorApi = require('../controller/donorController')
const {register,login} = require('../authentication/auth');
const verifyToken = require('../utilis/verifyToken');
const contact = require("../controller/contactusController")
router.post("/registerDonor",verifyToken, donorApi.create)
router.get("/findDonor",donorApi.findDonor)
router.post("/contact-us",contact.contactus)
router.post("/register",register)
router.post("/login",login)
module.exports = router; 