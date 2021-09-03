// Write your "actions" router here!
const express = require("express")
const router = express.Router()
const { get, insert, update, remove } = require("./actions-model")
const { validateAction, validateActionId } = require("./actions-middlware")

router.get("/", (req, res, next) => {
    get().then(actions => {
        res.status(200).json(actions)
    }).catch(next)
})

router.get("/:id", validateActionId, (req, res) => {
    res.status(200).json(req.action)
})

router.post("/", validateAction, (req, res, next) => {
    insert(req.body).then(action => {
        res.status(201).json(action)
    }).catch(next)
})

router.put("/:id", validateAction, validateActionId, (req, res, next) => {
    const { params: { id }, body } = req
    update(id, body).then(action => {
        res.status(200).json(action)
    }).catch(next)
})

router.delete("/:id", validateActionId, (req, res, next) => {
    const { params: { id }, action } = req
    remove(id).then(() => {
        res.status(200).json(action)
    }).catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router