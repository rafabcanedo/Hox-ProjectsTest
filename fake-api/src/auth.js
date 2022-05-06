const jwt = require('jsonwebtoken');
const { promisify } = require('util');

// authMiddleware valida se tem auth em nossa requisição
async function validate(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.sendStatus(401);
    }

    const [, token] = authorization.split(' ');

    // aqui tem um recap pra ver se o token é valido
    try {
        await promisify(jwt.verify)(token, 'PRIVATEKEY');

        return next();
    } catch (err) {
        return res.sendStatus(401);
    }
}

module.exports = validate;