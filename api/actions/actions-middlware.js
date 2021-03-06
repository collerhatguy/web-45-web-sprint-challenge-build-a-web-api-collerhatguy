// add middlewares here related to actions
const { get } = require("./actions-model")

const validateAction = (req, res, next) => {
    const { project_id, description, notes } = req.body
    if (!project_id || !description || !notes) next({ status: 400, message: "project id, notes, and description are required" })
    if (description.length > 128) next({ status: 404, message: "description cannot be longer than 128 chars" })
    next()
}

const validateActionId = (req, res, next) => {
    const { id } = req.params
    get(id).then(action => {
        action ?
            req.action = action
            :
            next({ status: 404, message: "no such action exists" })
        next()
    }).catch(next)
}

module.exports = { validateAction, validateActionId }