// add middlewares here related to actions

const validateAction = (req, res, next) => {
    const { project_id, description, notes } = req.body
    if (!project_id || !description || !notes) next({ status: 400, message: "project id, notes, and description are required" })
    if (description.length <= 128) next({ status: 404, message: "description cannot be longer than 128 chars" })
    req.action = req.body
    next()
}