const Movie = require('../models').Movie

const authorization = (req, res, next) => {
    try {
        const userId = req.decoded.id
        const movieId = req.params.id

        Movie.findByPk(movieId)
        .then(movie => {
            if(movie.userId == userId) {
                next()
            } else {
                next({
                    name: 'DataNotFound',
                    errors: `Movie with id ${req.params.id} in user id ${req.decoded.id} not found`
                })
            }
        })
        .catch(err => {
            next({
                name: 'DataNotFound',
                errors: `Movie with id ${req.params.id} in user id ${req.decoded.id} not found`
            })
        })
    } catch (err) {
        next({
            name: 'DataNotFound',
            errors: `Movie with id ${req.params.id} in user id ${req.decoded.id} not found`
        })
    }
}

module.exports = { authorization }