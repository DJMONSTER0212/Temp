const express = require("express")
const { createResult, getResult } = require("../controllers/resultController")
const router = express.Router()

router.post('/create',createResult)
router.get('/:userId',getResult)

module.exports = router