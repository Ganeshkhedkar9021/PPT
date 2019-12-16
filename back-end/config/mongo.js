var mongo = require('mongodb').MongoClient;
var database = require('./config');
url =  "mongodb://localhost:27017/"+database.dataname;
module.exports= {
    connect:function(callback){
        mongo.connect(url,{ useNewUrlParser: true },function(err,db){
            if(err) throw err;
            console.log("Mongodb Connection established!");
            callback(err,db)
        })
    }
}


