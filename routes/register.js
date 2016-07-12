var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('halo');
});


router.post('/',function (req, res, next) {
    var db = req.db;
    var collection = db.get('userAccounts');
    collection.insert(req.body, function (err) {
        if(err){
            var temp = {
                code : 1,
                message : "NOK"
            };
            res.send(JSON.stringify(temp));
        }else{
            var temp = {
                code : 0,
                message : "OK"
            };
            res.send(JSON.stringify(temp));
        }
    });
})

module.exports = router;
