// Write your "actions" router here!
const express = require("express")
const router = express.Router()
const { get } = require("./actions-model")

router.get("/", (req, res, next) => {
    get().then(actions => {
        res.status(200).json(actions)
    }).catch(next)
})

router.get("/:id", (req, res, next) => {
    const { id } = req.params
    get(id).then(action => {
        res.status(200).json(action)
    }).catch(next)
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