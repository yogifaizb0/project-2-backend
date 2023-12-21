const { authorization } = require('../../middlewares/authorization')
const Movie = require('../../models').Movie

describe('Authorization', () => {
    test('authorization is a function', () => {
        expect(typeof authorization).toBe('function')
    })
    test('authorization call Movie.finByPk', () => {
        let req = {
            params: {
                id: '1'
            },
            decoded: {
                id: '2'
            }
        }
        let res = jest.fn()
        let next = jest.fn()

        jest.spyOn(Movie, 'findByPk').mockResolvedValueOnce({})

        authorization(req, res, next)
        expect(Movie.findByPk).toHaveBeenCalled()
    })
})