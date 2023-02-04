const boom = require('@hapi/boom');

function validatorHandler (shcema, property) {
    // return a middleware, this is a use case of Closure
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data);
        if (error) {
            next(boom.badRequest(error));
        }
        next();
    };
}

module.exports = validatorHandler;