var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('halo');
});


router.post('/',function (req, res, next) {
    console.log(req.body);
    res.send('testing...');
})

module.exports = router;
