const express = require("express"),
  contactController = require("../controllers"),
  router = express.Router()

router.get("/list/:query?", contactController.fetchAll)
router.get("/name/:query?", contactController.fetchByName)
router.get("/nationality/:query?", contactController.fetchByNationality)
router.get("/ethnicity/:query?", contactController.fetchByEthnicity)
router.get("/id/:query?", contactController.fetchById)
router.get("/age/:query/:age?", contactController.fetchByAge)
router.get("/born/:query/:year?", contactController.fetchByYear)
router.get("/alive/:query?", contactController.fetchIsAlive)
router.get("/since/:query?", contactController.fetchSince)
router.all("*", (req, res) => res.send("Please look at the the readme file `https://github.com/ahampriyanshu/norm-has-an-api#api-endpoints`"))

module.exports = router
