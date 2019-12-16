var database = require('../config/config');
var jwt = require('jsonwebtoken');
module.exports = function(db){
    var dbo = db.db(database.dataname);
    return{
        login:function(req,res){
           // dbo.db
           var token = jwt.sign({username:"ado"}, 'supersecret',{expiresIn: '3h'});
           var reportData=req.body;
            var username = reportData.username;
            var password = reportData.password;
            dbo.collection('users').find({username:username,password:password}).toArray(function(err,result){
                if (err) {
                    res.send({
                        err: true,
                        result: err
                    })
                }
                else{
                    
                    if(result.length > 0){
                        if( reportData.password==password){
                        res.send({
                            error:false,
                            result:result,
                            token:token,
                            message:"Login success !!"
                        });
                    }
                        
                    }
                    else{
                        res.send({
                            error:true,
                            message:"Invalid username !!"
                        });
                    }}
                    
               
               
            });
        }
    }

}