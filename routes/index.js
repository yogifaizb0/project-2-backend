const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')
const MovieController = require('../controllers/movie')
const { authentication } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use(authentication)
router.post('/movies', MovieController.addMovie)
router.get('/movies', MovieController.showAll)
router.get('/movies/:id', authorization, MovieController.showOne)
router.put('/movies/:id', authorization, MovieController.editMovie)
router.delete('/movies/:id', authorization, MovieController.deleteMovie)

module.exports = router