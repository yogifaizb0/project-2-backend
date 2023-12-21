const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const User = require('../models').User

class UserController {
    static register(req, res, next) {
        const { email, password } = req.body
        User.create({
            email,
            password,
        })
        .then(user => {
            res.status(201).json({
                data: {
                    id: user.id,
                    email: user.email,
                },
                message: 'Register success'
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email,
            }
        })
        .then(user => {
            if (user && comparePassword(password, user.password)) {
                let payload = {
                    id: user.id,
                    email: user.email
                }
                let token = generateToken(payload)
                res.status(200).json({
                    data: {
                        id: user.id,
                        email: user.email,
                        token,
                    },
                    message: 'Login success'
                })
            } else {
                next({
                    name: 'InvalidUser', 
                    errors: 'Invalid email / password'})
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController