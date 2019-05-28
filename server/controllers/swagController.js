const swag = require('../models/swag')
module.exports = {
    read: (req, res, next) => {
        console.log('hi')
        res.status(200).send(swag)
    }
}
