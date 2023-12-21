const errorHandler = (err, req, res, next) => {
    let status = 500
    let errorObj = {
        error: 'Internal Server Error'
    }
    if(err.name === 'SequelizeValidationError') {
        status = 400
        errorObj.error = 'Bad Request'
        errorObj.msg = err.errors[0].message
    } else if(err.name === 'InvalidUser') {
        status = 400
        errorObj.error = 'Bad Request'
        errorObj.msg = err.errors
    }
    if(err.name === 'AuthenticationRequired') {
        status = 401
        errorObj.error = 'Unauthorized'
        errorObj.msg = err.errors
    }
    if(err.name === 'DataNotFound') {
        status = 404
        errorObj.error = 'Not Found'
        errorObj.msg = err.errors
    }
    res.status(status).json(errorObj)
}

module.exports = { errorHandler }