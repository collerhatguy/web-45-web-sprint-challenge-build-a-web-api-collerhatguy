// Write your "projects" router here!
const express = require("express")
const router = express.Router()
const { get, insert, update, remove, getProjectActions } = require("./projects-model")
const { validateProjectId, validateProject } = require("./projects-middleware")

router.get("/", (req, res, next) => {
    get().then(projects => {
        res.status(200).json(projects)
    }).catch(next)
})

router.get("/:id", validateProjectId, (req, res) => {
    res.status(200).json(req.project)
})

router.post("/", validateProject, (req, res, next) => {
    insert(req.body).then(project => {
        res.status(201).json(project)
    }).catch(next)
})

router.put("/:id", validateProject, validateProjectId, (req, res, next) => {
    const { params: { id }, body } = req
    if (body.completed === undefined) next({ status: 400, message: "oops" })
    update(id, body).then(updatedProject => {
        res.status(200).json(updatedProject)
    }).catch(next)
})

router.delete("/:id", validateProjectId, (req, res, next) => {
    const { id } = req.params
    remove(id).then(() => {
        res.status(200).json(req.project)
    }).catch(next)
})

router.get("/:id/actions", validateProjectId, (req, res, next) => {
    const { id } = req.params
    getProjectActions(id).then(actions => {
        res.status(200).json(actions)
    }).catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router