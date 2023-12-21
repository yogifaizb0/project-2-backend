const jwt = require('../helpers/jwt')

const authentication = (req, res, next) => {
    try {
        let token = req.headers.token
        let decoded = jwt.verifyToken(token)
        req.decoded = decoded
        next()
    } catch (err) {
        next({
            name: "AuthenticationRequired",
            errors: `You must login first`
        })
    }
}

module.exports = { authentication }