const router = require("express").Router()
const sppController = require("../controllers/sppControler")

router.get("/getSppDoc", sppController.getSppDoc)

module.exports = router