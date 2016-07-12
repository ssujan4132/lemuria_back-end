var express = require('express');
var router = express.Router();

require('../models/error_model');
var code = require('../models/code');

var ResponseModel = require('../models/response_model');
var RegisterRepo = require('../infra/register_repo');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('halo');
});


router.post('/',function (req, res, next) {
    try{
        var params = req.body;
        register_post_validation(params);
        
        var responseModel = new ResponseModel();
        var registerRepo = new RegisterRepo(req.db,req.body);

        registerRepo.registerUser(params);
        responseModel.code = code.REGISTER_OK;
        responseModel.message = code.REGISTER_OK_MSG;
    }catch (error){
        responseModel.code = error.code;
        responseModel.message = error.message;
    }finally {
        res.send(JSON.stringify(responseModel));
    }
});

function register_post_validation(params) {

    if(params.emailAddress == '' || params.emailAddress == undefined || params.emailAddress.trim().length == 0 ){
        throw new AppError(1,'Email Address is required');
    }

    if(params.userName == '' || params.userName == undefined || params.userName.trim().length == 0 ){
        throw new AppError(1,'Username is required');
    }

    if(params.password == '' || params.password == undefined || params.password.trim().length == 0 ){
        throw new AppError(1,'Password is required');
    }
}

module.exports = router;
