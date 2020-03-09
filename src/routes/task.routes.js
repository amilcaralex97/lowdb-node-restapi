const {
    Router
} = require('express')
const router = Router()

const {
    getTasks,
    createTask
} = require('../controllers/TasksController')

router.get('/tasks', getTasks)
router.get('/tasks/:id', )
router.post('/tasks', createTask)
router.put('/tasks/:id', )
router.delete('/tasks/:id', )

module.exports = router