const Movie = require('../models').Movie

class MovieController {
    static addMovie(req, res, next) {
        const { title, genre, director, releaseYear } = req.body
        Movie.create({
            title,
            genre,
            director,
            releaseYear,
            userId: req.decoded.id
        })
        .then(movie => {
            res.status(201).json({
                data: movie,
                message: 'Add Movie Success'
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static showAll(req, res, next) {
        Movie.findAll({
            where: {
                userId: req.decoded.id
            }
        })
        .then(movies => {
            res.status(200).json({
                data: movies,
                message: 'Show all movies success'
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static showOne(req, res, next) {
        Movie.findByPk(req.params.id)
        .then(movie => {
            if (!movie) {
                next({
                    name: 'DataNotFound',
                    errors: `Movie with id ${req.params.id} not found`
                })
            } else {
                res.status(200).json({
                    data: movie,
                    message: 'One movie found'
                })
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static editMovie(req, res, next) {
        const { title, genre, director, releaseYear } = req.body
        Movie.update({
            title,
            genre,
            director,
            releaseYear,
        }, {
            where: {
                id: req.params.id
            },
            returning: true,
            plain: true,
        })
        .then(data => {
            if (!data) {
                next({
                    name: 'DataNotFound',
                    errors: `Movie with id ${req.params.id} not found`
                })
            } else {
                res.status(200).json({
                    data,
                    message: 'Movie data has edited successfully'
                })
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static deleteMovie(req, res, next) {
        Movie.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then(data => {
            res.status(200).json({
                data,
                message: 'Movie data has been deleted successfully'
            })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = MovieController