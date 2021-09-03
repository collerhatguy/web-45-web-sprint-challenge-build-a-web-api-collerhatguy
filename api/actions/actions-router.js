// Write your "actions" router here!
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    
})

router.get("/:id", (req, res) => {

})

router.post("/", (req, res) => {

})

router.put("/:id", (req, res) => {

})

router.delete("/:id", (req, res) => {

})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router