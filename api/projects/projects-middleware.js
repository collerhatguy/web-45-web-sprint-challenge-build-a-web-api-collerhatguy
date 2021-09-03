// add middlewares here related to projects
const { get } = require("./projects-model")

const validateProject = (req, res, next) => {
    const { name, description } = req.body
    if (!name || !description) next({ status: 400, message: "id, name, and description are required" })
    next()
}

const validateProjectId = (req, res, next) => {
    const { id } = req.params
    get(id).then(project => {
        project ?
            req.project = project
            :
            next({ status: 404, message: "no such project exists" })
        next()
    }).catch(next)
}

module.exports = { validateProject, validateProjectId }