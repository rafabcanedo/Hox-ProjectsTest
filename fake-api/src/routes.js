const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = require('./auth');

const router = express.Router();

router.post('/authenticate', (req, res) => {
    const user = {
     "id": 1,
     "email": "rafacanedocontato@gmail.com",
     "senha": 12345
    };

    return res.json({
        user,
        token: jwt.sign(user, 'PRIVATEKEY'),
    });
});


//////// PRIVATE ROUTE ////////

// rota protegida por authMiddleware
router.use(authMiddleware);

router.get('/users', async (req, res) => {
    return res.json([
        {
            "id": 1,
            "email": "rafacanedocontato@gmail.com",
            "senha": 12345
        },
        {
            "id": 2,
            "email": "rafacanedocontato.sp@gmail.com",
            "senha": 123
        },
    ]);
});

module.exports = router;