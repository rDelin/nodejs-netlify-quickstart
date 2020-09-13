const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("It's working");
});

router.post('/test', (req, res) => {
    res.send("Post is also working");
});

module.exports = router;