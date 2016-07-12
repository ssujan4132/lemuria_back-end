require('../models/code');
require('../models/error_model');

var RegisterRepo = function (db) {

    this.registerUser = function (params) {
        var collection = db.get('userAccounts');
        collection.insert(params, function (err) {
            if(err){
                throw new AppError(REGISTER_INSERT_ERR,REGISTER_INSERT_ERR_MSG)
            }
        });
    }
};

module.exports = RegisterRepo;