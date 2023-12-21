const MovieController = require('../../controllers/movie')
const Movie = require('../../models').Movie

describe('MovieController', () => {
    let req = {
        decoded: {
            id: 1
        }
    }
    let res = jest.fn()
    let next = jest.fn()
    describe('static addMovie', () => {
        test('controller has static addMovie', () => {
            expect(typeof MovieController.addMovie).toBe('function')
        })
        test('static addMovie will call Movie.create', () => {
            req.body = {
                title: 'test',
                genre: 'test',
                director: 'test',
                releaseYear: 2023,
                userId: 1,
            }
            jest.spyOn(Movie, 'create').mockResolvedValueOnce({})
            MovieController.addMovie(req, res, next)
            expect(Movie.create).toHaveBeenCalled()
        })
    })
    describe('static showAll', () => {
        test('controller has static showAll', () => {
            expect(typeof MovieController.showAll).toBe('function')
        })
        test('static showAll will call Movie.findAll', () => {
            jest.spyOn(Movie, 'findAll').mockResolvedValueOnce({})

            MovieController.showAll(req, res, next)
            expect(Movie.findAll).toHaveBeenCalled()
        })
    })
    describe('static showOne', () => {
        test('controller has static showOne', () => {
            expect(typeof MovieController.showOne).toBe('function')
        })
        test('static showOne will call Movie.findByPk', () => {
            req.params = {
                id: 1
            }
            jest.spyOn(Movie, 'findByPk').mockResolvedValueOnce({})

            MovieController.showOne(req, res, next)
            expect(Movie.findByPk).toHaveBeenCalled()
        })
    })
    describe('static editMovie', () => {
        test('controller has static editMovie', () => {
            expect(typeof MovieController.editMovie).toBe('function')
        })
        test('static editMovie will call Movie.update', () => {
            req.params = {
                id: 1
            }
            jest.spyOn(Movie, 'update').mockResolvedValueOnce({})

            MovieController.editMovie(req, res, next)
            expect(Movie.update).toHaveBeenCalled()
        })
    })
    describe('static deleteMovie', () => {
        test('controller has static deleteMovie', () => {
            expect(typeof MovieController.deleteMovie).toBe('function')
        })
        test('static deleteMovie will call Movie.destroy', () => {
            req.params = {
                id: 1
            }
            jest.spyOn(Movie, 'destroy').mockResolvedValueOnce({})

            MovieController.deleteMovie(req, res, next)
            expect(Movie.destroy).toHaveBeenCalled()
        })
    })
})