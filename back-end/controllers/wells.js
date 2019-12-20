
var ObjectId = require('mongodb').ObjectId;
var database = require('../config/config');
module.exports = function(db){
var database = require('../config/config');
   var dbo =  db.db(database.dataname);
   return{
        getwells:function(req,res){
            dbo.collection('wells').find({}).sort({_id:-1}).toArray(function(err,result){
                if(err) throw err;
                res.send({error:false,result:result});
            });
        },
        createwell:function(req,res){
            var requetData = req.body;
            console.log("Final Remark: " ,requetData.final_remark);
                var wellData = {
                    "name":requetData.name,
                    "ppt_image":requetData.ppt_image,
                    "main_image":requetData.main_image,
                    "thumb_image":requetData.thumb_image,
                    "description":requetData.description, 
                }

                console.log("request Data if condition",requetData._id);
                if(requetData._id=='undefined' || requetData._id==null){
                    console.log("inside if")
                    // wellData.well_status = 1;
                    //console.log(wellData)
                    dbo.collection('wells').insertOne(wellData,function(error,result){
                        if(error) throw error;
                        res.send({error:false,result:result, message:"Well Created successfully !"})
                    });
                }
                else{
                    console.log("request Data ele condition",requetData._id);
                    var wellId = requetData._id;
                    dbo.collection('wells').updateOne({_id:new ObjectId(wellId)},{$set:wellData},function(err,result){
                        if(err) throw err;
                        res.send({error:false,result:result,message:"Well Ended suceessfully !"});
                    });
                }
                
           

                   
        },
        getactivewell: function(req,res){
            dbo.collection('wells').findOne({well_status:1},function(err,result){
                if(err) throw err;
                res.send({error:false,result:result});
            });
        },
        endwell:function(req,res){
            var requestData  = req.body;
            var wellInfo = {
                well_status:0,
                well_end_date:requestData.well_end_date,
                final_remark:requestData.final_remark
            }
            dbo.collection('wells').updateOne({_id:new ObjectId(requestData.wellId)},{$set:wellInfo},function(err,result){
                if(err) throw err;
                res.send({error:false,result:result,message:"Well Ended suceessfully !"});
            });
        },
        getwell:function(req,res){
            var wellId = req.params.id;
            dbo.collection('wells').findOne({_id:ObjectId(wellId)},function(err,result){
                if(err) throw err;
                res.send({error:false,message:"Well Information",result:result});
            });

        }
   }
}