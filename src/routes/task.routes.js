const {
    Router
} = require('express')
const router = Router()

const {
    getTasks,
    createTask,
    getTask,
    updateTask
} = require('../controllers/TasksController')

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTask)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', )

module.exports = router