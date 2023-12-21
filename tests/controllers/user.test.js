const UserController = require('../../controllers/user')
const User = require('../../models').User

describe('UserController', () => {
    let req = {
        body: {
            email: 'doe@gmail.com',
            password: 'doe123'
        }
    }
    let res = jest.fn()
    let next = jest.fn()

    describe('static register', () => {
        test('controller has static register', () => {
            expect(typeof UserController.register).toBe('function')
        })
        test('static register will call User.create', () => {
            jest.spyOn(User, 'create').mockResolvedValueOnce({})

            UserController.register(req, res, next)
            expect(User.create).toHaveBeenCalled()
        })
    })
    describe('static login', () => {
        test('controller has static login', () => {
            expect(typeof UserController.login).toBe('function')
        })
        test('static create will call User.findOne', () => {
            jest.spyOn(User, 'findOne').mockResolvedValueOnce({})

            UserController.login(req, res, next)
            expect(User.findOne).toHaveBeenCalled()
        })
    })
})