
/**
 * Module dependencies.
 */

var bodyParser = require('body-parser');
module.exports = function (app) {

    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(function (error, req, res, next) {
        if (error instanceof SyntaxError) {
            //Catch json error
            res.status(400).send({
                err: true,
                error: "Invalid JSON"
            });
        } else {
            next();
        }
    });
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Authorization, Accept');
        next();
    });
};