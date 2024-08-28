const express = require('express');
const router = express.Router();

router.post('/main', (req, res) => {
    return res.status(200).json({
        error: false,
        message: 'Olá, página principal!'
    })
})

module.exports = router;