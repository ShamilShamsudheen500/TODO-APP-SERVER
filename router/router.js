const express = require('express')
const router = new express.Router()

const userController = require('../controllers/userController')
const todoController = require('../controllers/todoController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
 

router.post('/login',userController.logincontroller)
router.post('/register',userController.addUserController)

router.post('/addTodo',todoController.addTodoController)
router.get('/getallTodo',todoController.getTodo)
router.put('/updateTodo/:id',jwtMiddleware,todoController.editTodoController)
router.delete('/deleteTodo/:id',jwtMiddleware, todoController.deleteTodoController)


module.exports = router