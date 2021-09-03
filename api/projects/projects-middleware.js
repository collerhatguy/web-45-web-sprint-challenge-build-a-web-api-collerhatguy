// add middlewares here related to projects
const { get } = require("./projects-model")

const validateProject = (req, res, next) => {
    const { id, name, description } = req.body
    if (!id || !name || !description) next({ status: 400, message: "id, name, and description are requires" })
    req.sentProject = req.body
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