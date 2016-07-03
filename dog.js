module.exports = function (app,name,type) {
    name = name;
    type = type;

    app.get('/', function (req,res) {
        res.send('Halo World from dogs');
    });

    greet = function () {
        console.log(this.name + ' ' + 'says halo...')
    }

};

// var dog = function (name, type) {
//     this.name = name;
//     this.type = type;
//
//     this.greet = function () {
//         console.log(this.name + ' ' + 'says halo...')
//     }
//
// };
//
// module.exports = dog;

// exports.testing = function () {
//     console.log('fiz!');
// }
